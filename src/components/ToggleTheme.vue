<template>
  <b-nav-item>
    <button role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme" class="toggle-theme">
      <b-icon-brightness-high v-if="darkTheme"></b-icon-brightness-high>
      <b-icon-moon v-else></b-icon-moon>
    </button>
  </b-nav-item>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.darkTheme = true
  }
}
</script>

<style lang="scss">
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: var(--body-color);
  cursor: pointer;
  padding: 1px 3px;

  &:hover {
    opacity: .8
  }
  &:focus {
    outline: none;
  }
  svg {
    vertical-align: middle;
  }
}
</style>