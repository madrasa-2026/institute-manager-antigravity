"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    LayoutDashboard,
    Users,
    UserCheck,
    BookOpen,
    DollarSign,
    ClipboardList,
    FileText,
    Bell,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronDown,
    Building2,
    Calendar,
    BarChart3,
    CreditCard,
    Send,
    Home,
} from "lucide-react";

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Students",
        href: "/students",
        icon: Users,
        children: [
            { name: "All Students", href: "/students" },
            { name: "Admission", href: "/students/admission" },
            { name: "Attendance", href: "/students/attendance" },
            { name: "ID Cards", href: "/students/id-cards" },
        ],
    },
    {
        name: "Teachers",
        href: "/teachers",
        icon: UserCheck,
        children: [
            { name: "All Teachers", href: "/teachers" },
            { name: "Add Teacher", href: "/teachers/add" },
            { name: "Attendance", href: "/teachers/attendance" },
            { name: "Leave Requests", href: "/teachers/leave" },
        ],
    },
    {
        name: "Staff",
        href: "/staff",
        icon: Building2,
        children: [
            { name: "All Staff", href: "/staff" },
            { name: "Add Staff", href: "/staff/add" },
        ],
    },
    {
        name: "Academic",
        href: "/academic",
        icon: BookOpen,
        children: [
            { name: "Classes", href: "/academic/classes" },
            { name: "Subjects", href: "/academic/subjects" },
            { name: "Class Routine", href: "/academic/routine" },
            { name: "Exams", href: "/academic/exams" },
            { name: "Results", href: "/academic/results" },
            { name: "Syllabus", href: "/academic/syllabus" },
        ],
    },
    {
        name: "Attendance",
        href: "/attendance",
        icon: ClipboardList,
    },
    {
        name: "Accounting",
        href: "/accounting",
        icon: DollarSign,
        children: [
            { name: "Fee Collection", href: "/accounting/fees" },
            { name: "Expenses", href: "/accounting/expenses" },
            { name: "Income", href: "/accounting/income" },
            { name: "Salary", href: "/accounting/salary" },
            { name: "Reports", href: "/accounting/reports" },
        ],
    },
    {
        name: "Hostel",
        href: "/hostel",
        icon: Home,
        children: [
            { name: "Rooms", href: "/hostel/rooms" },
            { name: "Students", href: "/hostel/students" },
        ],
    },
    {
        name: "Documents",
        href: "/documents",
        icon: FileText,
        children: [
            { name: "Templates", href: "/documents/templates" },
            { name: "Generate", href: "/documents/generate" },
            { name: "Signatures", href: "/documents/signatures" },
        ],
    },
    {
        name: "Reports",
        href: "/reports",
        icon: BarChart3,
        children: [
            { name: "Student Reports", href: "/reports/students" },
            { name: "Academic Reports", href: "/reports/academic" },
            { name: "Financial Reports", href: "/reports/financial" },
            { name: "Attendance Reports", href: "/reports/attendance" },
        ],
    },
    {
        name: "Notifications",
        href: "/notifications",
        icon: Bell,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Settings,
        children: [
            { name: "General", href: "/settings" },
            { name: "Users", href: "/settings/users" },
            { name: "Roles", href: "/settings/roles" },
        ],
    },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { data: session } = useSession();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

    const toggleMenu = (name: string) => {
        setExpandedMenus((prev) =>
            prev.includes(name)
                ? prev.filter((item) => item !== name)
                : [...prev, name]
        );
    };

    const isActive = (href: string) => {
        return pathname === href || pathname.startsWith(href + "/");
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Mobile sidebar backdrop */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Logo */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200">
                    <Link href="/dashboard" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-slate-900">Antigravity</h1>
                            <p className="text-xs text-slate-500">School Management</p>
                        </div>
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
                    {navigation.map((item) => (
                        <div key={item.name}>
                            {item.children ? (
                                <div>
                                    <button
                                        onClick={() => toggleMenu(item.name)}
                                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive(item.href)
                                                ? "bg-primary/10 text-primary"
                                                : "text-slate-600 hover:bg-slate-100"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className="w-5 h-5" />
                                            {item.name}
                                        </div>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${expandedMenus.includes(item.name) ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {expandedMenus.includes(item.name) && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden ml-4"
                                            >
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className={`block px-3 py-2 rounded-lg text-sm transition-all ${pathname === child.href
                                                                ? "bg-primary/10 text-primary font-medium"
                                                                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                                            }`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive(item.href)
                                            ? "bg-primary/10 text-primary"
                                            : "text-slate-600 hover:bg-slate-100"
                                        }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main content */}
            <div className="lg:pl-72">
                {/* Header */}
                <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    <div className="flex-1 lg:flex-none" />

                    <div className="flex items-center gap-4">
                        {/* Notifications */}
                        <Link
                            href="/notifications"
                            className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                            <Bell className="w-5 h-5 text-slate-600" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
                        </Link>

                        {/* User menu */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-primary">
                                    {session?.user?.name?.[0] || "U"}
                                </span>
                            </div>
                            <div className="hidden md:block">
                                <p className="text-sm font-medium text-slate-900">
                                    {session?.user?.name || "User"}
                                </p>
                                <p className="text-xs text-slate-500 capitalize">
                                    {session?.user?.role?.toLowerCase() || "Admin"}
                                </p>
                            </div>
                            <button
                                onClick={() => signOut({ callbackUrl: "/login" })}
                                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                                title="Sign out"
                            >
                                <LogOut className="w-5 h-5 text-slate-600" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="p-4 lg:p-8">{children}</main>
            </div>
        </div>
    );
}
