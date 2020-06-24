<template>
  <div class="app-main-layout">

    <nav-bar @btnClick="toggleOpenSideBar"/>
    <side-bar v-model="isOpen"/>

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>
    <router-link
      to="/record"
      exact
    ><button-main />
    </router-link>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import NavBar from '../components/NavBar.vue';
import ButtonMain from '../components/ui/ButtonMain.vue';

export default {
  components: {
    'side-bar': SideBar,
    'nav-bar': NavBar,
    'button-main': ButtonMain,
  },
  name: 'MainLayout',
  data: () => ({
    isOpen: false,
  }),
  methods: {
    toggleOpenSideBar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
