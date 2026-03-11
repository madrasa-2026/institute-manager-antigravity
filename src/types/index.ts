import { UserRole } from "@prisma/client";

export interface User {
    id: string;
    email: string;
    role: UserRole;
    name?: string;
    image?: string;
}

export interface SessionUser extends Omit<User, "role"> {
    role: string;
}

declare module "next-auth" {
    interface Session {
        user: SessionUser;
    }
    interface User {
        id: string;
        email: string;
        role: string;
        name?: string;
        image?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: string;
    }
}

// API Response Types
export interface ApiResponse<T = unknown> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

// Form Types
export interface StudentFormData {
    firstName: string;
    lastName: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    dob?: Date;
    phone?: string;
    email?: string;
    presentAddress?: string;
    permanentAddress?: string;
    fatherName?: string;
    motherName?: string;
    guardian?: {
        firstName: string;
        lastName: string;
        phone: string;
        email?: string;
        relation: string;
    };
}

export interface TeacherFormData {
    firstName: string;
    lastName: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    dob?: Date;
    phone: string;
    email?: string;
    presentAddress?: string;
    permanentAddress?: string;
    designation?: string;
    departmentId?: string;
    employeeType: "TEACHING" | "NON_TEACHING" | "CONTRACT" | "PART_TIME";
    joinDate: Date;
    salary?: number;
}

export interface FeePaymentFormData {
    studentId: string;
    feeStructureId: string;
    amount: number;
    paymentDate: Date;
    paymentMethod?: string;
    transactionId?: string;
    notes?: string;
}

// Filter Types
export interface SearchFilters {
    search?: string;
    classId?: string;
    sectionId?: string;
    status?: string;
    gender?: string;
    dateFrom?: Date;
    dateTo?: Date;
    page?: number;
    limit?: number;
}

// Dashboard Types
export interface DashboardStats {
    totalStudents: number;
    totalTeachers: number;
    totalStaff: number;
    todayAttendance: {
        present: number;
        absent: number;
        late: number;
    };
    pendingFees: number;
    pendingSalary: number;
}

// Chart Types
export interface ChartDataPoint {
    name: string;
    value: number;
    color?: string;
}

export interface LineChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor?: string;
        backgroundColor?: string;
    }[];
}

// Notification Types
export interface NotificationPayload {
    title: string;
    message: string;
    type?: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
    recipients?: string[];
    sendSms?: boolean;
    sendEmail?: boolean;
}
