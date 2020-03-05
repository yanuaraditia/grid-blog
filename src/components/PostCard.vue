<template>
  <div class="col-12 col-lg-4">
    <div class="card">
      <g-image alt="Cover image" v-if="post.cover_image" class="card-img-top" :src="post.cover_image" />
      <div class="card-body">
        <h3 class="card-title" v-html="post.title"/>
        <p class="card-text" v-html="post.description" />
      </div>
      <div class="card-footer">
        <PostMeta class="post-card__meta" :post="post" />
        <g-link class="post-card__link" :to="post.path">Link</g-link>
      </div>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'

export default {
  components: {
    PostMeta
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: var(--space);
  position: relative;
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
