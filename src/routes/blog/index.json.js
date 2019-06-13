import send from '@polka/send-type';
import posts from './_posts';

const contents = JSON.stringify(posts.map(post => ({
  title: post.title,
  slug: post.slug,
})));

export function get(req, res) {
  send(res, 200, contents);
}
