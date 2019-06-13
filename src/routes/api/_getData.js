import fs from 'fs';
import path from 'path';
import marked from 'meta-marked';

function getPostBySlug(slug) {
  const file = `content/${slug}.md`;
  if (!fs.existsSync(file)) return null;

  const markdown = fs.readFileSync(file, 'utf-8');
  const { meta, html } = marked(markdown);
  return { meta, html, slug };
}

function getPostSlugs() {
  const fileArray = fs.readdirSync('content');
  return fileArray
    .filter(file => path.extname(file) === '.md')
    .map(file => file.slice(0, -3))
    .map(getPostBySlug);
}

export { getPostBySlug, getPostSlugs };
