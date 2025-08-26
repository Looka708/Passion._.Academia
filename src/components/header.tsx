
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { Menu, Search, ChevronDown, LogOut } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
  { href: "/#faq", label: "FAQ's" },
];

const testLinks = [
    { href: "/afns", label: "AFNS" },
    { href: "/paf", label: "PAF" },
    { href: "/mcj", label: "MCJ" },
    { href: "/mcm", label: "MCM" },
];

const classLinks = [
    { href: "/classes/6", label: "Class 6" },
    { href: "/classes/7", label: "Class 7" },
    { href: "/classes/8", label: "Class 8" },
    { href: "/classes/9", label: "Class 9" },
    { href: "/classes/10", label: "Class 10" },
    { href: "/classes/11", label: "Class 11" },
    { href: "/classes/12", label: "Class 12" },
];

export default function Header() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-4 hidden items-center md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="hidden font-bold sm:inline-block">
              Passion Academia
            </span>
          </Link>
          <div className="relative mr-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="search" placeholder="Want to learn?" className="pl-10 w-64" />
             <Button variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-2">
              Explore <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-0 text-sm font-medium transition-colors hover:bg-transparent hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0">
                  Tests <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {testLinks.map((link) => (
                   <DropdownMenuItem key={link.label} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-0 text-sm font-medium transition-colors hover:bg-transparent hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0">
                  Classes <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {classLinks.map((link) => (
                   <DropdownMenuItem key={link.label} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
             <Link href="/" className="mr-6 flex items-center space-x-2">
                <Logo />
                <span className="font-bold">Passion Academia</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <Accordion type="single" collapsible>
                  <AccordionItem value="tests" className="border-b-0">
                    <AccordionTrigger className="py-2 text-muted-foreground transition-colors hover:text-primary hover:no-underline">Tests</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col space-y-3">
                      {testLinks.map((link) => (
                        <SheetClose asChild key={link.label}>
                          <Link
                            href={link.href}
                            className="text-muted-foreground transition-colors hover:text-primary"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="classes" className="border-b-0">
                    <AccordionTrigger className="py-2 text-muted-foreground transition-colors hover:text-primary hover:no-underline">Classes</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col space-y-3">
                      {classLinks.map((link) => (
                        <SheetClose asChild key={link.label}>
                          <Link
                            href={link.href}
                            className="text-muted-foreground transition-colors hover:text-primary"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
         {isAuthenticated ? (
            <>
              {user?.role === 'admin' && (
                <Button asChild variant="outline">
                    <Link href="/admin">Admin</Link>
                </Button>
              )}
              <Button onClick={logout} variant="ghost" size="icon" aria-label="Sign out">
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <Button asChild>
              <Link href="/signin">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
