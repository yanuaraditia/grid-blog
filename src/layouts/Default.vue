<template>
  <div id="app">
    <header>
      <b-navbar toggleable="lg">
        <b-navbar-brand to="/" v-if="showLogo">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-lg-auto">
            <b-nav-item to='/about'>About</b-nav-item>
            <b-nav-item to='/blog'>Blog</b-nav-item>
            <ToggleTheme />
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main class="main-wrapper">
      <slot/>
    </main>
    <footer class="footer text-center">
      <p class="footer__copyright"><span>Copyright © {{ new Date().getFullYear() }}.</span><span>Powered by <a href="//gridsome.org"> Gridsome </a> and <a href="//netlify.com">Netlify</a></span></p>
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