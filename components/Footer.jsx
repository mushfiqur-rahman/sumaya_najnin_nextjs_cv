import React from "react";
import Link from "next/link";

const Footer = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <>
      <div className="mt-4 flex flex-col justify-center py-6 sm:flex-row">
        <p className="text-center md:text-center cursor-default">
          &copy; Copyright 2024 - {date}. All right reserved by{" "}
          <Link href="https://sumayanajnin.com.bd">SUMAYA NAJNIN</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
