import Image from 'next/image';
import Detail from './detail';

export default function Hero() {
  return (
    <section
      className="w-full mx-auto flex 
    items-center justify-center flex-col"
    >
      <figure className="w-full max-w-60 max-h-60 overflow-hidden shadow-md mx-auto my-12">
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
