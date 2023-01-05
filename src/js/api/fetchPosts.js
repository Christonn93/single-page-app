import { base_url } from "./constants.js";

export async function storedPosts() {
  const req = await fetch(base_url + '/posts');

  if (req.ok) {
    return await req.json();
  }

  throw new Error(req.statusText);
}
