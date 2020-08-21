<template>
  <div class="main">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style scoped>
.main {
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  padding-top:40px;
}

</style>
