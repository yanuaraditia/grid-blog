<template>
  <Layout>
    <section class="mb-4 mb-lg-5">
      <div class="container">
        <h2 class="tag-title text-center space-bottom">
            # {{ $page.tag.title }}
        </h2>
        <div class="row">
          <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Post by Tag'
  }
}
</script>
