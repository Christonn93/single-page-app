import Home from './views/home.js';
import Project from './views/project.js';
import About from './views/about.js';
import Details from './views/projectDetails.js';

class Router {
  constructor() {
    this.routes = [
      { path: '/', view: Home },
      { path: '/Project', view: Project },
      { path: '/About', view: About },
      { path: '/Details', view: Details },
    ];
    this.rootElem = document.querySelector('#app');
    this.currentView = null;

    this.init();
  }

  init() {
    window.addEventListener('popstate', () => this.handleRoute());
    this.handleRoute();
  }

  async handleRoute() {
    const path = window.location.pathname;
    const route = this.routes.find(r => r.path === path);

    if (!route) {
      console.error(`Route not found: ${path}`);
      return;
    }

    if (this.currentView) {
      this.currentView.destroy();
    }

    this.currentView = new route.view();
    this.rootElem.innerHTML = await this.currentView.getHtml();
    this.currentView.init();
  }

  navigate(path) {
    history.pushState(null, null, path);
    this.handleRoute();
  }
}

export const pageRouter = () => {
  const router = new Router();

  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        router.navigate(e.target.href);
      }
    });
  });
};