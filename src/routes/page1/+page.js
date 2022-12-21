import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    title: 'My first SvelteKit page',
    content: 'This data is coming from the +page.svelte accompanying +page.j/ts files load return'
  };
}