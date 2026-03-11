"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import {
    Users,
    UserCheck,
    GraduationCap,
    DollarSign,
    ClipboardList,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Calendar,
    Clock,
    BookOpen,
    Activity,
} from "lucide-react";

const today = new Date();
const stats = [
    {
        title: "Total Students",
        value: "1,547",
        change: "+12%",
        trend: "up",
        icon: Users,
        color: "blue",
    },
    {
        title: "Total Teachers",
        value: "89",
        change: "+5%",
        trend: "up",
        icon: UserCheck,
        color: "emerald",
    },
    {
        title: "Total Staff",
        value: "42",
        change: "+2%",
        trend: "up",
        icon: GraduationCap,
        color: "purple",
    },
    {
        title: "Monthly Revenue",
        value: "$124,500",
        change: "+18%",
        trend: "up",
        icon: DollarSign,
        color: "amber",
    },
];

const recentActivities = [
    {
        id: 1,
        action: "New student admitted",
        details: "Ahmed Hasan - Class 5, Section A",
        time: "5 minutes ago",
        icon: Users,
        color: "blue",
    },
    {
        id: 2,
        action: "Fee payment received",
        details: "$500 from Fatema Begum",
        time: "15 minutes ago",
        icon: DollarSign,
        color: "emerald",
    },
    {
        id: 3,
        action: "Attendance marked",
        details: "Class 6 - 98% present",
        time: "30 minutes ago",
        icon: ClipboardList,
        color: "purple",
    },
    {
        id: 4,
        action: "Exam result published",
        details: "Class 7 - Terminal Exam",
        time: "1 hour ago",
        icon: BookOpen,
        color: "amber",
    },
];

const upcomingEvents = [
    {
        id: 1,
        title: "Parent-Teacher Meeting",
        date: "Tomorrow, 10:00 AM",
        type: "event",
    },
    {
        id: 2,
        title: "Final Exam Start",
        date: "Dec 15, 2024",
        type: "exam",
    },
    {
        id: 3,
        title: "Fee Due Date",
        date: "Dec 20, 2024",
        type: "deadline",
    },
];

const colorClasses: Record<string, string> = {
    blue: "bg-blue-500",
    emerald: "bg-emerald-500",
    purple: "bg-purple-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
};

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                    <p className="text-slate-500">Welcome back! Here's what's happening today.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-600">{format(today, "MMMM d, yyyy")}</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                                <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                            </div>
                            <div className={`p-3 rounded-xl ${colorClasses[stat.color]} bg-opacity-10`}>
                                <stat.icon className={`w-6 h-6 ${colorClasses[stat.color].replace("bg-", "text-")}`} />
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {stat.trend === "up" ? (
                                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                            ) : (
                                <ArrowDownRight className="w-4 h-4 text-rose-500" />
                            )}
                            <span className={`text-sm font-medium ${stat.trend === "up" ? "text-emerald-500" : "text-rose-500"}`}>
                                {stat.change}
                            </span>
                            <span className="text-sm text-slate-500">vs last month</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Attendance Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm"
                >
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-slate-900">Today's Attendance</h2>
                            <button className="text-sm text-primary hover:underline">View Details</button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-24 h-24 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                                    <span className="text-2xl font-bold text-emerald-600">94%</span>
                                </div>
                                <p className="text-sm font-medium text-slate-700">Present</p>
                                <p className="text-xs text-slate-500">1,454 students</p>
                            </div>
                            <div className="text-center">
                                <div className="w-24 h-24 mx-auto rounded-full bg-rose-100 flex items-center justify-center mb-3">
                                    <span className="text-2xl font-bold text-rose-600">4%</span>
                                </div>
                                <p className="text-sm font-medium text-slate-700">Absent</p>
                                <p className="text-xs text-slate-500">62 students</p>
                            </div>
                            <div className="text-center">
                                <div className="w-24 h-24 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-3">
                                    <span className="text-2xl font-bold text-amber-600">2%</span>
                                </div>
                                <p className="text-sm font-medium text-slate-700">Late</p>
                                <p className="text-xs text-slate-500">31 students</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Recent Activities */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-xl border border-slate-100 shadow-sm"
                >
                    <div className="p-6 border-b border-slate-100">
                        <h2 className="text-lg font-semibold text-slate-900">Recent Activities</h2>
                    </div>
                    <div className="p-4 space-y-4">
                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="flex items-start gap-3">
                                <div className={`p-2 rounded-lg ${colorClasses[activity.color]} bg-opacity-10`}>
                                    <activity.icon className={`w-4 h-4 ${colorClasses[activity.color].replace("bg-", "text-")}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                                    <p className="text-xs text-slate-500 truncate">{activity.details}</p>
                                </div>
                                <span className="text-xs text-slate-400">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Upcoming Events */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-xl border border-slate-100 shadow-sm"
                >
                    <div className="p-6 border-b border-slate-100">
                        <h2 className="text-lg font-semibold text-slate-900">Upcoming Events</h2>
                    </div>
                    <div className="p-4 space-y-3">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.id}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                                <div className={`w-2 h-2 rounded-full ${event.type === "event" ? "bg-blue-500" :
                                    event.type === "exam" ? "bg-purple-500" : "bg-amber-500"
                                    }`} />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-900">{event.title}</p>
                                    <p className="text-xs text-slate-500">{event.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Fee Collection */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-xl border border-slate-100 shadow-sm"
                >
                    <div className="p-6 border-b border-slate-100">
                        <h2 className="text-lg font-semibold text-slate-900">Fee Status</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-slate-600">Collected</span>
                                <span className="text-sm font-medium text-emerald-600">$98,500</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "78%" }} />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-slate-600">Pending</span>
                                <span className="text-sm font-medium text-amber-600">$18,000</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-amber-500 rounded-full" style={{ width: "14%" }} />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-slate-600">Overdue</span>
                                <span className="text-sm font-medium text-rose-600">$8,000</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-rose-500 rounded-full" style={{ width: "8%" }} />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-br from-primary to-indigo-600 rounded-xl p-6 text-white"
                >
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                            <div className="space-y-2">
                                <button className="w-full text-left px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm font-medium">
                                    + New Admission
                                </button>
                                <button className="w-full text-left px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm font-medium">
                                    Mark Attendance
                                </button>
                                <button className="w-full text-left px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm font-medium">
                                    Create Fee Invoice
                                </button>
                                <button className="w-full text-left px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm font-medium">
                                    Send Notice
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/20">
                            <div className="flex items-center gap-2 text-sm">
                                <Activity className="w-4 h-4" />
                                <span>System is running normally</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
