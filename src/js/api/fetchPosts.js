export async function storedPosts() {
  const req = await fetch('http://christopher-tonnesland.no/storage_wp_api/wp-json/wp/v2/posts');

  if (req.ok) {
    const res = await req.json();
    res.forEach((item) => {
      const itemDetails = item.acf;
      console.log(itemDetails);
      return itemDetails;
    });
  }

  throw new Error(req.statusText);
}
