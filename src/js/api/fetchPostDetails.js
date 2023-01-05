import { base_url } from './constants.js';

export async function postDetails(id) {
  const req = await fetch(base_url + `/posts/${id}`);

  if (req.ok) {
    return await req.json();
  }

  throw new Error(req.statusText);
}
