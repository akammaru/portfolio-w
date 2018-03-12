<template>
  <div>
    <v-carousel class="carousel" hide-controls hide-delimiters>
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </div>
</template>


<script>
 export default {
     data() {
         return {
             img: '',
             items: [
                 {
                     src: '/static/img/cape/cape_back.jpg'
                 },
                 {
                     src: '/static/img/cape/cape_front.jpg'
                 },
                 {
                     src: '/static/img/cape/cape_left.jpg'
                 },
                 {
                     src: '/static/img/cape/front_closed.jpg'
                 }
             ]
         }
     }
 }
</script>

<style lang="scss" scoped>
  .carocel-container {
    height: 100px;
    width: 120px;
  }

  .carocel {
      height: 100px;
      width: 120px;
  }

  .jumbotron_content {
      height: 150px;
      width: 100px;
  }
</style>
