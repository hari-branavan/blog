import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import Badge from "@/components/ui/Badge";

interface FeaturedCardProps {
  post: BlogPost;
}

export default function FeaturedCard({ post }: FeaturedCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Cover Image - Full Width */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Row 1: Badge (Left) | Author Name + Avatar (Right) */}
        <div className="flex items-center justify-between">
          {/* Tags - Left */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {/* Author Name + Avatar - Right */}
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-900">
              {post.author.name}
            </p>
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-300">
              <Image
                src={post.author.avatarUrl}
                alt={post.author.name}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Title - Large, Sans-Serif, Orange */}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="mb-3 mt-6 text-3xl font-bold tracking-tight text-[#D9622B] transition-colors duration-300 hover:text-[#C8501F] md:text-4xl">
            {post.title}
          </h2>
        </Link>

        {/* Row 3: Excerpt - Gray */}
        <p className="mb-6 text-lg leading-relaxed text-gray-600">{post.excerpt}</p>

        {/* Row 4: Footer - Date/Time (Left) | Read more (Right) */}
        <div className="mt-6 flex items-center justify-between">
          {/* Date/Time - Left */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Read more Link - Right, Orange */}
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-2 font-semibold text-[#E6602F] transition-colors hover:text-[#C8501F]"
          >
            Read more
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
