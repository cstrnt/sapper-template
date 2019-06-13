import send from '@polka/send-type';
import { getPostBySlug } from '../_getData';

export function get(req, res, next) {
  const { slug } = req.params;

  try {
    send(res, 200, getPostBySlug(slug));
  } catch (error) {
    send(res, 404, {
      message: 'Not found',
    });
  }
}
