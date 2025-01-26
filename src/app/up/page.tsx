"use client";
import { useEffect, useState } from "react";

interface Blog {
  id?: string; // Optional for creating new blogs
  title: string;
  content: string;
  author: string;
  description: string;
  coment: number;
  category: string;
  views: number;
  published: boolean;
  imageUrl: string;
}

export default function Writeup() {
  const [blog, setBlog] = useState<Blog>({
    title: "",
    content: "",
    author: "",
    description: "",
    coment: 0,
    category: "",
    views: 0,
    published: false,
    imageUrl: "",
  });

  const [searchTitle, setSearchTitle] = useState("");
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [searchResults, setSearchResults] = useState<Blog[]>([]); // Store search results

  // Fetch blog titles dynamically as user types
  useEffect(() => {
    const fetchBlogs = async () => {
      if (searchTitle.trim()) {
        try {
          const response = await fetch(`/api/blogs?search=${searchTitle}`);
          if (response.ok) {
            const data = await response.json();
            setSearchResults(data); // Set search results
          } else {
            setSearchResults([]); // Clear results on error
          }
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      } else {
        setSearchResults([]); // Clear results if search is empty
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchBlogs();
    }, 300); // Debounce for better performance

    return () => clearTimeout(delayDebounceFn); // Clean up the timeout
  }, [searchTitle]);

  // Handle form submission for creating/updating blog
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = isUpdateMode ? "PUT" : "POST"; // Determine method based on mode
    const url = isUpdateMode ? `/api/blogs/${blog.id}` : "/api/blogs"; // Set URL for update

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        const data = await response.json();
        alert(
          `Blog ${isUpdateMode ? "updated" : "created"} successfully with ID: ${
            data.blog.id
          }`
        );
        resetForm();
      } else {
        alert("Error submitting blog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setBlog({
      title: "",
      content: "",
      author: "",
      description: "",
      coment: 0,
      category: "",
      views: 0,
      published: false,
      imageUrl: "",
    });
    setIsUpdateMode(false);
    setSearchTitle(""); // Clear the search title
    setSearchResults([]); // Clear search results
  };

  // Fill the form with selected blog data
  const handleSelectBlog = (selectedBlog: Blog) => {
    setBlog(selectedBlog);
    setIsUpdateMode(true);
    setSearchTitle(selectedBlog.title); // Set the search title for the blog
    setSearchResults([]); // Clear search results after selection
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {isUpdateMode ? "Update Blog" : "Create New Blog"}
      </h1>

      {/* Search Section for Updating Blog */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Search for a Blog to Update
        </h2>
        <div className="flex mb-4">
          <input
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            placeholder="Enter blog title"
            className="flex-1 p-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Dynamic Search Results */}
        {searchResults.length > 0 && (
          <ul className="mt-2 border border-gray-300 rounded-md bg-white shadow-md">
            {searchResults.map((result) => (
              <li
                key={result.id}
                onClick={() => handleSelectBlog(result)}
                className="p-2 hover:bg-gray-100 cursor-pointer transition duration-200"
              >
                {result.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Blog Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mb-12">
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Title</label>
          <input
            type="text"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Content</label>
          <textarea
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            required
            className="w-full min-h-[40vh] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 text-lg"
            placeholder="Start writing your blog content here..."
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Author</label>
          <input
            type="text"
            value={blog.author}
            onChange={(e) => setBlog({ ...blog, author: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Description</label>
          <input
            type="text"
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Category</label>
          <input
            type="text"
            value={blog.category}
            onChange={(e) => setBlog({ ...blog, category: e.target.value })}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Image URL</label>
          <input
            type="text"
            value={blog.imageUrl}
            onChange={(e) => setBlog({ ...blog, imageUrl: e.target.value })}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200"
        >
          {isUpdateMode ? "Update Blog" : "Create Blog"}
        </button>
      </form>

      {/* Blog Preview Section */}
      <div className="mt-12 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Blog Preview</h2>
        <h3 className="text-2xl font-semibold text-gray-900">{blog.title}</h3>
        <p className="text-gray-600 mt-2 mb-4">{blog.description}</p>
        <p className="text-lg text-gray-800 leading-relaxed">{blog.content}</p>
        {blog.imageUrl && (
          <div className="mt-4">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full max-w-lg object-cover rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}
