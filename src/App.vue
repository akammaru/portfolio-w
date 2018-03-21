<template>
    <div class="app" id="app">
        <custom-heading/>
        <navbar />
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import customHeading from './components/customeHeading'
    import navbar from './components/Navbar'

    export default {
        name: 'App',
        components: {
            customHeading,
            navbar,
        }
    }
</script>

<style>

</style>
