<script lang="ts">
  import navBarBg from 'assets/nav-bar-bg.svg';

  export { className as class };
  let className = "";
</script>

<div class={className} style={`
  -webkit-mask-image: url("${navBarBg}");
  mask-image: url("${navBarBg}");`}
/>

<style>
  div {
    -webkit-mask-size: 12px 4px;
    mask-size: 12px 4px;
    -webkit-mask-repeat: repeat;
    mask-repeat: repeat;
  }
</style>

