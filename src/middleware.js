import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Define public routes here
  publicRoutes: ["/browse-anime", "/browse-manga"], // Replace with your actual public page paths
});

export const config = {
  matcher: [
    // Match all routes except for Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
