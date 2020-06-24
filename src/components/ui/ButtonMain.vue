<template>
  <div @click="$emit('btnClick')" class="fixed-action-btn">
    <a class="btn-floating btn-large blue" href="#">
      <i class="large material-icons">add</i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'buttonMain',
};
</script>

<style lang="scss" scoped>

</style>
