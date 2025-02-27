import Image from "next/image";

export default function BlogPreview({ blog }) {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8">
      <h1 className="text-4xl font-bold leading-tight text-gray-900">{blog.title}</h1>
      <p className="text-gray-600 mt-2 text-lg">By <span className="font-semibold">{blog.author}</span></p>
      <div className="mt-6 w-full h-80 relative">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="prose lg:prose-xl mt-6 text-gray-800" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
