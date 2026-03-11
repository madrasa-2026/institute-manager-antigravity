"use client";

import { useState } from "react";
import {
    Bell,
    Send,
    Settings,
    Search,
    Check,
    X,
    Mail,
    MessageSquare,
    AlertTriangle,
    Info,
    CheckCircle,
    Trash2,
} from "lucide-react";

const mockNotifications = [
    {
        id: 1,
        title: "New Admission",
        message: "Ahmed Hasan has been admitted to Class 5, Section A",
        type: "info",
        isRead: false,
        createdAt: "2024-12-11T10:30:00",
    },
    {
        id: 2,
        title: "Fee Payment",
        message: "Fatema Begum paid $500 for monthly fee",
        type: "success",
        isRead: true,
        createdAt: "2024-12-11T09:15:00",
    },
    {
        id: 3,
        title: "Attendance Alert",
        message: "3 students absent from Class 6-A today",
        type: "warning",
        isRead: false,
        createdAt: "2024-12-11T08:00:00",
    },
    {
        id: 4,
        title: "Exam Schedule",
        message: "Final exam schedule has been published",
        type: "info",
        isRead: true,
        createdAt: "2024-12-10T14:00:00",
    },
    {
        id: 5,
        title: "System Update",
        message: "System maintenance scheduled for tonight",
        type: "warning",
        isRead: true,
        createdAt: "2024-12-10T12:00:00",
    },
];

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(mockNotifications);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");

    const unreadCount = notifications.filter((n) => !n.isRead).length;

    const filteredNotifications = notifications.filter((notification) => {
        const matchesSearch =
            notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            notification.message.toLowerCase().includes(searchQuery.toLowerCase());

        if (activeTab === "unread") return matchesSearch && !notification.isRead;
        return matchesSearch;
    });

    const markAsRead = (id: number) => {
        setNotifications(
            notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n))
        );
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
    };

    const deleteNotification = (id: number) => {
        setNotifications(notifications.filter((n) => n.id !== id));
    };

    const getIcon = (type: string) => {
        switch (type) {
            case "success":
                return <CheckCircle className="w-5 h-5 text-emerald-500" />;
            case "warning":
                return <AlertTriangle className="w-5 h-5 text-amber-500" />;
            case "error":
                return <X className="w-5 h-5 text-rose-500" />;
            default:
                return <Info className="w-5 h-5 text-blue-500" />;
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
                    <p className="text-slate-500">
                        Manage notifications and send announcements
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                        <Settings className="w-4 h-4" />
                        Settings
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors hover:shadow-lg">
                        <Send className="w-4 h-4" />
                        Send Notice
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <Bell className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">{notifications.length}</p>
                            <p className="text-sm text-slate-500">Total Notifications</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-amber-100 rounded-xl">
                            <Mail className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">{unreadCount}</p>
                            <p className="text-sm text-slate-500">Unread</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-100 rounded-xl">
                            <MessageSquare className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">5</p>
                            <p className="text-sm text-slate-500">SMS Sent Today</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications List */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
                {/* Filters */}
                <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search notifications..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "all"
                                    ? "bg-primary text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setActiveTab("unread")}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "unread"
                                    ? "bg-primary text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            Unread ({unreadCount})
                        </button>
                        <button
                            onClick={markAllAsRead}
                            className="px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                        >
                            Mark all read
                        </button>
                    </div>
                </div>

                {/* List */}
                <div className="divide-y divide-slate-100">
                    {filteredNotifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors ${!notification.isRead ? "bg-primary/5" : ""
                                }`}
                        >
                            <div className="p-2 rounded-lg bg-slate-100">
                                {getIcon(notification.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-medium text-slate-900">{notification.title}</h3>
                                    {!notification.isRead && (
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                    )}
                                </div>
                                <p className="text-sm text-slate-600 mt-1">{notification.message}</p>
                                <p className="text-xs text-slate-400 mt-2">
                                    {new Date(notification.createdAt).toLocaleString()}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                {!notification.isRead && (
                                    <button
                                        onClick={() => markAsRead(notification.id)}
                                        className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-primary transition-colors"
                                        title="Mark as read"
                                    >
                                        <Check className="w-4 h-4" />
                                    </button>
                                )}
                                <button
                                    onClick={() => deleteNotification(notification.id)}
                                    className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-rose-600 transition-colors"
                                    title="Delete"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredNotifications.length === 0 && (
                    <div className="p-12 text-center">
                        <Bell className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-900 mb-2">
                            No notifications found
                        </h3>
                        <p className="text-slate-500">
                            You're all caught up!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
