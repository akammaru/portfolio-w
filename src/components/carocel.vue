<template>
    <div class="carocel-container">
        <v-carousel hide-controls hide-delimiters :interval="duration">
            <v-carousel-item v-for="(item,i) in images" :src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
    </div>
</template>


<script>
    export default {
        props: {
            images: null,
        },
        data() {
            return {
                duration: this.getRandomInt(1000)
            }
        },
        methods: {
            getRandomInt(max) {
                return 6000 + Math.floor(Math.random() * Math.floor(max));
            }
        }
    }
</script>

<style lang="scss" scoped>
    .carocel-container {
        height: 40%;
        width: 100%;
    }

    .carousel {
        width: 20vh;
        height: 20vh;

    }

    .jumbotron_content {
    }
</style>
