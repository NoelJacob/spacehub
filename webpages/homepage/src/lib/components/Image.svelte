<!-- Typed wrapper for @unpic/svelte -->

<script lang="ts">
  import { Image as UnpicImage } from '@unpic/svelte';

  /**
   * The URL of the image.
   */
  export let src: string;

  /**
   * Alt text for the image.
   */
  export let alt: string;

  /**
   * Width of the image in pixels.
   *
   * If `aspectRatio` is set, this will be ignored.
   */
  export let width: number = 0;

  /**
   * Height of the image in pixels.
   *
   * If `aspectRatio` is set, this will be ignored.
   */
  export let height: number = 0;

  /**
   * `constrained`: (default) the image will be rendered at a maximum of
   *  width and height, but will scale down automatically if the container
   *  is smaller, maintaining the aspect ratio.
   *
   * `fixed`: the image will be rendered at the exact size specified by
   * `width` and `height`
   *
   * `fullWidth`:  the image will be rendered at full width of its container.
   * This is optimized for full-width hero images. You can set height to a
   * fixed value, which will mean the image will be rendered at that fixed
   * height and scale horizontally to fill the container.
   */
  export let layout: 'fixed' | 'constrained' | 'fullWidth' = 'constrained';
  /**
   * By default, images are loaded lazily.
   *
   * If `priority` is set to `true`, the image will be loaded eagerly, and will be given high priority by the browser.
   *
   * This is useful for images that are above the fold, particularly large ones such as hero images.
   */
  export let priority: boolean = false;

  /**
   * Instead of specifying both `width` and `height`, you can specify can `aspectRatio`.
   */
  export let aspectRatio: number = 0;
</script>

{#if aspectRatio && !width && !height}
  <UnpicImage class={$$restProps.class || ''} {alt} {src} {layout} {priority} {aspectRatio} />
{:else}
  <UnpicImage class={$$restProps.class || ''} {alt} {src} {layout} {priority} {width} {height} />
{/if}
