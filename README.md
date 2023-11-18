# iamdylan.dev

Welcome to `iamdylan.dev`, a dynamic and professional portfolio website. Crafted using Next.js 13 and TypeScript, this site features a sleek design powered by Material-UI (MUI). It's not just a showcase of skills and projects but also includes a blog, contact forms with Google reCAPTCHA for spam protection, rate limiting for enhanced security, and emailing functionality.

This project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Next.js 13**: Utilizing the latest capabilities of Next.js for fast, server-side rendered React applications.
- **TypeScript**: Ensuring code reliability and maintainability with strong typing.
- **Material-UI (MUI)**: A modern UI framework providing a suite of components for a great user interface.
- **Google reCAPTCHA**: Integrated into forms for spam protection.
- **Rate Limiting**: Implemented to prevent abuse and ensure service availability.
- **Emailing**: Using Nodemailer to manage communication directly through the site.
- **Blog**: A feature for sharing thoughts, insights, and updates integrated with strapi.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser. You can start editing by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` for font optimization, including the custom Google Font, Inter.

## Learn More about Next.js

- [Next.js Documentation](https://nextjs.org/docs) - Features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive tutorial.
- Feedback and contributions are welcome at [the Next.js GitHub repository](https://github.com/vercel/next.js/).

## Deployment

Deploy with the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), recommended by Next.js. See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details.

## Development Scripts

In the project directory, you can run:

- `npm run dev` or equivalent: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm start`: Runs the built app in production mode.
- `npm run format:check`: Checks the format of files.
- `npm run format:write`: Formats files.
- `npm run types:check`: Checks TypeScript types.
- `npm run dep:check`: Checks for unused dependencies, missing dependencies and dependencies that require updates
- `npm run dep:update`: Updates outdated dependencies

## Dependencies

This project includes a variety of dependencies for functionality and development, including MUI components, Axios for HTTP requests, Nodemailer for email functionality, rate limiting, React and Next.js libraries, and many others for optimal development experience.

---

For any queries or contributions, feel free to open an issue or a pull request in the repository.
