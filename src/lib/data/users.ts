
import { db } from '@/lib/firebase/config';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

export interface User {
    name: string;
    email: string;
    password?: string; // This will still be in the interface but won't be from auth user creation to firestore
    course: string;
    role: 'admin' | 'user';
    active: boolean;
}

const usersCollection = collection(db, 'users');

async function ensureAdminUserExists() {
    const adminEmail = "admin@passion-academia.com";
    const adminRef = doc(db, 'users', adminEmail);
    const docSnap = await getDoc(adminRef);

    if (!docSnap.exists()) {
        const adminUser: User = {
            name: "Admin",
            email: adminEmail,
            password: "admin123", // Keep password for custom verification for this default admin
            course: "All",
            role: "admin",
            active: true // Ensure admin is always active
        };
        await setDoc(adminRef, adminUser);
        console.log("Default admin user created.");
    } else {
        // If admin exists, ensure it is active
        const adminData = docSnap.data();
        if (adminData.role === 'admin' && adminData.active !== true) {
            await updateDoc(adminRef, { active: true });
            console.log("Default admin user has been activated.");
        }
    }
}

// Ensure the admin user exists when the module is loaded.
ensureAdminUserExists();

// This function can be used to create or update user data in Firestore.
// It's useful for the new user creation flow from the admin panel.
export async function setUserData(user: User) {
    const userRef = doc(db, 'users', user.email);
    // Storing user data in Firestore. We should not store the password here.
    const { password, ...userData } = user;
    await setDoc(userRef, userData, { merge: true });
}


// Function to add a user to Firestore.
// This might be deprecated in favor of setUserData, but we keep it for now.
export async function addUser(user: User) {
    const userRef = doc(db, 'users', user.email);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
        throw new Error("User with this email already exists.");
    }
    
    // Do not store the password in Firestore for users created through the form.
    const { password, ...userData } = user;
    await setDoc(userRef, userData);
}

// Function to get a single user by email from Firestore
export async function getUserByEmail(email: string): Promise<User | null> {
    const userRef = doc(db, 'users', email);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
        // We need to return the full User type, but password won't exist for new users.
        // The default admin will have it. The login logic needs to handle this.
        return docSnap.data() as User;
    }

    // Check for case-insensitive email match as a fallback.
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data() as User;
    }

    return null;
}

// Function to get all users from Firestore
export async function getAllUsers(): Promise<User[]> {
    const querySnapshot = await getDocs(usersCollection);
    const users: User[] = [];
    querySnapshot.forEach((doc) => {
        users.push(doc.data() as User);
    });
    return users;
}

// Function to toggle the active status of a user in Firestore
export async function toggleUserActiveStatus(email: string) {
    const userRef = doc(db, 'users', email);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        const user = userSnap.data() as User;
        if (user.role === 'admin') {
            throw new Error("Cannot deactivate an admin account.");
        }
        await updateDoc(userRef, {
            active: !user.active
        });
    } else {
        throw new Error("User not found.");
    }
}

// Function to delete a user from Firestore
export async function deleteUser(email: string) {
    // Note: This only deletes the Firestore record.
    // For a full implementation, you should also delete the user from Firebase Auth.
    const userRef = doc(db, 'users', email);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        const user = userSnap.data() as User;
        if (user.role === 'admin') {
            throw new Error("Cannot delete an admin account.");
        }
        await deleteDoc(userRef);
    } else {
        throw new Error("User not found.");
    }
}
