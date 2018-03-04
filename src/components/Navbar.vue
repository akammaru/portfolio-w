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
                <router-link class="navbar-item" to="/projects" activeClass="active">Projects</router-link>

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