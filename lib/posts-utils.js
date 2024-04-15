import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

function extractExcerpt(content) {
  return content.slice(0, 80);
}

export function getPostDate(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const excerpt = extractExcerpt(content);

  const postData = {
    slug: postSlug,
    ...data,
    excerpt,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostDate(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? 1 : -1
  );

  return sortedPosts;
}