"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Users,
    Search,
    Plus,
    Filter,
    Download,
    MoreVertical,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Eye,
    Edit,
    Trash2,
    GraduationCap,
} from "lucide-react";

// Mock data for students
const mockStudents = [
    {
        id: "1",
        studentId: "STU2024001",
        firstName: "Ahmed",
        lastName: "Hasan",
        gender: "MALE",
        className: "Class 5",
        section: "A",
        rollNumber: 1,
        phone: "+1234567890",
        email: "ahmed@example.com",
        status: "ACTIVE",
        avatar: null,
    },
    {
        id: "2",
        studentId: "STU2024002",
        firstName: "Fatema",
        lastName: "Begum",
        gender: "FEMALE",
        className: "Class 5",
        section: "A",
        rollNumber: 2,
        phone: "+1234567891",
        email: "fatema@example.com",
        status: "ACTIVE",
        avatar: null,
    },
    {
        id: "3",
        studentId: "STU2024003",
        firstName: "Muhammad",
        lastName: "Rahman",
        gender: "MALE",
        className: "Class 6",
        section: "B",
        rollNumber: 15,
        phone: "+1234567892",
        email: "rahman@example.com",
        status: "ACTIVE",
        avatar: null,
    },
    {
        id: "4",
        studentId: "STU2024004",
        firstName: "Aisha",
        lastName: "Khatun",
        gender: "FEMALE",
        className: "Class 7",
        section: "A",
        rollNumber: 8,
        phone: "+1234567893",
        email: "aisha@example.com",
        status: "INACTIVE",
        avatar: null,
    },
    {
        id: "5",
        studentId: "STU2024005",
        firstName: "Omar",
        lastName: "Faruk",
        gender: "MALE",
        className: "Class 8",
        section: "C",
        rollNumber: 22,
        phone: "+1234567894",
        email: "omar@example.com",
        status: "ACTIVE",
        avatar: null,
    },
];

export default function StudentsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

    const filteredStudents = mockStudents.filter((student) => {
        const matchesSearch =
            student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.email.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesClass = !selectedClass || student.className === selectedClass;
        const matchesStatus = !selectedStatus || student.status === selectedStatus;

        return matchesSearch && matchesClass && matchesStatus;
    });

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Students</h1>
                    <p className="text-slate-500">Manage student records and information</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                    <Link
                        href="/students/admission"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors hover:shadow-lg"
                    >
                        <Plus className="w-4 h-4" />
                        Add Student
                    </Link>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name, ID, or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                    <div className="flex gap-3">
                        <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                            <option value="">All Classes</option>
                            <option value="Class 5">Class 5</option>
                            <option value="Class 6">Class 6</option>
                            <option value="Class 7">Class 7</option>
                            <option value="Class 8">Class 8</option>
                        </select>
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                            <option value="">All Status</option>
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                            <option value="TRANSFERRED">Transferred</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Students Table */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Student
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Student ID
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Class
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Roll
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Contact
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                                    Status
                                </th>
                                <th className="text-right px-6 py-4 text-sm font-semibold text-slate-600">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredStudents.map((student) => (
                                <tr
                                    key={student.id}
                                    className="hover:bg-slate-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <span className="text-sm font-medium text-primary">
                                                    {student.firstName[0]}
                                                    {student.lastName[0]}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900">
                                                    {student.firstName} {student.lastName}
                                                </p>
                                                <p className="text-sm text-slate-500 capitalize">
                                                    {student.gender.toLowerCase()}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-mono text-slate-600">
                                            {student.studentId}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-slate-700">
                                            {student.className} - {student.section}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-slate-700">
                                            {student.rollNumber}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <Phone className="w-3.5 h-3.5" />
                                                {student.phone}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                                <Mail className="w-3.5 h-3.5" />
                                                {student.email}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${student.status === "ACTIVE"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : student.status === "INACTIVE"
                                                        ? "bg-slate-100 text-slate-700"
                                                        : "bg-amber-100 text-amber-700"
                                                }`}
                                        >
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/students/${student.id}`}
                                                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors"
                                                title="View"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </Link>
                                            <Link
                                                href={`/students/${student.id}/edit`}
                                                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors"
                                                title="Edit"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Link>
                                            <button
                                                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-rose-600 transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredStudents.length === 0 && (
                    <div className="p-12 text-center">
                        <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-900 mb-2">
                            No students found
                        </h3>
                        <p className="text-slate-500">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                )}

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-sm text-slate-500">
                        Showing {filteredStudents.length} of {mockStudents.length} students
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-sm rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous
                        </button>
                        <button className="px-3 py-1.5 text-sm rounded-lg bg-primary text-white">
                            1
                        </button>
                        <button className="px-3 py-1.5 text-sm rounded-lg border border-slate-200 hover:bg-slate-50">
                            2
                        </button>
                        <button className="px-3 py-1.5 text-sm rounded-lg border border-slate-200 hover:bg-slate-50">
                            3
                        </button>
                        <button className="px-3 py-1.5 text-sm rounded-lg border border-slate-200 hover:bg-slate-50">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
