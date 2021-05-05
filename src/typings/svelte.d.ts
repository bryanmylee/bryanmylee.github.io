import * as svelte from 'svelte';

declare module 'svelte' {
  interface Action<T> {
    (node: HTMLElement, params?: T): { update?: (newParams: T) => void; destroy?: () => void };
  }
}
