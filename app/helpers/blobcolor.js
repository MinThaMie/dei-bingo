import { htmlSafe } from '@ember/template';
import seedrandom from 'seedrandom/seedrandom';

const colors = [
  '#FFA07D',
  '#85D1CF',
  '#A0A8F0',
  '#4C8BF0',
  '#949CFA',
  '#FFBC8F',
  '#FFCD82',
];

function linearMapRange(input, x1, x2, y1, y2) {
  return y1 + ((y2 - y1) / (x2 - x1)) * (input - x1);
}

export default function blobcolor([title]) {
  const rng = seedrandom(title);
  const index = Math.round(linearMapRange(rng(), 0, 1, 0, colors.length - 1));
  return htmlSafe(`--blob-color: ${colors[index]}`);
}
