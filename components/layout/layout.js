import Hero from '../home-page/hero';
import MainNavigation from './main-navigation';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full">
      <MainNavigation />
      <Hero />
      <main>{children}</main>
    </div>
  );
}
