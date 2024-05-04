import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <section className="w-full max-w-[40rem] mx-auto my-0">
      <h1 className="text-4xl text-center font-bold my-8">임시</h1>
      <div className="flex flex-col items-center justify-center gap-6">
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
            className="hover:text-amber-800 transition-colors duration-300 ease-in-out
          "
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
            className="hover:text-amber-800 transition-colors duration-300 ease-in-out
          "
          >
            [GitHub]
          </Link>
        </div>
      </div>
    </section>
  );
}
