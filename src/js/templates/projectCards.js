import { storedPosts } from "../api/fetchPosts";

export const cardItems = async () => {
    const res = await storedPosts();
    res.forEach(el => {
        const itemDetails = el.acf
        const {page_title: title, repo_link: repo, site_image: image, livesite: site, description} = itemDetails

        return `<div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" id="siteImage">
        <div class="card-body">
          <h5 class="card-title" id="siteTitle">${title}</h5>
          <p class="card-text" id="siteDescription">${description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="${site}" class="card-link" id="siteLink">Live site</a>
          </li>
          <li class="list-group-item">
            <a href="${repo}" class="card-link" id="repoLink">Github repo</a>
          </li>
        </ul>
      </div>
        `
    });

}