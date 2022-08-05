This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Personal documentation

Few things to keep in mind:
1. Make sure that all .env.local variables are available and have the correct values.
2. This application can only run if you have Strapi running as the backend of this application.
3. Cloudinary is used and an image managment tool. While not nessesary, it is advised to also set it up.
4. Auth0 is the tool that handles user signup and login.
5. Auth0 needs some rules for the application to handle user correctly.
6. Stripe is used as the payment tool.
7. Framer motion is used as an animation tool.

![Overview Diagram](overview_diagram.jpg?raw=true "Overview Diagram")

When deploying: 
1. make sure your rule links are updated to the production links. 
2. Make sure you have an .env.production file with links(and without public and secret keys).