# Afsuldeen.j — Python Full-Stack Developer Portfolio

A modern, high-performance, recruiter-friendly developer portfolio showcasing practical, production-grade applications built with **Python**, **FastAPI**, **MySQL**, **React**, and **REST APIs**.

🌐 **Live Portfolio Website:** [https://afsul2004.github.io/port-polio/](https://afsul2004.github.io/port-polio/)  
🐙 **GitHub Profile:** [https://github.com/afsul2004](https://github.com/afsul2004)  
💼 **LinkedIn Profile:** [https://www.linkedin.com/in/afsul2004](https://www.linkedin.com/in/afsul2004)  

---

## 👨‍💻 Professional Summary

- **Name:** Afsuldeen.j
- **Role:** Python Full-Stack Developer | Fresher
- **Education & Certifications:** 
  - **Java Full-Stack Developer Course Completion & Internship Certificate** (Granted: 31/03/2026) — *JSpiders Software Training Institute / QSpiders Software Testing Training Institute (Velachery, Chennai)*
  - **MCA** (2025–2027), Annai College of Arts and Science — *Pursuing*
  - **BCA** (2022–2025), Annai College of Arts and Science — *Completed*
- **Primary Tech Stack:** Python 3.14, FastAPI, Java (Full-Stack), MySQL 8.0, SQLAlchemy 2.0 ORM, React 18, JavaScript (ES6+), HTML5, CSS3, REST APIs, Git, and GitHub.
- **Career Objective:** Seeking an entry-level Full-Stack Developer position where I can engineer scalable backend architectures, normalized relational databases, and clean web applications.

---

## 🚀 Featured Full-Stack Projects

### 1. AMFLIP / ECOMPROFF — E-Commerce Website & REST API
A full-stack e-commerce web platform engineered with an asynchronous Python FastAPI backend, a normalized MySQL database, and a dynamic frontend built with HTML, CSS, JavaScript, and React.

- 🌐 **Live Demo:** [https://afsul2004.github.io/ecom_website/](https://afsul2004.github.io/ecom_website/)
- 💻 **Frontend Repository:** [https://github.com/afsul2004/ecom_website](https://github.com/afsul2004/ecom_website)
- ⚙️ **Backend Repository:** [https://github.com/afsul2004/ecom_backend](https://github.com/afsul2004/ecom_backend)
- **Implemented Architecture & Features:**
  - **Authentication:** Bcrypt password encryption and JWT access token verification.
  - **Catalog Management:** Dynamic product search, category filtering, and inventory status tracking.
  - **Cart & Order Pipeline:** Cart item management, order checkout, receipt upload, and status transitions (`Pending`, `Paid`, `Shipped`, `Delivered`).
  - **Modular FastAPI Routers:** Separated route controllers for `auth`, `products`, `categories`, `orders`, `wishlist`, and `admin`.
  - **Automated Testing:** Pytest test suites validating inventory cancellation and revenue calculation logic.

---

### 2. Job Portal Based on Online Examination System
A production-grade recruitment portal featuring an integrated online examination system, automated candidate scoring, and configurable rule-based eligibility evaluation across **17 normalized MySQL tables**.

- 🌐 **Live Demo:** [https://afsul2004.github.io/job_portal/](https://afsul2004.github.io/job_portal/)
- 💻 **Source Code Repository:** [https://github.com/afsul2004/job_portal](https://github.com/afsul2004/job_portal)
- **Implemented Architecture & Features:**
  - **Multi-Role RBAC:** Dedicated workflows for `ADMIN`, `HR`, and `CANDIDATE` with admin account approval and resume file uploads.
  - **Online Examination Engine:** Server-timed MCQ sessions, dynamic question palette navigation, real-time auto-saving of answers, and instant grading.
  - **Automated Eligibility Engine:** Rule-based decision calculation:
    - *Programmer Role:* Exam score $> 8.0/10$ and academic aggregate $> 75.0\%$.
    - *Data Entry Operator Role:* Exam score $6.0 - 8.0/10$ and academic aggregate $> 65.0\%$.
  - **Recruitment Management:** Application status tracking (`APPLIED` $\to$ `ELIGIBLE` $\to$ `SHORTLISTED` $\to$ `SELECTED`), testing centre seating allocation, and employee onboarding.
  - **Relational MySQL Database:** 17 normalized 3NF tables (`users`, `candidate_profiles`, `job_positions`, `applications`, `exams`, `questions`, `exam_attempts`, etc.).
  - **Test Suite:** Automated Pytest suite testing API boundaries and business logic.

---

## 🛠️ Technical Skills

| Domain | Technologies & Competencies |
| :--- | :--- |
| **Backend Development** | Python 3.14, FastAPI, RESTful APIs, Pydantic v2, SQLAlchemy 2.0 ORM, PyMySQL, Uvicorn ASGI |
| **Databases & Modeling** | MySQL 8.0, Normalized Schema Design (3NF), SQL (DDL/DML), Foreign Keys, Data Seeding, Indexing |
| **Frontend Engineering** | HTML5, CSS3, JavaScript (ES6+), React 18, Vite, React Router v6, Axios, Responsive Design |
| **Security & Architecture** | JWT Bearer Authentication, Bcrypt Password Hashing, Role-Based Access Control (RBAC), Input Validation |
| **Tools & Testing** | Git, GitHub, VS Code, Pytest, Swagger UI / OpenAPI, Postman, GitHub Pages |

---

## 💻 Local Development Setup

To run this portfolio locally without any external build dependencies:

### Option A: Using Python's Built-in HTTP Server
```bash
# Clone the repository
git clone https://github.com/afsul2004/port-polio.git
cd port-polio

# Run local HTTP server
python -m http.server 8080
```
Open your browser at `http://localhost:8080`.

### Option B: Using Node / npx serve
```bash
npx serve .
```

### Option C: VS Code Live Server
Right-click on `index.html` in VS Code and select **Open with Live Server**.

---

## 🚢 GitHub Pages Deployment

This portfolio is built with standard HTML5, CSS3, and JavaScript and is 100% compatible with GitHub Pages without any build steps.

### Step-by-Step Git Commands to Commit and Push:

```bash
# 1. Check git status
git status

# 2. Stage all updated portfolio files
git add .

# 3. Commit with a clear, professional message
git commit -m "feat: upgrade portfolio to professional Python full-stack developer showcase"

# 4. Push to GitHub main branch
git push origin main
```

### Enable GitHub Pages in your Repository Settings:
1. Navigate to your repository: `https://github.com/afsul2004/port-polio`
2. Click **Settings** $\to$ **Pages** (under Code and automation).
3. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`
   - **Branch:** Select `main` and `/ (root)`
4. Click **Save**.
5. Within 1–2 minutes, your updated portfolio will be live at `https://afsul2004.github.io/port-polio/`.

---

## 📋 Pre-Deployment Testing Checklist

- [x] **Visual Design:** Dark theme with refined cyan/indigo accents and glassmorphism.
- [x] **Responsive Layout:** Tested on desktop, tablet, and mobile screens.
- [x] **Navigation:** Fixed sticky navbar with smooth scrolling and active section tracking.
- [x] **Mobile Menu:** Functional hamburger toggle with automatic close on link click.
- [x] **Project 1 (AMFLIP / ECOMPROFF):** Verified live demo, frontend repo, and backend repo links.
- [x] **Project 2 (Job Portal):** Verified live demo and source code repo links.
- [x] **Architecture Panels:** Collapsible technical specifications and Swagger/DB details.
- [x] **Education & Profile:** Accurate BCA (completed) and MCA (pursuing) details.
- [x] **Contact Form & Channels:** Verified email (`afsal8133@gmail.com`), phone, LinkedIn, and copy buttons.
- [x] **Asset Paths:** Relative paths (`profile.jpg`, `assets/ecom_preview.svg`, `assets/jobportal_preview.svg`, `assets/favicon.svg`).

---

## 📬 Contact & Connect

- **Email:** [afsal8133@gmail.com](mailto:afsal8133@gmail.com)
- **Phone:** [+971 58 255 2600](tel:+971582552600)
- **LinkedIn:** [linkedin.com/in/afsul2004](https://www.linkedin.com/in/afsul2004)
- **GitHub:** [github.com/afsul2004](https://github.com/afsul2004)
- **Location:** UAE, Dubai (Open to Remote / Relocation)
