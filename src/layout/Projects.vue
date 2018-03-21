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
                                    type: Historical costumes <br/>
                                    time-periode: Middle ages
                                    <p>
                                        This blue dress is made out of two pieces: a top and a skirt. The top is tied up
                                        with a ribbon. The skirt is closed with a zipper in the back. This dress is based
                                        on a summer dress from the Middle Ages, although the zipper doesn’t fit in that
                                        theme. I designed and made this dress myself, patterns included.
                                        I completely designed and made this hooded cape myself, including the
                                        patterns. It is a short single layered cape. Only the hood is lined. The cape is
                                        closed with two hooks under the chin and fits with the blue dress.
                                        I had the idea of the dress for already over a year. I already bought fabrics as well
                                        but I never took the time to actually make it. I didn’t really have inspiration for this
                                        dress. Sometimes a design just pops up in my head and I draw it out. That is where I
                                        start from. The cape I made because I thought it would be useful to have one in case
                                        of bad weather. I thought they would have capes in the Middle Ages for that too.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div class="bold" slot="header">
                                <carocel :images="cape"/>
                                Item
                            </div>
                            <v-card>
                                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div class="bold" slot="header">
                                <carocel :images="cape"/>
                                Item
                            </div>
                            <v-card>
                                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                        src: '/static/img/blue_dress/Blauwejurk1.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwejurk2.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwejurk3.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwejurk4.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwejurk5.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwejurk6.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwejurk7.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwejurk8.jpg'
                    },
                    {
                        src: '/static/img/blue_dress/Blauwejurk9.jpg'
                    }
                ],
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