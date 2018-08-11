<template>
    <div class="container">
        <header-comp></header-comp>
        <hr>
        <server-status></server-status>
        <hr>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue'
    export default {
        components: {
            'server-status': ServerStatus 
        }
    }
</script>

<style>
</style>
