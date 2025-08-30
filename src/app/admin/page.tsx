
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { addUserToSheet, fetchUsers, toggleUserStatus, deleteUserFromSheet } from "@/app/actions";
import type { User } from "@/lib/data/users";
import { cn } from "@/lib/utils";

const courseCategories = ["AFNS", "Classes", "PAF", "MCJ", "MCM"];

export default function AdminPage() {
    const { toast } = useToast();

    const [users, setUsers] = useState<User[]>([]);

    // State for new user form
    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [newUserCourse, setNewUserCourse] = useState('');

    const loadUsers = async () => {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const role = 'user';
            await addUserToSheet(newUserName, newUserEmail, newUserPassword, newUserCourse, role);
            toast({
                title: "User Created",
                description: `Successfully created user ${newUserName}.`,
            });
            setNewUserName('');
            setNewUserEmail('');
            setNewUserPassword('');
            setNewUserCourse('');
            loadUsers(); // Refresh user list
        } catch (error) {
            console.error("Error creating user:", error);
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            toast({
                variant: "destructive",
                title: "User Creation Failed",
                description: `Could not create the new user. ${errorMessage}`,
            });
        }
    };

    const handleToggleStatus = async (email: string) => {
        const result = await toggleUserStatus(email);
        if (result.success) {
            toast({
                title: "Status Updated",
                description: `User status for ${email} has been updated.`,
            });
            loadUsers(); // Refresh user list
        } else {
             toast({
                variant: "destructive",
                title: "Update Failed",
                description: result.error || "Could not update user status.",
            });
        }
    };

    const handleDeleteUser = async (email: string) => {
        const result = await deleteUserFromSheet(email);
        if (result.success) {
            toast({
                title: "User Deleted",
                description: `User ${email} has been deleted.`,
            });
            loadUsers(); // Refresh user list
        } else {
             toast({
                variant: "destructive",
                title: "Deletion Failed",
                description: result.error || "Could not delete user.",
            });
        }
    }

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col bg-muted/40 p-4 md:p-8">
        <div className="mx-auto grid w-full max-w-2xl gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Create New User</CardTitle>
                    <CardDescription>
                        Create a new student account. The user will be added to Firebase Authentication and their data stored in Firestore.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAddUser} className="flex flex-col gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="new-user-name">Full Name</Label>
                            <Input id="new-user-name" placeholder="e.g., John Doe" value={newUserName} onChange={e => setNewUserName(e.target.value)} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="new-user-email">Email</Label>
                            <Input id="new-user-email" type="email" placeholder="e.g., john.doe@example.com" value={newUserEmail} onChange={e => setNewUserEmail(e.target.value)} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="new-user-password">Password</Label>
                            <Input id="new-user-password" type="password" placeholder="Create a strong password" value={newUserPassword} onChange={e => setNewUserPassword(e.target.value)} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="new-user-course">Assigned Course</Label>
                            <Select value={newUserCourse} onValueChange={setNewUserCourse} required>
                                <SelectTrigger id="new-user-course">
                                    <SelectValue placeholder="Select a course to assign" />
                                </SelectTrigger>
                                <SelectContent>
                                    {courseCategories.map(course => <SelectItem key={course} value={course}>{course}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" className="w-full">
                            Create User
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Manage Users</CardTitle>
                    <CardDescription>
                        Activate, deactivate, or delete user accounts.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.email}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell className="text-right">
                                       <div className="flex items-center justify-end gap-2">
                                          <Label htmlFor={`status-${user.email}`} className={cn("text-sm", user.active ? "text-green-600" : "text-muted-foreground")}>
                                              {user.active ? "Active" : "Inactive"}
                                          </Label>
                                          <Switch
                                              id={`status-${user.email}`}
                                              checked={user.active}
                                              onCheckedChange={() => handleToggleStatus(user.email)}
                                              disabled={user.role === 'admin'}
                                              aria-label={`Toggle status for ${user.email}`}
                                          />
                                           <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="ghost" size="icon" disabled={user.role === 'admin'}>
                                                        <Trash2 className="h-4 w-4 text-destructive" />
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will permanently delete the user
                                                        account for <span className="font-bold">{user.email}</span>.
                                                    </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => handleDeleteUser(user.email)}>Continue</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                       </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <div className="mx-auto grid w-full max-w-2xl gap-4 mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Content Management</CardTitle>
                        <CardDescription>
                            To add or modify course content, chapters, or MCQs, please edit the corresponding TypeScript files in the <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">src/lib/data</code> directory.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    </div>
  );
}
