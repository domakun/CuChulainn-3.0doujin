<template>
    <div class="app_background" :style="{backgroundImage: 'url(' + currentImg + ')'}">
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import seaside_gray from '../../assets/images/bg/bg-b&w-seaside.jpg';
    @Component
    export default class Background extends Vue {
        seaside_gray = seaside_gray;
        currentImg = seaside_gray;
    }

</script>

<style scoped>
@import "Background.less";
</style>