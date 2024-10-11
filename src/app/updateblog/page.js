import { useEffect, useState } from 'react';
import BlogForm from '../../../components/blogform';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateBlog() {
  const { title } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs?title=${title}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          alert('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };
    fetchBlog();
  }, [title]);

  const handleUpdateBlog = async (updatedBlog) => {
    try {
      const response = await fetch(`/api/blogs/${blog.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBlog),
      });
      if (response.ok) {
        alert('Blog updated successfully!');
        navigate(`/blogs/${blog.id}`);
      } else {
        alert('Error updating blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return blog ? <BlogForm initialBlog={blog} onSubmit={handleUpdateBlog} /> : <div>Loading...</div>;
}
