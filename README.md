# AI Lumina - Educational Platform

## 🚀 Project Overview

AI Lumina is a modern, AI-powered educational platform designed to provide personalized learning experiences. Built with the latest web technologies, it features a responsive design, interactive course management, and an AI tutor assistant.

## 🛠 Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management/Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)

## 📂 Project Structure

The project follows a clean, industry-standard folder structure:

```
src/
├── components/         # Reusable UI components
│   ├── common/         # Shared components (Cards, etc.)
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── ui/             # Shadcn UI primitives
├── layouts/            # Page layouts (RootLayout)
├── pages/              # Application pages/routes
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── services/           # API services (placeholder)
├── utils/              # Helper functions
└── App.tsx             # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd educational
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Copy `.env.example` to `.env` and update the values if necessary.

    ```bash
    cp .env.example .env
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The app will be available at `http://localhost:5173`.

## 🐳 Docker Support

To run the application in a Docker container:

1.  **Build the Docker image:**

    ```bash
    docker build -t ai-lumina .
    ```

2.  **Run the container:**

    ```bash
    docker run -p 8080:80 ai-lumina
    ```

    Access the app at `http://localhost:8080`.

## 📦 Deployment

### Vercel

The project is configured for Vercel deployment with a `vercel.json` file handling SPA routing.

1.  Push your code to a Git repository.
2.  Import the project into Vercel.
3.  Vercel will detect the Vite build settings automatically.

### CI/CD

A Github Actions workflow is included in `.github/workflows/ci.yml`. It automatically:

- Lints the code
- Builds the project
- Attempts a Docker build

## 🤝 Contributing

1.  Fork the repository
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License.
