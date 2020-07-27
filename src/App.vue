<template>
  <div id="app" v-loading.fullscreen.lock="this.$store.state.app.loadingStatus">
    <router-view />
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
