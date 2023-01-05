// This file defines a view for the 'Project' page of the application.

// Import the base 'AbstractView' class from the '../ui/abstractView.js' file.
import AbstractView from '../ui/abstractView.js';

// Import the 'cardItems' function from the '../ui/projectCards.js' file.
import { cardItems } from '../ui/projectCards.js';

// Call the 'cardItems' function to initialize the project cards.
cardItems();

// Define a new class that extends 'AbstractView', and export it as the default export.
export default class extends AbstractView {
  // The constructor initializes the view with the specified 'params', and calls the base class constructor
  // with these params. It also sets the title of the view to 'Project'.
  constructor(params) {
    super(params);
    this.setTitle('Project');
  }

  // This method returns an HTML string that represents the content of the 'Project' page.
  async getHtml() {
    return `<div class="d-flex gap-4 flex-column mx-auto">
            <h1>Project's</h1>
            <div>
            <p>Here you are free to look at projects i have been working on.</p>
            </div>

            <div class="container-fluid mt-2">
            <ul class="nav nav-tabs mb-3 mx-auto w-100" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link text-theme-text active" id="School-tab" data-bs-toggle="tab" data-bs-target="#school-tab-pane" type="button" role="tab" aria-controls="school-tab-pane" aria-selected="true">School related projects</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link text-theme-text" id="Work-tab" data-bs-toggle="tab" data-bs-target="#work-tab-pane" type="button" role="tab" aria-controls="work-tab-pane" aria-selected="false">Work related projects</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link text-theme-text" id="fun-tab" data-bs-toggle="tab" data-bs-target="#fun-tab-pane" type="button" role="tab" aria-controls="fun-tab-pane" aria-selected="false">Project just for fun</button>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <!-- School -->
              <div class="tab-pane fade show active" id="school-tab-pane" role="tabpanel" aria-labelledby="school-tab" tabindex="0">
                <div class="mb-3">
                  <div class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-2" id="school">
                    <p class="empty">No projects yet</p>
                  </div>
                </div>
              </div>

              <!-- Work -->
              <div class="tab-pane fade show" id="work-tab-pane" role="tabpanel" aria-labelledby="work-tab" tabindex="0">
                <div class="mb-3">
                  <div class="d-flex gap-3 mt-4 justify-content-center flex-wrap" id="work">
                    <p class="empty">No projects yet</p>
                  </div>
                </div>
              </div>
      
              <!-- Fun -->
              <div class="tab-pane fade show" id="fun-tab-pane" role="tabpanel" aria-labelledby="fun-tab" tabindex="0">
                <div class="mb-3">
                  <div class="d-flex gap-3 mt-4 justify-content-center flex-wrap" id="forFun">
                  <p class="empty">No projects yet</p>
                  </div>
                </div>
              </div>

            </div>
            </div>`;
  }
}
