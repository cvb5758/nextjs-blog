import Link from 'next/link';
import Image from 'next/image';
import classes from './posts-item.module.css';

export default function PostsItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formmatDate = new Date(date).toLocaleDateString('ko-KR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li key={slug} className={classes.post}>
      <Link href={linkPath}>
        <div className="p-6">
          <Image
            src={imagePath}
            alt={title}
            width={500}
            height={150}
            className="rounded-lg"
            // layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{date}</time>
          <p>{excerpt} ...</p>
        </div>
      </Link>
    </li>
  );
}
