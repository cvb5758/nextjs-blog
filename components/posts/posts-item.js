import Link from 'next/link';
import Image from 'next/image';

export default function PostsItem(props) {
  const { title, image, excerpt, date, slug, blurDataURL } = props.post;

  const formmatDate = new Date(date).toLocaleDateString('ko-KR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li
      key={slug}
      className="border border-gray-400 rounded-md p-4 transition duration-300 ease-in-out transform hover:scale-105
      shadow-md hover:shadow-lg hover:border-gray-500
      "
    >
      <Link href={linkPath}>
        <div className="flex flex-col  gap-4 w-full h-full cursor-pointer items-center">
          <Image
            src={imagePath}
            alt={title}
            width={320}
            height={320}
            className="rounded-md h-40 shadow-md w-full"
            placeholder={blurDataURL}
          />

          <div className="flex flex-col justify-end items-start text-gray-700">
            <h1 className="text-xl font-bold">{title}</h1>
            <time
              className="
            text-gray-500 font-semibold text-sm mt-2"
            >
              {date}
            </time>
            <p className="mt-4 text-gray-600 text-sm">{excerpt} ...</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
