<template>
    <div class="main-container columns">
        <cv class="is-hidden-touch"/>
        <main-content/>
        <div class="spacer is-hidden-touch is-one-quarter-desktop"></div>
    </div>
</template>

<script>
    import cv from '../components/cv'
    import mainContent from '../components/maincontent'

    export default {
        components: {
            cv,
            mainContent
        }
    }
</script>

<style lang="scss" scoped>
    .force-blow {
        clear: both;
    }
</style>