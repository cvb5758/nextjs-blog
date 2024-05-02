import MainNavigation from './main-navigation';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full">
      <MainNavigation />
      <main className="mt-20">{children}</main>
    </div>
  );
}
