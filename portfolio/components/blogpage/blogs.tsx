"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./blogcard";
import BlogSkeleton from "./blogskeleton"; // Import the skeleton
import SearchBar from "../ui/searchbar";

// Extend the Blog interface to match your API's response structure
interface Blog {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  views: number;
  coment: number;
  createdAt: Date;
  imageUrl: string;
}

const BlogComponent = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data: Blog[] = await response.json();
        setBlogs(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message); // Handle error correctly
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const groupBlogsByYear = (blogs: Blog[]) => {
    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return sortedBlogs.reduce((acc: { [year: string]: Blog[] }, blog) => {
      const year = new Date(blog.createdAt).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(blog);
      return acc;
    }, {});
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center mx-auto p-4">
        <h1 className="font-bold text-3xl mb-6 text-center">
          Some writeup related to my space
        </h1>
        <SearchBar />
        <div className="w-full sm:flex space-x-10 items-center mt-6">
          {[...Array(3)].map((_, index) => (
            <BlogSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  const blogsByYear = groupBlogsByYear(blogs);

  return (
    <div className="flex flex-col items-center mx-auto p-4">
      <h1 className="font-bold text-3xl mb-6 text-center">
        Some writeup related to my space
      </h1>
      <SearchBar />
      <div className="w-full mt-4">
        {Object.keys(blogsByYear).map((year) => (
          <div key={year} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-800">{year}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogsByYear[year].map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
