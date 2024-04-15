import AllPost from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/posts-utils';

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
