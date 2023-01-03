import { storedPosts } from "../api/fetchPosts";

export const cardItems = async () => {
    const res = await storedPosts();
    const gallery = document.getElementById("projectsGallery")
    res.forEach(el => {
        const itemDetails = el.acf
        const {page_title: title, repo_link: repo, site_image: image, livesite: site, description} = itemDetails

        const cards = document.createElement("div");
        cards.classList.add('card', 'bg-transparent')
        cards.style = "width: 18rem;";
        
        cards.innerHTML = `
        <div class="image-ratio">
        <img src="${image}" class="card-img-top image">
        </div>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
        </div>
        <ul class="list-group list-group-flush bg-transparent">
          <li class="list-group-item bg-transparent">
            <a href="${site}" class="card-link">Live site</a>
          </li>
          <li class="list-group-item bg-transparent">
            <a href="${repo}" class="card-link">Github repo</a>
          </li>
        </ul>`

        gallery.append(cards)
        return cards

      });



}