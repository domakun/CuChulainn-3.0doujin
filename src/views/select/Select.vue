<template>
    <div v-if="isShowSelection" class="select_container absolute">
        <span :class="['container',isWaved]" @click="hideSelection()">
            ......{{selection}}
        </span>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component()
    export default class select extends Vue {
        @Prop({default: false})
        selection: any

        isWaved = ''

        isShowSelection = false

        showSelection() {
            this.isShowSelection = true
            this.isWaved = ''
        }

        hideSelection() {
            this.isWaved = 'selection_pulse'
            const that = this
            setTimeout(() => {
                that.isShowSelection = false
                that.$emit('clickEvent')
            }, 200)
        }
    }
</script>

<style scoped lang="less">
    @import "Select.less";
</style>