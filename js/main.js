import {createPosts} from './data.js';
import {createThumbnails} from './thumbnail.js';

const posts = createPosts(25);
createThumbnails(posts);
