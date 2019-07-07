<template>
  <div id="app" class="absolute">
    <router-view/>
  </div>
</template>

<script>
    import { Component, Vue } from 'vue-property-decorator';
    @Component()
    export default class App extends Vue {

    }
</script>

<style lang="less">
@import "./assets/css/common.less";
</style>
