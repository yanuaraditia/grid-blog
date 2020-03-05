<template>
  <Layout :show-logo="true">
    <Author :show-title="true" :show-desc="false" />
    <section class="about-me container">
        <h3>Arround the web</h3>
        <ul>
            <li>Github : <a href="//github.com/yanuaraditia">yanuaraditia</a></li>
            <li>Facebook : <a href="//facebook.com/yanuaraditia99">yanuaraditia99</a></li>
            <li>Instagam : <a href="//instagram.com/yanuaraditia">yanuaraditia</a></li>
            <li>Mail : <a href="mailto:yanuaraditia@outlook.com">yanuaraditia[at]outlook[dot]com</a></li>
        </ul>
        <h3>Education</h3>
        <ul>
            <li><a href="//smkkomputer.sch.id">SMK Komputer Karanganyar</a> - <span>High School</span></li>
            <li><a href="//amikom.ac.id">University Amikom of Yogyakarta</a> - <span>Undergraduate</span></li>
        </ul>
        <h3>Tools & Kit</h3>
        <ul>
            <li>Back-end : <a href="//laravel.com">Laravel</a>, <a href="//codeigniter.com">CodeIgniter</a></li>
            <li>Front-end : <a href="//reactjs.org">ReactJS</a>, <a href="//vuejs.org">VueJS</a>, <a href="//tailwindcss.org">TailwindCSS</a></li>
            <li>Graphic : <a href="//coreldrwaw.com">CorelDraw</a>, <a href="//pixlr.com">Pixlr</a>, <a href="//photoshop.com">Photoshop</a></li>
            <li>OS : <a href="//windows.microsoft.com">Windows 10</a>, <a href="//lubuntu.me">Lubuntu</a></li>
            <li>Syntax Highlighter : <a href="//prismjs.org">PrismJS</a></li>
            <li>UI Kit : <a href="//getbootstrap.com">Bootstrap</a>, <a href="//bulma.io">Bulma</a>, <a href="//getmdl.io">MDL</a></li>
        </ul>
    </section>
  </Layout>
</template>
<script>
import Author from '~/components/Author.vue'

export default {
  components: {
    Author
  },
  metaInfo: {
    title: 'About Me'
  }
}
</script>
<style lang='scss'>
.about-me {
    margin: 0 auto;
    max-width: 500px;
    ul {
        li {
            span {
                font-weight: bold;
            }
            a {
                text-decoration: none;
            }
        }
    }
}
</style>