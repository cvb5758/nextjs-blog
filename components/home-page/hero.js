import Image from 'next/image';
import Detail from './hompage-detail';

export default function Hero() {
  return (
    <section
      className="w-full mx-auto flex 
    items-center justify-center flex-col 
    mt-16 mb-8"
    >
      <figure className="w-full max-w-60 max-h-60 overflow-hidden shadow-md mx-auto my-8">
        <Image
          src="/images/site/sumin.jpg"
          alt="An image showing Sumin"
          width={1000}
          height={1000}
          className="shadow-lg rounded-md"
        />
      </figure>
      {/* <Detail /> */}
    </section>
  );
}
