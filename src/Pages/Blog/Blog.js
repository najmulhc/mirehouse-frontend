import React from "react";

const Blog = () => {
  return (
    <div className="bg-komola p-8">
      <h1 className="text-kala text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="container mx-auto my-4">
        <div className="p-6 rounded-md shadow-md bg-white my-4">
          <h1 className="text-kala text-xl  text-left mb-4 ">
            What is the main difference between `javascript` and `nodejs`?
          </h1>
          <p>
            javascript is a programming language that does scriting on a website
            where node js is a runtime of javascript that allows us to run js
            outside a browser like (servers).{" "}
          </p>
        </div>
        <div className="p-6 rounded-md shadow-md bg-white my-4">
          <h1 className="text-kala text-xl  text-left mb-4 ">
          When should you use `nodejs` and when should you use `mongodb`?
          </h1>
          <p>
            we use node js in the server to make connection with frontend and the database. but we use mongodb as a no-sql database to store our data{" "}
          </p>
        </div>
        <div className="p-6 rounded-md shadow-md bg-white my-4">
          <h1 className="text-kala text-xl  text-left mb-4 ">
          Differences between `sql` and `nosql` databases?
          </h1>
          <p>
            sql is a relational database management system with fixed schema where as no-sql is a non-relational databse with dynamic schema{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
