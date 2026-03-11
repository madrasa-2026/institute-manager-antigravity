"use client";

import { useState } from "react";
import {
    DollarSign,
    Plus,
    Search,
    Filter,
    Download,
    Eye,
    Edit,
    Trash2,
    Receipt,
    CreditCard,
    Banknote,
    TrendingUp,
    TrendingDown,
    Calendar,
} from "lucide-react";

// Mock data for fee payments
const mockPayments = [
    {
        id: 1,
        studentName: "Ahmed Hasan",
        studentId: "STU2024001",
        className: "Class 5",
        feeType: "Monthly",
        month: "December 2024",
        amount: 100,
        paidAmount: 100,
        paymentDate: "2024-12-10",
        paymentMethod: "CASH",
        status: "PAID",
        receiptNumber: "RCP-001",
    },
    {
        id: 2,
        studentName: "Fatema Begum",
        studentId: "STU2024002",
        className: "Class 5",
        feeType: "Monthly",
        month: "December 2024",
        amount: 100,
        paidAmount: 100,
        paymentDate: "2024-12-09",
        paymentMethod: "BANK",
        status: "PAID",
        receiptNumber: "RCP-002",
    },
    {
        id: 3,
        studentName: "Muhammad Rahman",
        studentId: "STU2024003",
        className: "Class 6",
        feeType: "Monthly",
        month: "December 2024",
        amount: 100,
        paidAmount: 50,
        paymentDate: null,
        paymentMethod: null,
        status: "PARTIAL",
        receiptNumber: null,
    },
    {
        id: 4,
        studentName: "Aisha Khatun",
        studentId: "STU2024004",
        className: "Class 7",
        feeType: "Annual",
        month: "2024-2025",
        amount: 1200,
        paidAmount: 0,
        paymentDate: null,
        paymentMethod: null,
        status: "PENDING",
        receiptNumber: null,
    },
];

export default function AccountingFeesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

    const filteredPayments = mockPayments.filter((payment) => {
        const matchesSearch =
            payment.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.studentId.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = !selectedStatus || payment.status === selectedStatus;
        return matchesSearch && matchesStatus;
    });

    const totalCollected = mockPayments
        .filter((p) => p.status === "PAID")
        .reduce((sum, p) => sum + p.paidAmount, 0);
    const totalPending = mockPayments
        .filter((p) => p.status === "PENDING")
        .reduce((sum, p) => sum + (p.amount - p.paidAmount), 0);
    const totalPartial = mockPayments
        .filter((p) => p.status === "PARTIAL")
        .reduce((sum, p) => sum + (p.amount - p.paidAmount), 0);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Fee Collection</h1>
                    <p className="text-slate-500">Manage student fees and payments</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors hover:shadow-lg">
                        <Plus className="w-4 h-4" />
                        Collect Fee
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Total Collected</p>
                            <p className="text-2xl font-bold text-emerald-600 mt-1">
                                ${totalCollected.toLocaleString()}
                            </p>
                        </div>
                        <div className="p-3 bg-emerald-100 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-emerald-600" />
                        </div>
                    </div>
                    <p className="text-sm text-emerald-600 mt-2">+12% from last month</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Pending</p>
                            <p className="text-2xl font-bold text-amber-600 mt-1">
                                ${totalPending.toLocaleString()}
                            </p>
                        </div>
                        <div className="p-3 bg-amber-100 rounded-xl">
                            <TrendingDown className="w-6 h-6 text-amber-600" />
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">Due this month</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Partial</p>
                            <p className="text-2xl font-bold text-blue-600 mt-1">
                                ${totalPartial.toLocaleString()}
                            </p>
                        </div>
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <CreditCard className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">Partially paid</p>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by student name or ID..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                        <option value="">All Status</option>
                        <option value="PAID">Paid</option>
                        <option value="PENDING">Pending</option>
                        <option value="PARTIAL">Partial</option>
                    </select>
                </div>
            </div>

            {/* Payments Table */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Student
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Fee Type
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Amount
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Paid
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Due
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Status
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Receipt
                                </th>
                                <th className="text-right px-6 py-4 text-sm font-semibold text-slate-600">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredPayments.map((payment) => (
                                <tr key={payment.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-slate-900">{payment.studentName}</p>
                                            <p className="text-sm text-slate-500">{payment.studentId}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="text-sm text-slate-700">{payment.feeType}</p>
                                            <p className="text-xs text-slate-500">{payment.month}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-medium text-slate-900">
                                            ${payment.amount}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-emerald-600 font-medium">
                                            ${payment.paidAmount}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-rose-600 font-medium">
                                            ${payment.amount - payment.paidAmount}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${payment.status === "PAID"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : payment.status === "PARTIAL"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-amber-100 text-amber-700"
                                                }`}
                                        >
                                            {payment.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {payment.receiptNumber ? (
                                            <span className="text-sm font-mono text-slate-600">
                                                {payment.receiptNumber}
                                            </span>
                                        ) : (
                                            <span className="text-sm text-slate-400">-</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors"
                                                title="View"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors"
                                                title="Edit"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors"
                                                title="Print Receipt"
                                            >
                                                <Receipt className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
