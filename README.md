# 🌟 Personal Portfolio Website (Full-Stack)

A modern, highly interactive, and responsive personal portfolio website built with a **React (Vite)** frontend and a **Spring Boot (Java 21)** REST API backend. It features beautiful animations, a 3D interface integration, an active Contact portal, and a dynamic Guestbook/Comments system with image upload capabilities via Cloudinary.

---

## 🛠️ Tech Stack & Tools

### Frontend
* **Core Framework:** React 18.3 & Vite 5 (Fast, modern build tool)
* **Styling:** Tailwind CSS & Styled Components (Tailwind Scrollbar for custom scrolls)
* **Animations:** Framer Motion, GSAP (GreenSock), & AOS (Animation on Scroll)
* **Interactive 3D:** Spline (@splinetool/react-spline)
* **UI Components:** Material UI (MUI), Headless UI, Lucide Icons, Heroicons
* **Alerts & Visuals:** SweetAlert2 & Lottie Files (dotLottie)
* **Routing:** React Router DOM v6

### Backend
* **Core Framework:** Spring Boot 4.0.6 (Java 21)
* **API Architecture:** RESTful Web APIs (Spring WebMVC)
* **Data Access:** Spring Data JPA (Hibernate ORM)
* **Database:** PostgreSQL (Compatible with local installs or cloud services like NeonDB)
* **Image Management:** Cloudinary Java SDK (Secure, cloud-based media storage)
* **Utilities & Testing:** Project Lombok, Spring Boot DevTools, JUnit/Spring Test Suite
* **Build Tool:** Apache Maven

### Dev & Deployment
* **Containerization:** Multi-stage Dockerfile for the Backend API
* **Configuration:** Environment-driven profiles (Local vs Production)
* **CORS:** Secure CORS filter configuration mapping to dynamic frontend origins

---

## 📁 Repository Structure

```text
Portfolio/
├── backend/                  # Spring Boot REST API
│   ├── src/                  # Java source files & resources
│   ├── .env                  # Backend local environment configuration
│   ├── Dockerfile            # Multi-stage Docker build file
│   ├── pom.xml               # Maven dependency specification
│   └── mvnw / mvnw.cmd       # Maven wrapper scripts
│
├── frontend/                 # React + Vite Client
│   ├── public/               # Static web assets
│   ├── src/                  # React source files (Pages, Components, assets)
│   ├── .env                  # Frontend local environment configuration
│   ├── package.json          # Node dependencies & project scripts
│   ├── tailwind.config.js    # Tailwind CSS design system tokens
│   └── vite.config.js        # Vite compilation configuration
│
└── README.md                 # Main workspace documentation (This file)
```

---

## ✨ Key Features

1. **Splash Welcome Screen:** A premium visual introduction to the portfolio with smooth loading indicators and custom animations.
2. **Interactive 3D Elements:** Beautiful interactive backgrounds and assets integrated using Spline.
3. **Filterable Project Showcase:** Grid layout displaying software engineering projects with comprehensive detail modals.
4. **Skills & Certifications:** Carousel/grid cards illustrating credentials and tool proficiencies.
5. **Interactive Guestbook (Comments):**
   * Users can leave reviews or feedback.
   * Supports uploading custom profile pictures directly through the frontend form.
   * Profile images are processed on the backend and uploaded securely to **Cloudinary**.
   * Comments are fetched dynamically and displayed as an interactive feedback board.
6. **Instant Contact Form:** Sends user queries, names, and contact details directly to the PostgreSQL database.

---

## 🔌 API Endpoints

The backend REST API serves endpoints under the base path `/api/v1/portfolio`:

| HTTP Method | Endpoint | Request Body / Parameters | Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/health` | None | Returns backend status message (`Working!!`) |
| **POST** | `/comment` | `multipart/form-data` (Name, Message, optional Image) | Uploads profile photo to Cloudinary and saves a guestbook comment |
| **GET** | `/comment` | None | Returns list of all guestbook comments sorted by creation date |
| **POST** | `/message` | JSON body (`name`, `email`, `message`) | Sends a message from the Contact Form |
| **GET** | `/message` | None | Lists all received messages from the contact portal |
| **GET** | `/message/{email}` | Path Variable `{email}` | Fetches messages submitted by a specific email address |

---

## ⚙️ Environment Variables

To run the application, configure the following variables in environment files (`.env`) or system environments:

### Backend Configuration (`backend/.env`)
Create a file named `.env` in the `backend/` directory:
```env
# Database Credentials
DB_URL=jdbc:postgresql://localhost:5432/portfolio-db
DB_USERNAME=postgres
DB_PASSWORD=postgres

# Allowed CORS Origins
FRONTEND_URL=http://localhost:5173

# Cloudinary Storage Credentials
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Optional Hibernate Config
HIBERNATE_DDL_AUTO=update
```

### Frontend Configuration (`frontend/.env`)
Create a file named `.env` in the `frontend/` directory:
```env
# URL point to Spring Boot backend API
VITE_API_BASE_URL=http://localhost:8080/api/v1/portfolio
```

---

## 🚀 Getting Started

### Prerequisites
* **Java Development Kit (JDK) 21**
* **Node.js** (v18 or higher recommended)
* **PostgreSQL** instance running locally or on a cloud hosting provider (e.g., NeonDB)
* **Cloudinary Account** (Free tier suffices for API keys)

---

### Step-by-Step Local Setup

#### 1. Setup the Database
Create a PostgreSQL database named `portfolio-db` (or custom name as configured in your backend `.env`):
```sql
CREATE DATABASE "portfolio-db";
```

#### 2. Run the Backend API
Navigate to the backend folder and boot the Spring Boot application:
```bash
cd backend
```

* **On Windows (PowerShell/CMD):**
  ```bash
  mvnw.cmd spring-boot:run
  ```
* **On Linux/macOS:**
  ```bash
  chmod +x mvnw
  ./mvnw spring-boot:run
  ```

> [!NOTE]
> Since Hibernate DDL Auto is set to `update` by default, the database tables (`comments` and `messages`) will be auto-generated upon the first launch.

---

#### 3. Run the Frontend Client
In a new terminal window, navigate to the frontend folder and start the Vite dev server:
```bash
cd frontend

# Install client-side dependencies
npm install

# (Optional) If you run into legacy dependency tree errors:
# npm install --legacy-peer-deps

# Boot development server
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 🐳 Docker Deployment

The backend features a multi-stage Docker build to optimize size and security:

1. **Build Docker Image:**
   In the `backend/` directory, run:
   ```bash
   docker build -t portfolio-backend:latest .
   ```

2. **Run Docker Container:**
   Ensure your database and Cloudinary environment variables are passed to the container:
   ```bash
   docker run -d -p 8080:8080 \
     -e DB_URL=jdbc:postgresql://host.docker.internal:5432/portfolio-db \
     -e DB_USERNAME=postgres \
     -e DB_PASSWORD=postgres \
     -e FRONTEND_URL=http://localhost:5173 \
     -e CLOUDINARY_CLOUD_NAME=your_cloud_name \
     -e CLOUDINARY_API_KEY=your_api_key \
     -e CLOUDINARY_API_SECRET=your_api_secret \
     --name portfolio-api \
     portfolio-backend:latest
   ```

---

## 📝 License

This project is open-source. Feel free to clone, customize, and deploy it as your personal developer portal!

Developed with ❤️ by [Utkarsh Jain](https://github.com/utkarshjain45).
