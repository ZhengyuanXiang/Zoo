<template>
  <div id="app">
    <Nav></Nav>
    <div class="container">
      <SiteTitle></SiteTitle>
      <PostSummary></PostSummary>
      <Propagation></Propagation>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import SiteTitle from './components/SiteTitle';
import PostSummary from './components/PostSummary';
import Propagation from './components/Paginator';

export default {
  components: {
    Nav,
    SiteTitle,
    PostSummary,
    Propagation
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
</style>
