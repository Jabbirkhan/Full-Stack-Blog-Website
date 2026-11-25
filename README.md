# Blog Website

A modern, full-stack **Blog Platform** built using the **MERN Stack** (**MongoDB, Express.js, React.js, and Node.js**).
The application provides a secure blogging experience with dedicated interfaces for both **Users** and a **Single Administrator**.
Authenticated users can discover articles, read blog content, like or unlike posts, explore categories, view author information, and interact with platform content. The administrator can manage blogs, social links, policies, principles, and website information through a dedicated **Admin Dashboard**.
---

## ✨ Features
### 👤 User Features
- ✅ User Registration & Login
- ✅ Email Verification with OTP
- ✅ Forgot Password & Password Reset
- ✅ Google OAuth Authentication
- ✅ GitHub OAuth Authentication
- ✅ Browse Latest Blogs
- ✅ Browse Top Blogs
- ✅ Category-Based Filtering
- ✅ Blog Search Functionality
- ✅ Server-Side Pagination
- ✅ Read Full Blog Articles
- ✅ Like / Unlike Blogs
- ✅ View Total Like Counts
- ✅ Track Personal Like Status
- ✅ Blog Sharing Support
- ✅ Author Information Display
- ✅ Estimated Reading Time
- ✅ Contact Form
- ✅ Privacy Policy Access
- ✅ Responsive Design
### 👨💼 Admin Features
- ✅ Single Admin Account Restriction
- ✅ Secure Authentication
- ✅ OTP-Based Password Recovery
- ✅ Centralized Admin Dashboard
#### 📝 Blog Management
- Create Blogs
- Update Blogs
- Delete Blogs
- Manage Latest Blogs
#### ⚙️ Content Management
- Principles Management
- Policies Management
- Social Links Management
- About Information Management
---
# 🛠️ Technology Stack
## 🎨 Frontend
| Technology | Purpose |
|------------|----------|
| React.js | User Interface |
| Tailwind CSS | Styling |
| React Router DOM | Client-Side Routing |
| Context API | State Management |
| Axios | HTTP Requests |
| Code Splitting | Performance Optimization |
---
## 🧩 Admin Dashboard
| Technology | Purpose |
|------------|----------|
| React.js | Admin Interface |
| Tailwind CSS | Styling |
---
## ⚡ Backend
| Technology | Purpose |
|------------|----------|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| REST APIs | API Architecture |
| ES Modules | Module System |
---
## ☁️ Database & Storage
| Technology | Purpose |
|------------|----------|
| MongoDB Atlas | Database |
| Cloudinary | Image & File Storage |
| Multer | File Upload Handling |
---
## 🔐 Authentication & Security
| Technology | Purpose |
|------------|----------|
| JWT | Authentication |
| bcrypt | Password Hashing |
| HTTP Cookies | Token Storage |
| Google OAuth | Google Authentication |
| GitHub OAuth | GitHub Authentication |
| Upstash Redis | API Rate Limiting |
---
## 📧 Email Services
| Technology | Purpose |
|------------|----------|
| Nodemailer | Email Delivery |
| SMTP | Email Transport |
---
## 🚀 Deployment
| Component | Platform |
|------------|----------|
| Frontend | Vercel |
| Admin Dashboard | Vercel |
| Backend API | Render |
| Database | MongoDB Atlas |
---
# 📂 Project Structure
```text
MERN-Blog-Website/
│
├── frontend/        # User Frontend
├── admin/           # Admin Dashboard
├── backend/         # Express API & Business Logic
└── README.md
```
---
# ✨ Core Functionalities
## 🔍 Blog Discovery
Authenticated users can explore blog content through:
- Browse Latest Blogs
- Browse Top Blogs
- Search Blogs
- Filter by Category
- Explore Paginated Results
### Homepage Sections
- 🔥 Latest Blogs
- ⭐ Top Blogs
- 📂 Featured Categories
- 📈 Popular Content
---
## 📖 Blog Details
Each blog provides:
- Featured Image
- Blog Title
- Full Blog Content
- Category
- Author Information
- Estimated Reading Time
- Total Like Count
- Personal Like Status
- Sharing Options
---
## ❤️ Like System
Users can engage with articles by:
### Available Operations
- Like Articles
- Unlike Articles
- View Total Like Counts
- Track Personal Like Activity
### Features
- Real-Time UI Updates
- User-Specific Like Tracking
- Blog Engagement Metrics
---
## 📬 Contact & Information Pages
### ℹ️ About Page
Displays:
- Organization Information
- Mission & Vision
- Principles
- General Website Information
### 📞 Contact Page
Allows users to:
- Submit Contact Messages
- Reach Website Administrators
### 🔒 Privacy Policy
Provides information about:
- Privacy Practices
- Data Usage
- User Rights
---
# 🔐 Authentication System
## 👤 User Authentication
### Email & Password Authentication
- User Registration
- User Login
- Email Verification with OTP
- Password Reset
- Secure Logout
### OAuth Authentication
Supported providers:
- Google OAuth
- GitHub OAuth
---
## 👨💼 Admin Authentication
Includes:
- Single Admin Account Restriction
- Admin Registration
- Admin Login
- Session Verification
- OTP-Based Password Recovery
- JWT Authentication
- Protected Admin Routes
---
# 👨💼 Admin Dashboard
The Admin Dashboard provides centralized management of blog content and website information.
## 📝 Blog Management
Administrators can manage:
- Blog Image
- Blog Title
- Blog Content
- Category
- Author Details
- Latest Blog Flag
### Operations
| Operation | Description |
|------------|------------|
| Create | Add New Blogs |
| Read | View Existing Blogs |
| Update | Modify Blog Information |
| Delete | Remove Blogs |
---
## 📌 Principles Management
Administrators can:
- Add Principles
- View Principles
- Edit Existing Principles
---
## 📋 Policies Management
Administrators can:
- Add Policies
- View Policies
- Update Existing Policies
---
## 🔗 Social Links Management
Administrators can:
- Add Social Media Links
- Update Existing Links
- Manage External Links
---
## ℹ️ About Information Management
Administrators can:
- Add Organization Information
- Update About Content
- Manage Website Display Information
---
# 📱 Pages & Screens
## User Frontend
| Page | Description |
|--------|------------|
| Register | User Registration |
| Login | User Authentication |
| Home | Blog Homepage |
| Blogs | Blog Listing |
| Blog Detail | Full Blog Article |
| About | Organization Information |
| Contact | Contact Form |
| Privacy Policy | Privacy Information |
| Forgot Password | Password Recovery |
| Verify Email | OTP Verification |
---
## Admin Dashboard
| Page | Description |
|--------|------------|
| Register | Admin Registration |
| Add Blog | Create New Blog |
| Blog List | Manage Existing Blogs |
| Update Blog | Edit Blog Content |
| Add Social Links | Create Social Links |
| All Social Links | Manage Social Links |
| Add Policies | Create Policies |
| All Policies | Manage Policies |
| Add Principles | Create Principles |
| All Principles | Manage Principles |
| Add Information | Create About Information |
| All Information | Manage About Information |
| Forgot Password | Password Recovery |
| Verification Pages | OTP Verification |
---
# 🌐 API Architecture
The backend follows a REST API architecture with separate routes for user and admin operations.
## Base Routes
```js
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
```
---
## 👤 User APIs
**Base URL**
```text
/api/v1/user
```
| Method | Endpoint | Description |
|----------|-------------|-------------|
| POST | /register | User Registration |
| POST | /login | User Login |
| GET | /verifyuser | Verify User Session |
| GET | /profile | Get User Profile |
| POST | /logout | User Logout |
| GET | /send-verify-email-otp | Send Verification OTP |
| POST | /verify-email-otp | Verify Email |
| POST | /send-reset-password-otp | Send Password Reset OTP |
| POST | /verify-reset-password-otp | Verify Reset OTP |
| POST | /reset-password | Reset Password |
| GET | /allblogs | Get Blogs |
| GET | /alllikes/:id | Get Blog Likes |
| POST | /togglelike/:id | Toggle Blog Like |
| GET | /allprinciples | Get Principles |
| GET | /allpolicies | Get Policies |
| GET | /alllinks | Get Social Links |
| GET | /allinformation | Get About Information |
| POST | /send-contact-message | Send Contact Message |
---
## 👨💼 Admin APIs
**Base URL**
```text
/api/v1/admin
```
| Method | Endpoint | Description |
|----------|-------------|-------------|
| POST | /register | Admin Registration |
| POST | /login | Admin Login |
| GET | /verify | Verify Admin Session |
| POST | /logout | Admin Logout |
| POST | /send-reset-password-otp | Send Password Reset OTP |
| POST | /verify-reset-password-otp | Verify Reset OTP |
| POST | /reset-password | Reset Password |
| POST | /addblog | Add Blog |
| GET | /allblogs | Get Blogs |
| PATCH | /updateblog/:id | Update Blog |
| DELETE | /deleteblog/:id | Delete Blog |
| POST | /addprinciple | Add Principle |
| GET | /allprinciples | Get Principles |
| PATCH | /updateprinciple/:id | Update Principle |
| POST | /addpolicies | Add Policy |
| GET | /allpolicies | Get Policies |
| PATCH | /updatepolicies/:id | Update Policy |
| POST | /addlinks | Add Social Link |
| GET | /alllinks | Get Social Links |
| PATCH | /updatelinks/:id | Update Social Link |
| POST | /addinformation | Add Information |
| GET | /allinformation | Get Information |
| PATCH | /updateinformation/:id | Update Information |
---
# ☁️ Database & Storage
## MongoDB Atlas
Stores:
- User Accounts
- Admin Accounts
- Blogs
- Likes
- Categories
- Policies
- Principles
- Social Links
- About Information
- Content Metadata
- Uploaded Asset URLs
---
## Cloudinary
Manages:
- Blog Images
- Uploaded Media
- PDF Files
- Asset Resources
---
# 📧 Email Services
Uses **Nodemailer** with **SMTP**.
### Supported Email Operations
- Email Verification OTPs
- Password Reset OTPs
- Contact Form Messages
- Account Notifications
---
# ⚙️ Environment Variables
## Backend (`.env`)
```env
PORT=
ADMIN_EMAIL=
MONGODB_URI=
DB_NAME=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_CALLBACK_URL=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SENDER_EMAIL=
```
## Frontend (`.env`)
```env
VITE_BACKEND_URL=http://localhost:8002
```
## Admin Dashboard (`.env`)
```env
VITE_BACKEND_URL=http://localhost:8002
```
> **Note:** Verify OAuth callback URLs and backend ports before production deployment.
---
# 🚀 Installation & Setup
## 1️⃣ Clone Repository
```bash
git clone https://github.com/Jabbirkhan/Full-Stack-Blog-Website.git
```
## 2️⃣ Install Dependencies
### Backend
```bash
cd backend
npm install
```
### Frontend
```bash
cd frontend
npm install
```
### Admin Dashboard
```bash
cd admin
npm install
```
## 3️⃣ Configure Environment Variables
Create:
```text
backend/.env
frontend/.env
admin/.env
```
Configure credentials for:
- MongoDB Atlas
- Cloudinary
- SMTP
- Google OAuth
- GitHub OAuth
- Upstash Redis
---
## 4️⃣ Start Backend Server
```bash
cd backend
npm run server
```
## 5️⃣ Start Frontend
```bash
cd frontend
npm run dev
```
## 6️⃣ Start Admin Dashboard
```bash
cd admin
npm run dev
```
✅ Frontend, Backend, and Admin Dashboard will run as separate applications.
---
# 🔒 Security Features
- bcrypt Password Hashing
- JWT Cookie-Based Authentication
- Protected Routes
- Google OAuth Authentication
- GitHub OAuth Authentication
- Email Verification
- OTP-Based Password Recovery
- API Rate Limiting with Upstash Redis
- Input Validation
- Secure File Upload Handling
- Role-Based Access Control
---
# 📱 Responsive Design
Optimized for:
- 💻 Desktop Computers
- 💼 Laptops
- 📱 Mobile Devices
- 📟 Tablets
---
# ☁️ Deployment Architecture
| Component | Platform |
|------------|----------|
| Public Frontend | Vercel |
| Admin Dashboard | Vercel |
| Backend REST API | Render |
| Database | MongoDB Atlas |
| Media Storage | Cloudinary |
---
# ✅ Testing Checklist
### Authentication
- [ ] User Registration
- [ ] User Login
- [ ] User Logout
- [ ] Email Verification
- [ ] Password Reset
- [ ] Google OAuth
- [ ] GitHub OAuth
### Admin Authentication
- [ ] Admin Login
- [ ] Admin Access Verification
### Blog Features
- [ ] Create Blog
- [ ] Update Blog
- [ ] Delete Blog
- [ ] Blog Image Upload
- [ ] Like / Unlike System
- [ ] Blog Sharing
- [ ] Category Filtering
- [ ] Blog Search
- [ ] Server-Side Pagination
### Admin Features
- [ ] Principles Management
- [ ] Policies Management
- [ ] Social Links Management
- [ ] About Information Management
### General
- [ ] Contact Form Email Delivery
- [ ] Responsive Layouts
- [ ] Production Environment Configuration
---

# 📄 License
This project is licensed under the **MIT License**.
---
# 👨💻 Author
Developed using:
- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Cloudinary
- JWT Authentication
- Google OAuth
- GitHub OAuth
- Tailwind CSS
---
