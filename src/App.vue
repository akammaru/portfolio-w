<template>
    <div id="app">
        <custom-header />
        <nav />
        <div>
            <router-view></router-view>
        </div>
        <img src="./assets/logo.png">
        <HelloWorld/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import customHeader from './components/Header'
    import navbar from './components/Navbar'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            customHeader,
            navbar,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
