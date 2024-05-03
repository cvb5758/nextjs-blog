import AllPost from '@/components/posts/all-posts';
import { encodeImageToBlurDataURL } from '@/lib/image-utils';
import { getAllPosts } from '@/lib/posts-utils';

export default function AllPostsPage(props) {
  return (
    <section>
      <AllPost posts={props.posts} />
    </section>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  const postsWithImages = await Promise.all(
    posts.map(async (post) => {
      const blurDataURL = await encodeImageToBlurDataURL(
        `/public/images/posts/${post.slug}/${post.image}`
      );
      return {
        ...post,
        blurDataURL,
      };
    })
  );
  return {
    props: {
      posts: postsWithImages,
    },
  };
}
