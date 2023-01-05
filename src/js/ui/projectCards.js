import { storedPosts } from '../api/fetchPosts.js';

export const cardItems = async () => {
  const res = await storedPosts();
  const gallery = document.getElementById('projectsGallery');
  const school =  document.getElementById('school');
  const work =  document.getElementById('work');
  const fun =  document.getElementById('forFun');

  res.forEach((el) => {
    const itemDetails = el.acf;
    const { page_title: title, repo_link: repo, site_image: image, live_site: site, description, year, relation} = itemDetails;

    console.log(el.acf);

    const cards = document.createElement('div');
    cards.classList.add('col');


    cards.innerHTML = `<div class="card bg-transparent shadow card-hover h-100 project-cards">
        <div class="image-ratio">
        <img src="${image}" class="card-img-top image">
        </div>
        <div class="card-body" data-cardBody>
          <h3 class="card-title">${title}</h5>
          <p class="card-text overflow-ellipsis">${description}</p>
        </div>
          <div class="d-flex gap-2 justify-content-center p-3">
            <a href="${site}" class="card-link-custom" target="_blank"><i class="fa-solid fa-up-right-from-square"></i> Live site</a>
            <a href="${repo}" class="card-link-custom" target="_blank"><i class="fa-brands fa-github"></i> Repo</a>
          </div>
          </div>`;

        if(relation == 'School'){
          document.querySelector(".empty").classList.add('d-none')
          school.append(cards);
        }
        
        if(relation == 'work'){
          document.querySelector(".empty").classList.add('d-none')
          work.append(cards);
        }

        if(relation == 'fun'){
          document.querySelector(".empty").classList.add('d-none')
          fun.append(cards);
        }
  });
};
