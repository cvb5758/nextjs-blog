import Detail from '@/components/home-page/detail';
import Hero from '@/components/home-page/hero';

export default function HomePage() {
  return (
    <div className="min-h-screens w-full mx-auto">
      <Hero />
      <Detail />
    </div>
  );
}
