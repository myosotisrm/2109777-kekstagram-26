import { createPost } from './data';
import { addPhotos } from './photo-creator';

function similarPosts () {
  return Array.from({length: 25}, createPost);
}

similarPosts ();

addPhotos();

