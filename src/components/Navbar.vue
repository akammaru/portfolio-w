<template>
    <nav class="navbar" role="navigation" aria-label="main nagivation">
        <div class="navbar-brand">
            <div class="navbar-burger has-dropdown animated fadeIn" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/" activeClass="active" exact>Home</router-link>
                <router-link class="navbar-item" to="/middle-ages">Middle Ages</router-link>
                <router-link class="navbar-item" to="/eighteenth-century">18th and 19th century</router-link>
                <router-link class="navbar-item" to="/fantasy">Fantasy</router-link>
                <router-link class="navbar-item" to="/fashion">Fashion</router-link>
                <router-link class="navbar-item" to="/technical">Technical</router-link>
                <router-link class="navbar-item is-hidden-desktop" to="/cv" activeClass="active">CV</router-link>

            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                showNav: false,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>