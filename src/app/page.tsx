import Link from "next/link";
import {
    GraduationCap,
    Users,
    BookOpen,
    DollarSign,
    FileText,
    Bell,
    BarChart3,
    Settings,
    Building2,
    Calendar,
    ClipboardList,
    CreditCard,
    Home,
} from "lucide-react";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Section */}
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-slate-900">Antigravity</h1>
                                <p className="text-xs text-slate-500">School Management System</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/login"
                                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Complete School Management
                        <span className="text-primary"> Solution</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A comprehensive ERP system for educational institutions featuring student
                        management, attendance tracking, academics, accounting, and more.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {/* Student Management */}
                    <FeatureCard
                        icon={<Users className="w-6 h-6" />}
                        title="Student Management"
                        description="Complete student lifecycle from admission to alumni. Track records, attendance, fees, and more."
                        href="/students"
                        delay={1}
                    />

                    {/* Teacher & Staff */}
                    <FeatureCard
                        icon={<GraduationCap className="w-6 h-6" />}
                        title="Teacher & Staff"
                        description="Manage recruitment, salary, duties, leaves, and performance of teaching and non-teaching staff."
                        href="/teachers"
                        delay={2}
                    />

                    {/* Academic */}
                    <FeatureCard
                        icon={<BookOpen className="w-6 h-6" />}
                        title="Academic Management"
                        description="Class routines, exams, results, curriculum, syllabus, and hostel management."
                        href="/academic"
                        delay={3}
                    />

                    {/* Accounting */}
                    <FeatureCard
                        icon={<DollarSign className="w-6 h-6" />}
                        title="Accounting"
                        description="Fee collection, expenses, income, salary disbursement, and financial reports."
                        href="/accounting"
                        delay={4}
                    />

                    {/* Attendance */}
                    <FeatureCard
                        icon={<ClipboardList className="w-6 h-6" />}
                        title="Attendance System"
                        description="Digital attendance tracking with automatic parent notifications and detailed reports."
                        href="/attendance"
                        delay={5}
                    />

                    {/* Documents */}
                    <FeatureCard
                        icon={<FileText className="w-6 h-6" />}
                        title="Document System"
                        description="Generate ID cards, marksheets, certificates, and receipts with custom templates."
                        href="/documents"
                        delay={6}
                    />
                </div>

                {/* Dashboard Preview */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 mb-16">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                        Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureItem
                            icon={<Users className="w-5 h-5" />}
                            title="1,500+ Students"
                            description="Manage large student databases"
                        />
                        <FeatureItem
                            icon={<BarChart3 className="w-5 h-5" />}
                            title="Real-time Reports"
                            description="Financial & academic analytics"
                        />
                        <FeatureItem
                            icon={<Bell className="w-5 h-5" />}
                            title="SMS Notifications"
                            description="Parent & staff alerts"
                        />
                        <FeatureItem
                            icon={<Settings className="w-5 h-5" />}
                            title="Role-based Access"
                            description="Secure permission controls"
                        />
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        Ready to transform your institution?
                    </h3>
                    <p className="text-slate-600 mb-8">
                        Start with a 14-day free trial. No credit card required.
                    </p>
                    <Link
                        href="/register"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl"
                    >
                        Start Free Trial
                        <Home className="w-5 h-5" />
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                    <GraduationCap className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white font-bold">Antigravity</span>
                            </div>
                            <p className="text-sm">
                                Comprehensive school management system for modern educational
                                institutions.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Modules</h4>
                            <ul className="space-y-2 text-sm">
                                <li>Students</li>
                                <li>Teachers</li>
                                <li>Academics</li>
                                <li>Accounting</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Features</h4>
                            <ul className="space-y-2 text-sm">
                                <li>Attendance</li>
                                <li>Documents</li>
                                <li>Notifications</li>
                                <li>Reports</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2 text-sm">
                                <li>support@antigravity.com</li>
                                <li>+1 234 567 890</li>
                                <li> Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
                        © 2024 Antigravity. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({
    icon,
    title,
    description,
    href,
    delay,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    delay: number;
}) {
    return (
        <Link
            href={href}
            className={`premium-card p-6 group stagger-${delay} opacity-0 animate-fade-in`}
        >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm">{description}</p>
        </Link>
    );
}

function FeatureItem({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-slate-900">{title}</h4>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
        </div>
    );
}
