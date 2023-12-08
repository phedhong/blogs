import { navigate } from 'astro:transitions/client';

export default function ClickToNavigate({ to }) {
  return <select onChange={(ev) => navigate(e.target.value)}>
    <option value="/play">Play</option>
    <option value="/blog">Blog</option>
    <option value="/about">About</option>
    <option value="/contact">Contact</option>
  </select>;
}