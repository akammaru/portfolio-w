<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs7 offset-xs3>
                    <v-expansion-panel popout>
                        <v-expansion-panel-content xs7 offset-xs5>
                            <div slot="header">Item</div>
                            <v-card>
                                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div slot="header">Item</div>
                            <v-card>
                                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                            <div slot="header">Item</div>
                            <v-card>
                                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {}
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