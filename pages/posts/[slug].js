import PostContent from '@/components/posts/post-detail/post-content';
import { getPostDate, getPostFiles } from '@/lib/posts-utils';

export default function PostDetailPage(props) {
  return (
    <div>
      <PostContent post={props.post} />
    </div>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostDate(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true,
  };
}
