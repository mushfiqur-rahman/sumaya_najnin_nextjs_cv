import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import Head from "next/head";
import CareerObjective from "@/components/CareerObjective";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Activities from "@/components/Activities";
import Volunteer from "@/components/Volunteer";
import Professional from "@/components/Professional";
import Conference from "@/components/Conference";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="robots" content="follow, index" />
        <meta name="google-site-verification" content="" />
        <meta name="yandex-verification" content="" />

        <meta name="facebook-domain-verification" content="" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" key="desc" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="" name="position" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="rating" content="General" />
        <meta name="author" content="Sumaya Najnin" />
        <meta name="owner" content="Sumaya Najnin" />
        <meta name="robots" content="index,follow,noodp,noydir" />
        <meta name="copyright" content="Copyright © Sumaya Najnin" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta name="msvalidate.01" content="" />
        <meta property="og:site_name" content="Sumaya Najnin" />
        <meta property="og:description" content="" />
        <meta
          property="og:title"
          content="Sumaya Najnin  and an IT support engineer"
        />
        <meta property="og:image" content="" />
        <meta property="fb:app_id" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:title"
          content="Sumaya Najnin and an IT support engineer"
        />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
        <meta name="keywords" content="" />
        <meta name="impact-site-verification" value="" />
        <link href="https://sumayanajnin.com.bd" rel="canonical" />
        <meta content="https://sumayanajnin.com.bd" property="og:url" />
        <meta content="Sumaya Najnin" name="author" />
        <meta content="Sumaya Najnin Portfolio" name="application-name" />
        <title>SUMAYA NAJNIN - Portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${geistSans.className} ${geistMono.className} md:w-[1140px] mx-auto min-h-screen px-10 py-5 rounded-lg shadow-2xl dark:shadow-slate-300 font-[family-name:var(--font-geist-sans)]`}
      >
        <main>
          <Hero />
          <CareerObjective />
          <Skills />
          <Education />
          <Activities />
          <Volunteer />
          <Professional />
          <Conference />
        </main>
        <Footer />
      </div>
    </>
  );
}
