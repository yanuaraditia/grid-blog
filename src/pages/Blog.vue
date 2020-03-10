<template>
  <Layout :show-logo="true">
    <section class="mb-4 mb-lg-5">
      <div class="container">
        <h1 class="tag-title text-center space-bottom">
            Blog
        </h1>
        <div class="row">
            <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
const description = "See what's on my spending time"
export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Blog',
    meta: [
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: 'Blog - Yanuar Aditia',
        },
        {
          property: 'og:description',
          content: description,
        }
    ]
  }
}
</script>
