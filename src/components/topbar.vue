<template>
  <div class="topbar">
    <router-link :to="'/'+topbar.route" class="arrow"><font-awesome-icon icon="fa-solid fa-angle-left" /></router-link>
    <h3 class="title">{{topbar.title}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    topbar: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .topbar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 24px;
    .arrow {
      position: absolute;
      left: 5vw;
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.659);
    }
    .title {
      margin: 0;
      font-size: 1.2rem;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.715);
    }
  }
</style>
