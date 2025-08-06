# Daniel Marc D'Souza - Personal Portfolio Website

This is a personal portfolio website for Daniel Marc D'Souza, built with React, Tailwind CSS, and Shadcn/ui.

## Features

- Modern, responsive design
- Dark theme with a professional accent color
- Smooth scrolling navigation
- Dynamic content pulled from resume details
- Sections for Home, About, Skills, Projects, and Contact
- Resume download functionality

## Technologies Used

- **Frontend:** React (Vite), Tailwind CSS, Shadcn/ui, Lucide React
- **Languages:** JavaScript (JSX), HTML, CSS

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd daniel-portfolio
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    # or npm install
    # or yarn install
    ```
3.  **Run the development server:**
    ```bash
    pnpm run dev
    # or npm run dev
    # or yarn dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

4.  **Build for production:**
    ```bash
    pnpm run build
    # or npm run build
    # or yarn build
    ```
    This will create a `dist` directory with the production-ready build.

## Custom Domain Setup

To set up a custom domain (e.g., `danielmarcdsouza.com`), you will need to configure DNS records with your domain registrar. Here are the typical steps:

1.  **Log in to your domain registrar's website.**
2.  **Navigate to the DNS management page for your domain.**
3.  **Add the following records:**
    *   **CNAME Record:**
        *   **Host (or Name):** `www`
        *   **Value (or Target):** `[YOUR_DEPLOYMENT_URL_WITHOUT_HTTPS_PREFIX]` (e.g., `wywnnpky.manus.space`)
    *   **A Record:**
        *   **Host (or Name):** `@` (or your root domain)
        *   **Value (or Target):** `76.76.21.21`

**Note:** DNS changes can take up to 48 hours to propagate globally.

## Contact

For any inquiries, please contact Daniel Marc D'Souza at danielmarcdsouza@gmail.com.

