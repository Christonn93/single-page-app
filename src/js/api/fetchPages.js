import { base_url } from "./constants.js";

export async function storedPages() {
    const req = await fetch(base_url + '/pages');
  
    if (req.ok) {
      return await req.json();
    }
  
    throw new Error(req.statusText);
  }
  