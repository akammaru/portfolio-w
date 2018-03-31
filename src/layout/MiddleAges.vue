<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs7 offset-xs3>
                    <v-expansion-panel popout>
                        <v-expansion-panel-content xs7 offset-xs5>
                            <div class="bold" slot="header">
                                <carocel :images="blue_dress"/>
                                The Blue Dress
                            </div>
                            <v-card>
                                <v-card-text>
                                    <p>
                                        This blue dress is made out of two pieces: a top and a skirt. The top is tied up
                                        with a ribbon. The skirt is closed with a zipper in the back. This dress is based
                                        on a summer dress from the Middle Ages, although the zipper doesn’t fit in that
                                        theme. I designed and made this dress myself, patterns included.
                                    </p><br/>
                                    <p>
                                        I completely designed and made this hooded cape myself, including the
                                        patterns. It is a short single layered cape. Only the hood is lined. The cape is
                                        closed with two hooks under the chin and fits with the blue dress.
                                    </p><br/>
                                    <p>
                                        I had the idea of the dress for already over a year. I already bought fabrics as well
                                        but I never took the time to actually make it. I didn’t really have inspiration for this
                                        dress. Sometimes a design just pops up in my head and I draw it out. That is where I
                                        start from. The cape I made because I thought it would be useful to have one in case
                                        of bad weather. I thought they would have capes in the Middle Ages for that too.
                                    </p>
                                    <span>
                                        &nbsp;
                                    </span>
                                    <div>
                                        <lightbox :images="blue_dress"></lightbox>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div class="bold" slot="header">
                                <carocel :images="red_dress"/>
                                The Red Dress
                            </div>
                            <v-card>
                                <v-card-text>
                                    <p>
                                        This dress is inspired on dresses from the Middle Ages. It’s a two-layered
                                        dress with a basic white dress and a pretty red coat dress on top. The red
                                        dress is tied together with a ribbon. It’s supposed to be a winter dress. I
                                        designed this dress myself, but the patterns are based on a basic T-shirt
                                        pattern.
                                    </p>
                                    <br/>
                                    <p>
                                        I decided to make this dress as a follow up of the blue dress. Again I don’t have
                                        specific inspiration, the idea just came up in me and I drew it out. I did decide to go
                                        for a different style. This style turns out to be a bit more accurate than the summer
                                        dress.
                                    </p>
                                    <br/>
                                    <p>
                                        I’ve made an alteration to the underdress. I first made it to be pulled over the head.
                                        This was very hard to do and took me a lot of effort. After doing some research later
                                        on, I found out that it was quite normal to have side lacing in the dress. I seam-ripped
                                        some of the side open and added holes for a spiral lace up. This makes putting it on
                                        and off a lot easier.

                                    </p>
                                    <span>
                                        &nbsp;
                                    </span>
                                    <div>
                                        <lightbox :images="red_dress"></lightbox>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div class="bold" slot="header">
                                <carocel :images="kirtle"/>
                                The Kirtle
                            </div>
                            <v-card>
                                <v-card-text>
                                    <p>
                                        By making the blue and red dress I got a little more interest in how women
                                        were comfortable in their clothing. I was wondering most about how they
                                        supported their breasts. It was a YouTube video that gave me the answer: they
                                        stiffened the bodies of the dresses with reed.
                                    </p>
                                    <br/>
                                    <p>
                                        I found a traditional Austrian dress with a beautiful embroidery on the front in a thrift
                                        shop. That inspired me to make a more accurate dress as well. The dress was way
                                        too big on me so I deconstructed it and made it to my size. I added a panel boned
                                        with reed to stiffen and support. I also added holes in the sides of the top to allow
                                        lacing. The skirt I pleaded down to my size. After that I reattached it to the top. The
                                        original dress had a pocket in the skirt which I removed because of accuracy issues. I
                                        thought it was fun to try to work with boning. It was definitely a challenge but it was a
                                        fun one and I think I succeeded.
                                    </p>
                                    <span>
                                        &nbsp;
                                    </span>
                                    <div>
                                        <lightbox :images="kirtle"></lightbox>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
    import carocel from '../components/carocel'

    export default {
        data() {
            return {
                blue_dress: [
                    {
                        src: '/static/img/blue_dress/Blauwe jurk 1.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwe jurk 2.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwe jurk 3.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwe jurk 4.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwe jurk 5.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwe jurk 6.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwe jurk 7.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwe jurk 8.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwe jurk 9.jpg'
                    }
                ],
                red_dress: [
                    {
                        src: '/static/img/red_dress/Rode jurk 1.jpg'
                    },
                    {
                        src: '/static/img/red_dress/Rode jurk 2.jpg'
                    },
                    {
                        src: '/static/img/red_dress/Rode jurk 3.jpg'
                    },
                    {
                        src: '/static/img/red_dress/Rode jurk 4.jpg'
                    },
                    {
                        src: '/static/img/red_dress/Rode jurk 5.jpg'
                    },
                    {
                        src: '/static/img/red_dress/Rode jurk 6.jpg'
                    },
                    {
                        src: '/static/img/red_dress/Rode jurk 7.jpg'
                    },
                    {
                        src: '/static/img/red_dress/Rode jurk 8.jpg'
                    },
                    {
                        src: '/static/img/red_dress/Rode jurk 9.jpg'
                    },
                    {
                        src: '/static/img/red_dress/Rode jurk 10.jpg'
                    }
                ],
                kirtle: [
                    {
                        src: '/static/img/kirtle/Kirtle 1.jpg'
                    },
                    {
                        src: '/static/img/kirtle/Kirtle 2.jpg'
                    },
                    {
                        src: '/static/img/kirtle/Kirtle 3.jpg'
                    },
                    {
                        src: '/static/img/kirtle/Kirtle 4.jpg'
                    },
                    {
                        src: '/static/img/kirtle/Kirtle 5.jpg'
                    },
                    {
                        src: '/static/img/kirtle/Kirtle 6.jpg'
                    },
                    {
                        src: '/static/img/kirtle/Kirtle 7.jpg'
                    },
                    {
                        src: '/static/img/kirtle/Kirtle 8.jpg'
                    }
                ]
            }
        },
        methods: {

        },
        components: {
            carocel
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
    }

    .even {
        float: right;
    }

    .uneven {
        float: left;
    }
</style>