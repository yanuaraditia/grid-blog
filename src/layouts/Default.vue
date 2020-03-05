<template>
  <div id="app">
    <header>
      <b-navbar toggleable="lg" position="sticky" variant="none">
        <b-navbar-brand to="/" class="mr-auto" v-if="showLogo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </b-navbar-brand>
        <ToggleTheme />
        <b-navbar-toggle target="nav-collapse" class="ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-lg-auto">
            <b-nav-item to='/about'>About</b-nav-item>
            <b-nav-item to='/blog'>Blog</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main class="main-wrapper">
      <slot/>
    </main>
    <footer class="footer text-center">
      <p class="footer__copyright"><span>Copyright © {{ new Date().getFullYear() }} by Yanuar Aditia.</span><span>Powered by <a href="//gridsome.org"> Gridsome </a> and <a href="//netlify.com">Netlify</a></span></p>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme,
  }
}
</script>
<style lang="scss">
.footer {
  &__copyright {
    span {
      display: block;
      width: 100%;
    }
  }
}
</style>