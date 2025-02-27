"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface Blog {
  id: string;
  title: string;
  description: string;
  category: string;
  views: number;
  coment: number;
  createdAt: Date;
  imageUrl: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { id, title, description, category, views, coment, createdAt, imageUrl } = blog;
  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleClick = () => {
    router.push(`/blogs/${id}`);
  };

  return (
    <motion.div
      ref={divRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-2xl p-[2px] transition-all duration-500 cursor-pointer"
      style={{
        background: "linear-gradient(90deg, #FF0080, #7928CA, #FF0080)",
        backgroundSize: "200% 100%",
        animation: "shimmer 2s linear infinite",
      }}
    >
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-75 blur-xl transition-all duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,0,128,0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full w-full rounded-2xl border border-white/10 bg-gray-900/[0.85] p-6 transition-all duration-500 group-hover:bg-gray-900/70">
        <Image
          src={imageUrl}
          alt={title}
          layout="responsive"
          width={500}
          height={300}
          className="object-cover rounded-md mb-4"
        />
        <p className="text-sm text-blue-500">{category}</p>
        <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
        <div className="flex items-center text-gray-400 text-sm mt-2">
          <p>{new Date(createdAt).toLocaleDateString()}</p>
          <p className="ml-4">{views} views</p>
          <p className="ml-4">{coment} comments</p>
        </div>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
      <style jsx global>{`
        @keyframes shimmer {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default BlogCard;
