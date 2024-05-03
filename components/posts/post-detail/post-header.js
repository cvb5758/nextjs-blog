import Image from 'next/image';
import classes from './post-header.module.css';

export default function PostHeader({ title, image }) {
  return (
    <header className="pb-12 border-b border-gray-600 my-8 flex flex-col justify-between items-center gap-8">
      <h1 className="text-2xl text-gray-700 m-0 p-2 leading-none text-center md:text-5xl md:text-left">
        {title}
      </h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}
