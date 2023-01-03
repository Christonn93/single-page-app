export async function storedPosts() {
  const req = await fetch('http://christopher-tonnesland.no/storage_wp_api/wp-json/wp/v2/posts');

  if (req.ok) {
    return await req.json();
  }

  throw new Error(req.statusText);
}
