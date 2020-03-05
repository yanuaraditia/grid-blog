<template>
  <Layout :show-logo="false">
    <div class="container-xs">
      <div class="author_info text-center">
        <figure>
          <g-image src="~/assets/images/kucing.jpg" width="220" height="220" blur="10" alt="Me" class="author_image_mask"/>
          <div class="canvas">
            <g-image src="~/assets/images/kucing.jpg" width="220" height="220" blur="10" alt="Me" class="author_image"/>
          </div>
        </figure>
        <div class="info_section">
          <h1>{{ $static.metadata.siteName }}</h1>
          <h6 class="mb-3 mb-lg-4">Front-End Developer</h6>
          <div class="link">
            <a href="//t.me/yanuaraditia">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
            <a href="mailto:yanuaraditia@outlook.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="//instagram.com/yanuaraditia">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
    metaInfo: {
      title: 'Homepage'
    }
}
</script>