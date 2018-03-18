<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs7 offset-xs3>
                    <v-expansion-panel popout>
                        <v-expansion-panel-content xs7 offset-xs5>
                            <div slot="header">
                                <carocel :images="cutting_board"/>
                                Cutting board
                            </div>
                            <v-card>
                                <v-card-text>
                                    <p>
                                        With this project we had to study trends in a group and develop a product
                                        which would fit those trends. My group designed a kids-safe chopping board
                                        for JosephJoseph. This came from the trend that parents want to spend more
                                        time with their children but have less free time to spend. So they want to make
                                        times like cooking more for the family.
                                    </p>
                                    <br/>
                                    <p>
                                        At first we had to make all variations on it. My first idea was to use magnets and a
                                        metal plate to help the child to cut. After running some tests, we found out that it
                                        didn’t work. This meant we had to make a step back and go back to designing
                                        instead of developing. We decided to go for a different concept from another group
                                        member. That worked out better but we had to work quick to make up for the time we
                                        lost. In the end it worked out well and we got a good result. We were coached very
                                        well and got good feedback. For the final presentation we had to make a working
                                        model and presentation board. We also had to make a flyer. I kind of helped with
                                        everything but also had the responsibility for the flyer. This turned out very well. I am
                                        very happy with the results of this project.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div slot="header">
                                <carocel :images="tool"/>
                                Snowboard tool
                            </div>
                            <v-card>
                                <v-card-text>
                                    <p>
                                        This is a project where we had to design an extra function in an existing
                                        product. The product was a snowboard multi-tool. We were given a brand, in
                                        my case Makita, we had to design for. We were also given a person we had to
                                        design for. I had a 35-year- old woman.
                                    </p>
                                    <br/>
                                    <p>
                                        My first idea was to make a compass in it so she could find out. After some
                                        discussions with my teacher and fellow students I decided to tur the cap of the cabin
                                        for the tools into a whistle.
                                    </p>
                                    <br/>
                                    <p>
                                        The end result I am very pleased with. The poster is quite simple, but the brand did
                                        not have a lot of details either.
                                        The model on the right side is a 3D-printed model of my design.
                                        This project was again fictional; the brand was not involved.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div slot="header">
                                <carocel :images="thea"/>
                                Thea set
                            </div>
                            <v-card>
                                <v-card-text>
                                    <p>
                                        For this project we could choose from different art movements to base our
                                        designs off. One of the movements was the Rococo. After doing some
                                        research about this movement I decided I wanted to give it a go with this. It
                                        turned out I was the only one taking this challenge. We also had to choose
                                        between designing a coffee set and a tea set. Since I don’t drink coffee, it was
                                        an easy choice for me. I also decided to design for the British market with their
                                        tea time tradion. The full tea set would include a cup, a dish, a sugar bowl and
                                        a set of bowls for the scones, clotted cream and jam.
                                    </p>
                                    <br/>
                                    <p>
                                        At first we had to make a moodboard. My moodboard was not typical Rococo but
                                        was taken to this time. I really gave an own spin to it which I am very happy with. I
                                        wanted to make a tea set inspired by the Rococo but which could be used today. My
                                        first sketches weren’t that interesting I thought. I decided to go for a too modern and
                                        not Rococo enough set. Later on I changed my mind and decided to work with fabrics
                                        and the possibilities that come with it. I started sewing and playing with it and found
                                        an awesome idea for a bowl. From there I went back to an earlier idea from a cup
                                        that I had. I also already had a sugar bowl ready. The only thing I needed were a dish
                                        and the little bowls. After playing with some ideas I came out with a shape for the
                                        little bowl. I did some more tests for the dish and I found a shape that I thought
                                        brought the whole set together. I am very happy with the result and I am very happy
                                        for really making this project mine.
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
                cutting_board: [
                    {
                        src: '/static/img/cutting_board/Snijplank 1.jpg'
                    },
                    {
                        src: '/static/img/cutting_board/Snijplank 2.jpg'
                    },
                    {
                        src: '/static/img/cutting_board/Snijplank 3.jpg'
                    },
                    {
                        src: '/static/img/cutting_board/Snijplank 4.jpg'
                    }
                ],
                tool: [
                    {
                        src: '/static/img/multitool/multitool 1.jpg'
                    },
                    {
                        src: '/static/img/multitool/multitool 2.jpg'
                    },
                    {
                        src: '/static/img/multitool/multitool 3.jpg'
                    },
                    {
                        src: '/static/img/multitool/multitool 4.jpg'
                    }
                ],
                thea: [
                    {
                        src: '/static/img/thea_china/Theeservies 1.jpg'
                    },
                    {
                        src: '/static/img/thea_china/Theeservies 2.jpg'
                    },
                    {
                        src: '/static/img/thea_china/Theeservies 3.jpg'
                    },
                    {
                        src: '/static/img/thea_china/Theeservies 4.jpg'
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