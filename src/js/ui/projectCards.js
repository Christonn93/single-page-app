import { storedPosts } from '../api/fetchPosts';

export const fetchRes = async () => {
    const res = await storedPosts();
    res.forEach((item) => {
    const itemDetails = item.acf;
    console.log(itemDetails);
    return itemDetails;
  });
};
