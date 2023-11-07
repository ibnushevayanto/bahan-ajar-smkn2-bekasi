<template>
  <div>
    <top-bar-menu />
    <nuxt />
  </div>
</template>

<script>
export default {
  beforeDestroy() {
    console.log("trigger before destroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
