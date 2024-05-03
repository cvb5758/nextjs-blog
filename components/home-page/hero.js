import Image from 'next/image';

export default function Hero() {
  const blurDataUrl =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP090tLS1NXW19jZ2uLk5+Pf/2Q==';

  return (
    <section
      className="w-full mx-auto flex 
    items-center justify-center flex-col 
    mt-16 mb-8"
    >
      <figure className="w-full max-w-60 max-h-60 overflow-hidden shadow-md mx-auto my-8">
        <Image
          src="/images/site/sumin.jpg"
          alt="An image showing Sumin"
          width={400}
          height={400}
          className="shadow-lg rounded-md"
          placeholder={blurDataUrl}
        />
      </figure>
    </section>
  );
}
