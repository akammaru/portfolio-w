<template>
    <nav class="navbar" role="navigation" aria-label="main nagivation">
        <div class="navbar-brand">
            <div class="navbar-burger has-dropdown" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/" activeClass="active" exact>Home</router-link>
                <!--todo: deze links verwijderen en omzetten naar routerlinks zodra deze nodig zijn.
                    op dit moment alleen nog vulling om te zien hoe de style zich gedraagt.-->
                <a class="navbar-item" href="/path">
                    Path
                </a>
                <a class="navbar-item" href="/blog">
                    Blog
                </a>
                <div class="navbar-item" v-if="loggedIn">
                    <router-link to="/control_panel" activeClass="active">Control panel</router-link>
                </div>
                <div class="navbar-item" v-if="loggedIn">
                    <a href="#" @click="logoutUser">log out</a>
                </div>
                <div class="navbar-item" v-if="!loggedIn">
                    <router-link to="/login" activeClass="active">Log in</router-link>
                </div>

            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                showNav: false,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>