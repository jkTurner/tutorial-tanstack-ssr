# TanStack React Query SSR Setup (Next.js 15)

This project demonstrates how to integrate **TanStack React Query** with **Server-Side Rendering (SSR)** in a **Next.js 15** app. By prefetching data on the server and hydrating it on the client, you get the best of both worlds: **fast, SEO-friendly pages** with **reactive client-side state** — all while leveraging React Query's powerful caching system.

## What This Project Covers

- Setting up `QueryClientProvider` in Next.js 15
- Creating a reusable `fetchPosts()` function
- Prefetching data server-side with `prefetchQuery()`
- Using `dehydrate()` and `<HydrationBoundary>` for hydration
- Avoiding duplicate fetches on the client
- Rendering a fully functional client component (`<PostList />`) with SEO-friendly preloaded data

## Read the Full Tutorial

This project is part of the **Dev Steps Tutorials** series by Jakkrit Turner.  
Follow the complete tutorial here:

**[TanStack SSR Tutorial on jkturner.site](http://jkturner.site/tutorials/react-ecosystem/tanstack/tanstack-ssr)**

## Tech Stack

- Next.js 15.3.3
- TanStack React Query 5.80.5
- Tailwind CSS 4