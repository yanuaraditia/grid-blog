<template>
    <div class="card-text">
      <small class="text-muted">Posted <time>{{ post.date }}</time>. 
        <template v-if="post.timeToRead">
          <strong>{{ post.timeToRead }} min read.</strong>
        </template>
      </small>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>