
"use server";

import { users, addUser, toggleUserActiveStatus, getAllUsers, deleteUser } from '@/lib/data/users';

export async function verifyUserInSheet(email: string, password: string): Promise<{ success: boolean; course?: string; name?: string; email?: string, role?: string, active?: boolean }> {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (user) {
        return { success: true, name: user.name, email: user.email, course: user.course, role: user.role, active: user.active };
    }
    return { success: false };
}

export async function addUserToSheet(name: string, email: string, password: string, course: string, role: 'admin' | 'user') {
    // This function will add the user to the in-memory array.
    // In a real application, this would write to a persistent database.
    // For this project, the change will only persist until the server restarts.
    addUser({ name, email, password, course, role, active: true });
    console.log("Simulating: Add User to Sheet", { name, email, course, role });
    console.log("Current users:", users);
    return Promise.resolve();
}

export async function fetchUsers() {
    return getAllUsers();
}

export async function toggleUserStatus(email: string) {
    try {
        toggleUserActiveStatus(email);
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function deleteUserFromSheet(email: string) {
    try {
        deleteUser(email);
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
