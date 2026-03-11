# Antigravity School Management System

A comprehensive full-stack school management web application built with Next.js 14, TypeScript, Prisma, and PostgreSQL.

## Features

### Student Management
- New student admission with photo upload
- Complete student information storage and record management
- Class and department management
- Daily attendance tracking and reporting
- Exam scheduling and result publication
- Student information search and retrieval
- Academic and residential fee management
- Attendance and leave management
- ID card and certificate generation

### Teacher & Staff Management
- Teacher recruitment and information storage
- Salary and remuneration calculation
- Class routines and duty assignment
- Attendance and leave application system
- Teacher and staff discharge facilities
- Advance and pending salary features
- Class-wise teacher assignment

### Accounting Management
- Fee and due collection management
- Financial reports and account maintenance
- Teacher salary and other expense tracking
- Donor contribution and expense record keeping
- Loan disbursement and repayment facilities
- Furniture and asset inventory
- Daily and yearly report generation

### Academic Management
- Class routine creation and automatic notifications
- Result publication and marksheet printing
- Residential boarding/hostel management
- Admission, roll number, seat number, and admit card facilities
- Curriculum and syllabus management

### Document System
- Template upload with page design capabilities
- Watermark, header, and logo options
- Multiple signature support for responsible personnel
- Student ID cards, Marksheets, Result sheets, Invoices, and Money receipts

### Additional Features
- Cloud-based software
- Data backup and security
- Mobile, computer, or tablet compatibility
- License management and user permission control
- SMS notifications for attendance and announcements

## Technology Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **UI Components**: Radix UI, Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/antigravity.git
cd antigravity
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database URL and other settings
```

4. Generate Prisma client:
```bash
npm run db:generate
```

5. Push database schema:
```bash
npm run db:push
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
antigravity/
├── prisma/
│   └── schema.prisma       # Database schema
├── src/
│   ├── app/
│   │   ├── (auth)/        # Authentication pages
│   │   ├── (dashboard)/   # Dashboard pages
│   │   ├── api/           # API routes
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Landing page
│   ├── components/         # React components
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript types
├── public/                # Static files
└── package.json
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

## License

MIT
