
export interface User {
    name: string;
    email: string;
    password: string;
    course: string;
    role: 'admin' | 'user';
    active: boolean;
}

// In-memory data store for users. In a real app, this would be a database.
// The initial users are defined here.
export let users: User[] = [
    { name: "Admin User", email: "admin@passionacademia.com", password: "password", course: "Admin", role: "admin", active: true },
    { name: "Test User", email: "user@test.com", password: "password", course: "AFNS", role: "user", active: true }
];

// This function simulates adding a user to the data store.
// In this implementation, the data is only stored in memory and will be lost on server restart.
export function addUser(user: User) {
    const existingUser = users.find(u => u.email.toLowerCase() === user.email.toLowerCase());
    if (existingUser) {
        throw new Error("User with this email already exists.");
    }
    users.push(user);
}

// Function to get all users
export function getAllUsers() {
    // Return a copy to prevent direct mutation of the original array
    return [...users];
}

// Function to toggle the active status of a user
export function toggleUserActiveStatus(email: string) {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (user) {
        if (user.role === 'admin') {
            throw new Error("Cannot deactivate an admin account.");
        }
        user.active = !user.active;
    } else {
        throw new Error("User not found.");
    }
}

// Function to delete a user
export function deleteUser(email: string) {
    const userIndex = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    if (userIndex > -1) {
        if (users[userIndex].role === 'admin') {
            throw new Error("Cannot delete an admin account.");
        }
        users.splice(userIndex, 1);
    } else {
        throw new Error("User not found.");
    }
}
