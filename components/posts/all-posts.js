import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

export default function AllPost(props) {
  return (
    <section className={classes.posts}>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
