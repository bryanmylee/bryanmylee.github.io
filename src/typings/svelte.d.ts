import * as svelte from 'svelte';

declare module 'svelte' {
  type Action<T> = (
    node: HTMLElement,
    params?: T
  ) => {
    update?: (newParams: T) => void;
    destroy?: () => void;
  };
}
