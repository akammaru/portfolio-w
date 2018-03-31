<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs7 offset-xs3>
                    <v-expansion-panel popout>
                        <v-expansion-panel-content xs7 offset-xs5>
                            <div class="bold" slot="header">
                                <carocel :images="white_top"/>
                                White top & Pleaded skirt
                            </div>
                            <v-card>
                                <v-card-text>
                                    <h1>White top</h1>
                                    <p>
                                        This is a top with a design I don’t see that often. When I was younger I had a
                                        top like this. That inspired me to make it again. I wanted to make dress with a
                                        skirt that is made of the same fabric as the neck band.
                                        I started out with the top. It is a simple top which pattern I made by draping
                                        the fabric
                                        over my mannequin. The pattern pieces are all on fold so it was very easy to
                                        drape. I
                                        wanted to make it into a dress by attaching a pink skirt to the top. This didn’t
                                        look
                                        good however so took it off again and used the top part only. That turned out to
                                        be a
                                        very pretty top. The fabrics are all stretch cotton fabrics.
                                    </p>
                                    <br>
                                    <h1>Pleaded skirt</h1>
                                    <p>
                                        This skirt is inspired of two skirts that I own. I combined the styles of these
                                        skirts and played around with it a bit. In the end I came up with this idea. I
                                        also
                                        wanted to try to make a skirt in this style, since I really like the way they
                                        look.
                                        I started with making the waistband. I used a pattern that I made with the blue
                                        Middle
                                        Ages dress. The skirt is a rectangular skirt that I pleaded to fit the
                                        waistband. The
                                        waistband turned out to be too big so I had to fold a bit under and sewed it
                                        down. It
                                        doesn’t really disturb the way the skirt falls. The skirt closes up with a
                                        zipper beneath
                                        the waistband and two push buttons on the waistband.
                                    </p>
                                    <span>
                                        &nbsp;
                                    </span>
                                    <div>
                                        <lightbox :images="white_top"></lightbox>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div class="bold" slot="header">
                                <carocel :images="green_dress"/>
                                Blue/green dress
                            </div>
                            <v-card>
                                <v-card-text>
                                    <p>
                                        I received a fabric from a friend as a birthday present. It was the fabric that
                                        I used for the top of this dress. I wore this dress during the Christmas season to
                                        every Christmas celebration I had. Sometimes with lights underneath the
                                        skirt.
                                    </p>
                                    <br/>
                                    <p>
                                        At first I wanted to use the top fabric for the skirt, but when I was trying to
                                        drape in
                                        the skirt I wanted it to be I saw the fabric was too structured to be a skirt.
                                        It wasn’t
                                        falling the way I wanted it to fall. So I changed plan and used that fabric for
                                        the top of
                                        the dress instead. Since it was so structured it was perfect for that. I found
                                        the fabric
                                        for the skirt in a fabric store. It caught my attention because of the nice
                                        pattern on it
                                        and the suppleness of it. I decided to make a full circle skirt from it.
                                        I draped the pattern pieces of the the top on the mannequin to find out the
                                        pattern
                                        pieces. The top four pieces in total: a mid-front, two sides and a back piece.
                                        The
                                        zipper is in the side to make putting it on easier. When I had the top part
                                        almostready I decided that I wanted to have a lining to make it more
                                        comfortable. I made
                                        that from some scrap fabric I had at home. I’ve designed the top to have the
                                        scalloped edge on the bottom. This creates a nice border between the top and
                                        skirt
                                        but also brings the whole dress together.
                                    </p>
                                    <br/>
                                    <p>
                                        The skirt I cut a little too big so it lays a bit funny around the zipper. This
                                        is actually a
                                        good thing because with the extra fabric there I can hide the zipper.
                                        I don’t know exactly what material the top fabric is made from. The lining is
                                        made
                                        from a cotton fabric and the skirt is a stretch fabric.
                                    </p>
                                    <span>
                                        &nbsp;
                                    </span>
                                    <div>
                                        <lightbox :images="green_dress"></lightbox>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div class="bold" slot="header">
                                <carocel :images="backpack"/>
                                Pikachu backpack
                            </div>
                            <v-card>
                                <v-card-text>
                                    <p>
                                        This is a backpack I made for my sister. She loves Pokémon so much, she
                                        wanted to have a backpack of it for her birthday. I could only find childish ones
                                        in stores, so I decided to make it myself instead.
                                    </p>
                                    <br/>
                                    <p>
                                        I started with finding a cheap backpack I could use the back, straps and zippers from.
                                        This makes things a little bit easier. After that I looked for an image of Pikachu that I
                                        could use as a template. I printed this out and cut out all the different pieces. I started
                                        looking for fabric and when I had them, I immediately started cutting out the pieces
                                        and trying to sew them all together. It was quit tricky to find out in which order to sew
                                        everything together. In the end in ended up pretty well. The outside parts are triple
                                        layered. I used two layers of fabric with a layer of plastic in between to make the
                                        backpack waterproof. I might do that different next time. After making the basic
                                        shape I sewed on all of the stuffed limps that I made. I also sewed on the face to
                                        finish it all off. When I gave to my sister she was very happy with it.
                                        All of the fabrics are cotton. Some have stretch, some don’t. I’ve also used plastic
                                        bags for the layer in between to make the backpack more waterproof.
                                    </p>
                                    <span>
                                        &nbsp;
                                    </span>
                                    <div>
                                        <lightbox :images="backpack"></lightbox>
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
                white_top: [
                    {
                        src: '/static/img/black_skirt/Zwarte rok 1.jpg'
                    },
                    {
                        src: '/static/img/black_skirt/Zwarte rok 2.jpg'
                    },
                    {
                        src: '/static/img/black_skirt/Zwarte rok 3.jpg'
                    },
                    {
                        src: '/static/img/black_skirt/Zwarte rok 4.jpg'
                    },
                    {
                        src: '/static/img/black_skirt/Zwarte rok 5.jpg'
                    }
                ],
                green_dress: [
                    {
                        src: '/static/img/green_dress/Groene jurk 1.jpg'
                    },
                    {
                        src: '/static/img/green_dress/Groene jurk 2.jpg'
                    },
                    {
                        src: '/static/img/green_dress/Groene jurk 3.jpg'
                    },
                    {
                        src: '/static/img/green_dress/Groene jurk 4.jpg'
                    }
                ],
                backpack: [
                    {
                        src: '/static/img/pikachu_backpack/Pikachu tas 1.jpg'
                    },
                    {
                        src: '/static/img/pikachu_backpack/Pikachu tas 2.jpg'
                    },
                    {
                        src: '/static/img/pikachu_backpack/Pikachu tas 3.jpg'
                    },
                    {
                        src: '/static/img/pikachu_backpack/Pikachu tas 4.jpg'
                    },
                    {
                        src: '/static/img/pikachu_backpack/Pikachu tas 5.jpg'
                    }
                ]
            }
        },
        methods: {},
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