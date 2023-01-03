import {scrollToTop} from './src/js/ui/scrollBtn.js'
scrollToTop()

import { pageRouter } from './src/js/index.js'
pageRouter()

import { storedPosts } from './src/js/api/fetchPosts.js'
await storedPosts();