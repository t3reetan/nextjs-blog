import React from "react";
import Head from "next/head"; // allows us to put any custom head tags e.g. title, links, description
import Navbar from "./navbar";

// use: layout component is going to wrap any page that we create instead of a div or react fragment
const Layout = ({ title, keywords, description, children }) => {
  // children will be whatever was wrapped with the <Layout> tag
  return (
    <div>
      <Head>
        <title>{title || "Welcome to the best Next JS blog tutorial"}</title>
        <meta
          name="keywords"
          content={keywords || "nextjs, blog, dev, coding"}
        />
        <meta
          name="description"
          content={description || "The best NextJS blog tutorial!"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="container mx-auto my-7">{children}</div>
    </div>
  );
};

export default Layout;
