<template>
    <div class="app_background" :style="{backgroundImage: 'url(' + currentBackgroundImage + ')'}">
    </div>
</template>

<script lang="ts">
    import { Component, Vue ,Prop} from 'vue-property-decorator';
    import seaside_gray from '../../assets/images/bg/bg-b&w-seaside.jpg';
    @Component
    export default class Background extends Vue {
        @Prop({ default: '' })
        currentBackgroundImage: any
    }

</script>

<style scoped>
@import "Background.less";
</style>