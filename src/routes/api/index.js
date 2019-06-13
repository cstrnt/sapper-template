import send from '@polka/send-type';
import { getPostSlugs } from './_getData';

export function get(req, res) {
  send(res, 200, getPostSlugs());
}
