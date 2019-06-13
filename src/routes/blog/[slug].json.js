import send from '@polka/send-type';
import posts from './_posts';

const lookup = new Map();
posts.forEach((post) => {
  lookup.set(post.slug, JSON.stringify(post));
});

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  if (lookup.has(slug)) {
    send(res, 200, lookup.get(slug));
  } else {
    send(res, 404, {
      message: 'Not found',
    });
  }
}
