import fs from "fs"; // Node.js file system module allows you to work with the file system on your computer - CRUD + rename operations
import path from "path"; // Mode.js path module provides utilities for working with file and directory paths
import matter from "gray-matter"; // converts a string with a front-matter into an object
import Layout from "../components/layout";

export default function HomePage({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <h1>Hello NextJS World!</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  // this function only runs on the server-side
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((file) => {
    const slug = file.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      // returns a string
      path.join("posts", file),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta); // "data" property renamed to "frontmatter" after destructuring
    // console.log("markdownWithMeta -> ", markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  // console.log("posts ->", posts);

  return {
    props: {
      posts,
    },
  };
}
