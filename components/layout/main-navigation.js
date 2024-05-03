import Link from 'next/link';
import Logo from './logo';
('react');

export default function MainNavigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 text-gray-700 backdrop-blur-sm bg-orange-50/40 ">
      <div className="flex justify-between items-center gap-14">
        <Link href="/">
          <Logo />
        </Link>

        <Link
          href="/posts"
          className="p-1 border-b-2 border-gray-500 hover:border-amber-800 transition-colors duration-300 ease-in-out"
        >
          Posts
        </Link>
      </div>
      <div className="mr-8">
        <Link
          href="https://github.com/cvb5758"
          target="blank"
          className="p-2 border-2 rounded-lg border-gray-500 hover:border-amber-800 transition-colors duration-300 ease-in-out"
        >
          github
        </Link>
      </div>
    </header>
  );
}
