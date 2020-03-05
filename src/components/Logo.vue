<template>
	<g-link class="logo" to="/">
	  <span class="logo__text">
		  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
	  </span>
	</g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
	text-decoration: none;
  color: var(--body-color)!important;
  font-size: .9em;

	&__image {
		vertical-align: middle;
		border-radius: 99px;
		height: 40px;
		width: 40px;
		margin-right: .5em;
	}
}
</style>
