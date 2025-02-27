import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

const BlogPage = async ({ params }: { params: { id: string } }) => {
  const blog = await prisma.blog.findUnique({
    where: { id: params.id },
  });

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl font-semibold text-gray-600">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto min-h-screen p-6 md:p-10">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">{blog.title}</h1>
      <p className="text-lg text-gray-600 mb-4">By <span className="font-semibold">{blog.author}</span></p>

      <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
        <Image
          src={blog.imageUrl || "/luffy.jpeg"}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="mt-6 text-gray-800 dark:text-gray-300  prose lg:prose-lg">
        <p className="text-lg">{blog.description}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      <div className="mt-6 text-sm text-gray-500 flex justify-between">
        <p>👁️ Views: {blog.views}</p>
        <p>💬 Comments: {blog.comments}</p>
      </div>
    </div>
  );
};

export default BlogPage;
