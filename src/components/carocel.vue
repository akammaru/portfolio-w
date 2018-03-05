<template>
    <v-app class="carocel-container" id="inspire">
        <v-carousel class="">
            <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i" class="carocel-item"></v-carousel-item>
        </v-carousel>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        src: '../../assets/img/cape_bcack.jpg'
                    },
                    {
                        src: '../../assets/img/cape_front.jpg'
                    },
                    {
                        src: '../../assets/img/cape_left.jpg'
                    },
                    {
                        src: '../../assets/img/front_closed'
                    },
                    {
                        src: '../../assets/img/front_closed_clasp.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>