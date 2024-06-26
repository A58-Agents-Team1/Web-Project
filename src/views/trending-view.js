import { TRENDING_GIFS } from '../common/constants.js';
import { toGifSimple } from './gif-views.js';

export const toTrendingView = (gifs) => `
<div id="Trendy">
  <div class="content">
    <h1>Trendy GIFS</h1>
    <p>Welcome to Trendy GIFS, the ultimate GIF repository designed exclusively for programmers like you! Dive into a world where code meets creativity, and discover a curated collection of trending GIFs that perfectly capture the essence of the programming experience.</p>
    <div class="gif-listing">
    ${gifs.data
    .map((gif) => toGifSimple(gif, TRENDING_GIFS))
    .join('')
  }
    </div>
  </div>
</div>
`;
