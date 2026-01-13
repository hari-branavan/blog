import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import Badge from "@/components/ui/Badge";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Image - Fixed height, full width */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="flex h-full flex-col p-5">
        {/* Author Row - Avatar + Name + Date (Small text, Gray) - Above Title */}
        <div className="mb-3 flex items-center gap-2">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-300">
            <Image
              src={post.author.avatarUrl}
              alt={post.author.name}
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <span>{post.author.name}</span>
            <span>•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Title - Bold, Black, Sans-serif */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold leading-snug tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-[#E6602F]">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt - Gray text, line-clamp-2 */}
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>

        {/* Tags - At the very bottom */}
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
