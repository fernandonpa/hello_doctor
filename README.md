# Hello Doctor - Healthcare Patient Management System

A modern healthcare patient management system built with Next.js, designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.

![Hello Doctor Dashboard](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)

## 🌟 Features

### Patient Management

- **Patient Registration**: Complete patient onboarding with medical history
- **Profile Management**: Comprehensive patient profiles with personal and medical information
- **Document Upload**: Secure identification document storage
- **Privacy Consent**: HIPAA-compliant consent management

### Appointment System

- **Online Booking**: Patient-friendly appointment scheduling interface
- **Doctor Selection**: Choose from available healthcare providers
- **Status Tracking**: Real-time appointment status updates
- **Cancellation & Rescheduling**: Flexible appointment management

### Admin Dashboard

- **Analytics Overview**: Key metrics and statistics
- **Appointment Management**: Schedule, confirm, and cancel appointments
- **Patient Database**: Comprehensive patient information management
- **Doctor Overview**: Healthcare provider status and availability
- **Quick Actions**: Streamlined administrative workflows

### Security & Compliance

- **Admin Authentication**: Secure admin access with passkey
- **Data Encryption**: Secure patient data handling
- **Privacy Controls**: GDPR and HIPAA compliance features
- **Audit Trails**: Complete activity logging

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, Lucide React Icons
- **Backend**: Appwrite (BaaS)
- **Database**: Appwrite Database
- **File Storage**: Appwrite Storage
- **Authentication**: Appwrite Auth
- **Form Handling**: React Hook Form, Zod Validation
- **Monitoring**: Sentry
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/fernandonpa/hello_doctor.git
cd hello_doctor
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

```bash
# Appwrite Configuration
PROJECT_ID=your_project_id
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
API_KEY=your_api_key
DATABASE_ID=your_database_id
PATIENT_COLLECTION_ID=your_patient_collection_id
DOCTOR_COLLECTION_ID=your_doctor_collection_id
APPOINTMENT_COLLECTION_ID=your_appointment_collection_id

# Storage
NEXT_PUBLIC_BUCKET_ID=your_bucket_id

# Admin Access
NEXT_PUBLIC_ADMIN_PASSKEY=your_admin_passkey

# Monitoring (Optional)
SENTRY_AUTH_TOKEN=your_sentry_token
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Deploy to Vercel**

```bash
npm run build
vercel --prod
```

2. **Environment Variables**
   Add all environment variables from `.env.local` to your Vercel project settings.

3. **Domain Configuration**
   Configure your custom domain in Vercel dashboard.

### Manual Deployment

1. **Build the application**

```bash
npm run build
npm start
```

## 📁 Project Structure

```
hello_doctor/
├── app/                          # Next.js App Router
│   ├── admin/                    # Admin dashboard pages
│   ├── patients/                 # Patient-related pages
│   │   └── [userId]/
│   │       ├── new-appointment/  # Appointment booking
│   │       └── register/         # Patient registration
│   ├── api/                      # API routes
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
├── components/                   # React components
│   ├── admin/                   # Admin-specific components
│   │   ├── DashboardStats.tsx
│   │   ├── QuickActions.tsx
│   │   └── RecentAppointments.tsx
│   ├── forms/                   # Form components
│   │   ├── AppointmentForm.tsx
│   │   ├── PatientForm.tsx
│   │   └── RegisterForm.tsx
│   ├── ui/                      # UI components (Shadcn/ui)
│   └── table/                   # Data table components
├── lib/                         # Utility functions
│   ├── actions/                 # Server actions
│   ├── utils.ts                 # Helper functions
│   └── validation.ts            # Form validation schemas
├── types/                       # TypeScript type definitions
└── constants/                   # Application constants
```

## 🔧 Configuration

### Appwrite Setup

1. **Create an Appwrite Project**
   - Visit [Appwrite Console](https://cloud.appwrite.io)
   - Create a new project
   - Copy the Project ID

2. **Database Collections**
   Create the following collections:
   - **Patients**: Store patient information
   - **Doctors**: Healthcare provider data
   - **Appointments**: Appointment records

3. **Storage Bucket**
   - Create a storage bucket for document uploads
   - Configure appropriate permissions

4. **API Key**
   - Generate an API key with necessary permissions
   - Add to environment variables

### Admin Access

Access the admin dashboard by visiting:

```
http://localhost:3000/?admin=true
```

Enter the admin passkey configured in your environment variables.

## 🎨 Customization

### Styling

- Modify `app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.js`
- Customize UI components in `components/ui/`

### Features

- Add new form fields in `components/forms/`
- Extend admin functionality in `components/admin/`
- Modify validation schemas in `lib/validation.ts`

## 📊 Admin Features

### Dashboard Analytics

- Total patients count
- Appointment statistics
- Pending appointments
- Scheduled appointments

### Quick Actions

- Add new patients
- Schedule appointments
- Generate reports
- System settings

### Appointment Management

- View all appointments
- Update appointment status
- Cancel appointments
- Reschedule appointments

## 🔒 Security

- **Authentication**: Secure admin access with passkey
- **Data Validation**: Comprehensive form validation with Zod
- **File Upload**: Secure document handling
- **Privacy**: HIPAA-compliant data management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email your-email@example.com or create an issue on GitHub.

---

**© 2024 Hello Doctor. All rights reserved.**
