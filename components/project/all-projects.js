import Link from 'next/link';

export default function AllProjects() {
  let isMounted = true;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 ${
        isMounted ? 'animate-slideIn' : ''
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <Link
          href="https://sulog-blog.vercel.app"
          className="p-2 border-2 rounded-lg border-gray-500 hover:border-amber-800 transition-colors duration-300 ease-in-out"
        >
          Blog
        </Link>
        -
        <Link
          href="https://github.com/cvb5758/nextjs-blog"
          className="hover:text-amber-800 transition-colors duration-300 ease-in-out"
          target="black"
        >
          [GitHub]
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span
          href="https://github.com/cvb5758/gmail-checklist"
          className="
          p-2 border-2 rounded-lg border-gray-500"
        >
          Gmail Checklist
        </span>
        -
        <Link
          href="https://github.com/cvb5758/gmail-checklist"
          className="hover:text-amber-800 transition-colors duration-300 ease-in-out"
          target="black"
        >
          [GitHub]
        </Link>
      </div>
    </div>
  );
}
