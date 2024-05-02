import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className="mx-auto w-full max-w-[600px] my-4">
            <Image
              src={`${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className ? className.split('-')[1] : 'text';

      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className="mx-auto w-11/12 max-w-4xl my-8 p-4 font-medium leading-loose border border-gray-400 shadow-sm md:p-8 lg:p-8 xl:p-8">
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown className="prose" components={customRenderers}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
