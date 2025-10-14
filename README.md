# 🧩 Resume Generator (Frontend)

A simple **React + TypeScript** web app that allows users to generate and download professional `.docx` resumes.  
The app provides a clean form interface for entering personal details, skills, and work experience, and connects to a backend service that produces a downloadable document.

---

## 🚀 Features

- 📝 Fill in your personal details, skills, and work experience  
- ➕ Dynamically add or remove skills and job entries  
- ✅ Real-time validation powered by **Yup**  
- 📄 Generate a `.docx` resume file via backend API  
- 💾 Download your resume instantly  
- 🧭 Navigation with **React Router DOM** (Home & Resume pages)

---

## 🧠 How It Works

1. On the **Home page**, users can access the Resume Generator.  
2. On the **Resume page**, users fill out the form with:
   - Name, email, city, and country  
   - Skills (multiple entries supported)  
   - Work experience (company, position, years)
3. Upon clicking **Generate Resume**, the data is sent to the backend via **Axios**.  
4. The backend returns a `.docx` file, which can then be downloaded with a single click.

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | **React + TypeScript** |
| Forms | **Formik** |
| Validation | **Yup** |
| Routing | **React Router DOM** |
| HTTP Client | **Axios** |
| Utility | **clsx** |
| Build Tool | **Vite** |

---

## 📸 Screenshots

*(Add screenshots here once the UI is finalized)*  
Example:
<p>&nbsp;<img src="/Screenshot.png" alt="example screenshot" /></p>

The app will be available at:
👉 https://resume-generator-fe.vercel.app

Or you can set it up locally: 
## 📂 Project Setup
To run the project on your local machine, follow these steps:

1. **Clone the repository**  
```bash
git https://github.com/AlexandraSavenko/resume_generator_fe.git
cd resume_generator
```bash
# install dependencies
npm install
# or with yarn:

yarn


# create .env file and add the like to it: 
https://resume-generator-be.onrender.com

# Start the server

npm run dev


# or with yarn:

yarn dev
