<template>
    <div class="role_content fadeIn">
        <img class="" :src="rolePic" height="400px" alt="">
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    @Component
    export default class RoleLeft extends Vue {
        @Prop({ default: null })
        rolePic: any

    }

</script>

<style scoped>
@import "Role.less";
</style>