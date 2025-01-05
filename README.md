# Tinder Movie

Tinder Movie is a React application built with TypeScript and Vite. It allows users to swipe through a list of movies and accept or reject them, similar to the Tinder app.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Mocking API Requests](#mocking-api-requests)
- [GitHub Pages Deployment](#github-pages-deployment)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/tinder-movie.git
   cd tinder-movie
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:5173]([http://localhost:5173) to see the application running.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint to lint the codebase.
- `npm run preview`: Previews the production build.

## Mocking API Requests

The project uses `msw` (Mock Service Worker) to mock API requests. The mock service worker is configured in the [mocks](./src/mocks/) directory.

- [browser.ts](./src/mocks/browser.ts): Sets up the mock service worker.
- [handlers.ts](./src/mocks/handlers.ts): Defines the request handlers for the mock API.
- [movies.json](./src/mocks/movies.json): Contains the mock data for movies.

The mock service worker is started in [main.tsx](./src/main.tsx):

## GitHub Pages Deployment

The project is configured to deploy to GitHub Pages using GitHub Actions. The workflow is defined in [gh-pages-deploy.yml](./.github/workflows/gh-pages-deploy.yml)

To deploy the project to GitHub Pages, push your changes to the main branch or manually trigger the workflow from the Actions tab in your GitHub repository.

Demo is available here: [paulaags.github.io/tinder-movie/](https://paulaags.github.io/tinder-movie/)
