import PostsGrid from './posts-grid';

export default function AllPost(props) {
  let isMounted = true;

  return (
    <section
      className={`w-full max-w-[40rem] mx-auto my-0 
      ${isMounted ? 'animate-slideIn' : ''}
    `}
    >
      <PostsGrid posts={props.posts} />
    </section>
  );
}
