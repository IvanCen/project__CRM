<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
      <router-link
        tag="li"
        active-class="active"
        v-for="link in links"
        :key="link.id"
        :to="link.url"
        exact
      ><a href="#" class="waves-effect waves-orange pointer">{{link.name}}</a>
        </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  name: 'SideBar',
  data() {
    return {
      links: [
        {
          id: 1,
          url: '/',
          name: 'Счет',
        },
        {
          id: 2,
          url: '/history',
          name: 'История',
        },
        {
          id: 3,
          url: '/planning',
          name: 'Планирование',
        },
        {
          id: 4,
          url: '/record',
          name: 'Новая запись',
        },
        {
          id: 5,
          url: '/categories',
          name: 'Категории',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
