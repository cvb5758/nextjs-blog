import AllPost from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/posts-utils';

// const DUMMY_POSTS = [
//   {
//     slug: 'getting-started-with-nextjs',
//     title: 'Getting Started with NextJS',
//     image: 'sumin.jpg',
//     excerpt: 'NextJS is a the best framework for React!',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-with-nextjs2',
//     title: 'Getting Started with NextJS2',
//     image: 'sumin.jpg',
//     excerpt: 'NextJS is a the best framework for React!',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-with-nextjs3',
//     title: 'Getting Started with NextJS3',
//     image: 'sumin.jpg',
//     excerpt: 'NextJS is a the best framework for React!',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-with-nextjs4',
//     title: 'Getting Started with NextJS4',
//     image: 'sumin.jpg',
//     excerpt: 'NextJS is a the best framework for React!',
//     date: '2022-02-10',
//   },
// ];

export default function AllPostsPage(props) {
  return (
    <section>
      <AllPost posts={props.posts} />
    </section>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts,
    },
  };
}
