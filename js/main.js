import {createPosts} from './data.js';
import {renderThumbnails} from './thumbnail.js';

const posts = createPosts(25);
renderThumbnails(posts);
