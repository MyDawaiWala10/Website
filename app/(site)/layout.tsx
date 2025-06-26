"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Providers from "./provider";
import { getAllProducts } from "@/actions/get-all-products";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["gatAllProducts"],
    queryFn: getAllProducts,
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>My DawaiWala</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Welcome to My Dawai Wala, one stop to all your medicine needs"
        />
        <link rel="icon" href="/images/favicon.svg" />
      </head>
      <body className={`dark:bg-black ${inter.className}`}>
        <Providers>
          {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
            <ThemeProvider
              enableSystem={false}
              attribute="class"
              defaultTheme="light"
            >
              <Lines />
              <Header />
              <ToasterContext />
              {children}
              <Footer />
              {/* <ScrollToTop /> */}
            </ThemeProvider>
          {/* </HydrationBoundary> */}
        </Providers>
      </body>
    </html>
  );
}
