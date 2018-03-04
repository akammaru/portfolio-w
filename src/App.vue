<template>
    <div class="app" id="app">
        <custom-header />
        <navbar />
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import customHeader from './components/Header'
    import navbar from './components/Navbar'

    export default {
        name: 'App',
        components: {
            customHeader,
            navbar,
        }
    }
</script>

<style>

</style>
