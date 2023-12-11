import type { search } from 'dist/pagefind/pagefind';
import type { FunctionalComponent } from 'preact';

const data = await fetch('https://example.com/pagefind/pagefind.js').then((response) => response.json());

console.log(data);

const Search: FunctionalComponent = () => {

  return (<div>{JSON.stringify(data)}</div>);
};

export default Search;