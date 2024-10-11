"use client"
import { useState, useEffect } from 'react';

export default function Writeup() {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    author: '',
    description: '',
    coment: 0,
    category: '',
    views: 0,
    published: false,
    imageUrl: '',
  });

  const [searchTitle, setSearchTitle] = useState('');
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  // Fetch blog details by title for updating
  const fetchBlogByTitle = async () => {
    try {
      const response = await fetch(`/api/blogs?title=${searchTitle}`);
      if (response.ok) {
        const data = await response.json();
        setBlog(data); // Set the blog data for updating
        setIsUpdateMode(true);
      } else {
        console.log('Blog not found');
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  // Handle form submission for creating/updating blog
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/blogs', {
        method: isUpdateMode ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Blog ${isUpdateMode ? 'updated' : 'created'} successfully with ID: ${data.id}`);
        setBlog({
          title: '',
          content: '',
          author: '',
          description: '',
          coment: 0,
          category: '',
          views: 0,
          published: false,
          imageUrl: '',
        });
        setIsUpdateMode(false);
      } else {
        alert('Error submitting blog');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>{isUpdateMode ? 'Update Blog' : 'Create New Blog'}</h1>

      {/* Search Section for Updating Blog */}
      <div>
        <h2>Search for a Blog to Update</h2>
        <input
          type="text"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          placeholder="Enter blog title"
        />
        <button onClick={fetchBlogByTitle}>Search Blog</button>
      </div>

      {/* Blog Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Content</label>
          <textarea
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Author</label>
          <input
            type="text"
            value={blog.author}
            onChange={(e) => setBlog({ ...blog, author: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
          />
        </div>

        <div>
          <label>Category</label>
          <input
            type="text"
            value={blog.category}
            onChange={(e) => setBlog({ ...blog, category: e.target.value })}
          />
        </div>

        <div>
          <label>Views</label>
          <input
            type="number"
            value={blog.views}
            onChange={(e) => setBlog({ ...blog, views: Number(e.target.value) })}
          />
        </div>

        <div>
          <label>Published</label>
          <input
            type="checkbox"
            checked={blog.published}
            onChange={(e) => setBlog({ ...blog, published: e.target.checked })}
          />
        </div>

        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={blog.imageUrl}
            onChange={(e) => setBlog({ ...blog, imageUrl: e.target.value })}
          />
        </div>

        <button type="submit">{isUpdateMode ? 'Update Blog' : 'Create Blog'}</button>
      </form>
    </div>
  );
}
