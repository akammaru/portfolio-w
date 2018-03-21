<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs7 offset-xs3>
                    <v-expansion-panel popout>
                        <v-expansion-panel-content xs7 offset-xs5>
                            <div class="bold" slot="header">
                                <carocel :images="white_dress"/>
                                White dress
                            </div>
                            <v-card>
                                <v-card-text>
                                    <p>
                                        This is a very basic dress that can be paired with a lot of things. I could wear it
                                        by itself or with accessories. I made this dress without patterns. I used old fabric to figure out how big the
                                        parts should be to fit me. The poof is made with some tulle underneath. The
                                        dress is closed with a blind zipper and a hook in the back.
                                    </p>
                                    <br/>
                                    <p>
                                        I started by simply draping some fabric over my body. I wore a tank top underneath
                                        so I could pin the fabric to that. That way I figured out all of the front panels. The back
                                        panel I made by extending the side panels. The top consists of three panels in total:
                                        one for the middle front and two for the sides/back. The top is lined with the same
                                        fabric to give a clean look.
                                    </p>
                                    <br/>
                                    <p>
                                        The skirt I designed to be a half circle skirt, but I thought that wasn’t enough. I cut out
                                        a little bit more with the same curves and added that, gathering the top to fit the
                                        bottom of the top. That gave me the look I wanted. I attached the top skirt to the top
                                        layer of the top. For the poof I gathered two layers of tulle to fit the top. This was
                                        sewed on the lining layer of the top.
                                    </p>
                                    <br/>
                                    <p>
                                        The arm decorations are simply made by making a band that fits around my arms
                                        and attaching gathered tulle to it. I used al white linen fabric with a bit of a sparkle for
                                        the top, lining, skirt and bands around the arms.
                                    </p>
                                    <br/>
                                    <p>
                                        In some pictures I’m wearing the white dress with a dark brown corset and bracelet. I
                                        think it gives a bit of a Steampunk feel to the whole outfit.
                                        I like to wear it this way because I think the dark color of the corset really brings out
                                        the white of the dress.
                                    </p>
                                    <br/>
                                    <p>
                                        With the blue corset and the sleeves, I feel like an elf princess of some sort.
                                        Especially the sleeves I think make it very floaty and fairy like.
                                        The blue corsets compliment the dress in a complete different way. It stands out just
                                        enough to be seen but is not breaking up the dress.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div class="bold" slot="header">
                                <carocel :images="rangers_apprentice"/>
                                Rangers apprentice
                            </div>
                            <v-card>
                                <v-card-text>
                                    <p>
                                        This is a costume that I made to be a more practical elf costume. I wanted to
                                        make a hunting costume that would show a different sort of elf. However, when
                                        I was walking around on an event, people started mentioning it as a ranger’s
                                        costume from the book series Ranger’s Apprentice by John Flanagan. When I
                                        read the books again I noticed that their outfit looks a lot like what I made as
                                        described in the book. I made an own interpretation of it but it still looks quite
                                        similar.
                                    </p>
                                    <br/>
                                    <p>
                                        The costume consists of a shirt, gilet, pair of pants and cape. I made the shirt from a
                                        cotton thrifted man’s shirt that I deconstructed and made to my size. I removed the
                                        collar and closed the front. I also left one shoulder open and added buttons there so I
                                        could get in and out easily. I’ve also removed some buttons and replaced some
                                        buttons on the sleeves.
                                    </p>
                                    <br/>
                                    <p>
                                        The pants are made of a brown linen. I used a pattern that I changed a little bit to be
                                        more accurate. The pattern I used came from a magazine I had at home. I changed
                                        the closing method from a zipper to a lace-up for accuracy.
                                        The gilet is made from two layers of fabric. The upper layer is a heavy velvet fabric
                                        that I had thrifted as a curtain. The lining is a cotton with a flower pattern. I used a
                                        shirt to get the pattern from. The gilet is closed with eyes and hooks. I dyed the
                                        curtain to be green instead of the original yellow.
                                    </p>
                                    <br/>
                                    <p>
                                        The cape is made from a heavy fabric that is like wool on the inside and like fleece
                                        on the outside. I used a sweater to make a pattern from the body and the hood.
                                    </p>
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
                white_dress: [
                    {
                        src: '/static/img/white_dress/Witte jurk 1.jpg'
                    },
                    {
                        src: '/static/img/white_dress/Witte jurk 2.jpg'
                    },
                    {
                        src: '/static/img/white_dress/Witte jurk 3.jpg'
                    },
                    {
                        src: '/static/img/white_dress/Witte jurk 4.jpg'
                    },
                    {
                        src: '/static/img/white_dress/Witte jurk 5.jpg'
                    },
                    {
                        src: '/static/img/white_dress/Witte jurk 6.jpg'
                    },
                    {
                        src: '/static/img/white_dress/Witte jurk 7.jpg'
                    },
                    {
                        src: '/static/img/white_dress/Witte jurk 8.jpg'
                    },
                    {
                        src: '/static/img/white_dress/Witte jurk 9.jpg'
                    }
                ],
                rangers_apprentice: [
                    {
                        src: '/static/img/grey_hunter/Grijze jager 1.jpg'
                    },
                    {
                        src: '/static/img/grey_hunter/Grijze jager 2.jpg'
                    },
                    {
                        src: '/static/img/grey_hunter/Grijze jager 3.jpg'
                    },
                    {
                        src: '/static/img/grey_hunter/Grijze jager 4.jpg'
                    },
                    {
                        src: '/static/img/grey_hunter/Grijze jager 5.jpg'
                    },
                    {
                        src: '/static/img/grey_hunter/Grijze jager 6.jpg'
                    },
                    {
                        src: '/static/img/grey_hunter/Grijze jager 7.jpg'
                    },
                    {
                        src: '/static/img/grey_hunter/Grijze jager 8.jpg'
                    },
                    {
                        src: '/static/img/grey_hunter/Grijze jager 9.jpg'
                    },
                    {
                        src: '/static/img/grey_hunter/Grijze jager 10.jpg'
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