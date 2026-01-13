import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Content: Logo + Brand Text */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              Mozilla Campus Club
            </span>
          </Link>

          {/* Brand Text - Hidden on Mobile */}
          <span className="hidden font-bold text-gray-900 md:block">
            Official Blog of SLIIT Mozilla
          </span>
        </div>

        {/* Right Content: Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Posts
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
