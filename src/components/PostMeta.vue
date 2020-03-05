<template>
    <div class="card-text">
      <small class="text-muted">Posted <date>{{ post.date }}</date>. 
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