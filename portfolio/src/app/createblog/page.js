"use client"
import BlogForm from '../../../components/blogform';
import { useRouter } from 'next/router';

export default function CreateBlog() {
  const router = useRouter();

  const handleCreateBlog = async (blog) => {
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Blog created successfully!');
        // Use router.push for navigation in Next.js
        router.push(`/blogs/${data.id}`);
      } else {
        alert('Error creating blog');
      }
    } catch (error) {
      console.error(error);
      alert('Error creating blog');
    }
  };

  return <BlogForm onSubmit={handleCreateBlog} />;
}
