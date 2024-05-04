import PostsItem from './posts-item';
import classes from './posts-grid.module.css';

export default function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 my-8">
      {posts.map((post) => (
        <PostsItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
