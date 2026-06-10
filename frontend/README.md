# Portfolio Frontend - Utkarsh Jain

This is the frontend React application for my personal portfolio website, which showcases software engineering projects, certifications, competitive programming stats, and contact details.

**Tech Stack used:**
- ReactJS (Vite)
- Tailwind CSS
- Spring Boot (Backend API)
- Cloudinary (Backend-side Image Storage)
- PostgreSQL (NeonDB)
- AOS (Animation on Scroll)
- Framer Motion
- Lucide Icons
- Material UI
- SweetAlert2

---

## Running the Project

### Prerequisites
- **Node.js** (v18 or higher recommended)

---

### Steps to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/utkarshjain45/Portfolio.git
   cd Portfolio/frontend
   ```

2. **Configure Environment Variables:**
   Create a `.env` file in the `frontend` root directory:
   ```env
   VITE_API_BASE_URL=http://localhost:8080/api/v1/portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```
   Or if peer dependency issues occur:
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to the URL shown in your terminal (usually `http://localhost:5173`).

---

## Creating a Production Build

To build the project for production deployment:
1. Run the build command:
   ```bash
   npm run build
   ```
2. The production-ready static assets will be output to the `dist/` directory.

---

## Integration with Spring Boot Backend

The comments and contact forms are fully integrated with a Spring Boot backend API. 
- **Contact Portal:** Submits user messages directly to the backend endpoint `POST /message`.
- **Comments Portal:** Submits comments as multipart form data (`name`, `message`, and optional profile photo `image`) to `POST /comment`. The backend processes and uploads the image to Cloudinary, then stores the comment details (including the Cloudinary `secure_url`) in PostgreSQL.
