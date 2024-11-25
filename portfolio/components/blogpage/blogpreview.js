import Image from "next/image";

export default function BlogPreview({ blog }) {
  return (
    <div className="preview p-6 border-l-4 border-gray-300">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-600">By {blog.author}</p>
      <Image src={blog.imageUrl} alt={blog.title} className="mt-4" />
      <div className="prose mt-6" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
