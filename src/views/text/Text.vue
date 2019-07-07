<template>
    <div class="app_text">
        <span v-if="dramaObject.role !== ''" class="role_name">{{dramaObject.role}}</span>
        <div class="text_content">
            <p>{{currentContent}}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class TextContainer extends Vue {
        currentContent = '';
        textInterval:any = {};
        clickTime = 0;
        dramaObject = {
            role:'',
            text:''
        }

        typewitter(textParam) {
            this.dramaObject = textParam
            const that = this;
            this.clickTime += 1
            this.stopWriting()
            this.currentContent = ''
            const text = textParam.text
            let textIndex = 0;
            const textLength = text.length;
            setTimeout(() => {
                that.textInterval = setInterval(() => {
                    if (textIndex <= textLength) {
                        that.currentContent = text.substr(0, textIndex);
                        textIndex++;
                    } else {
                        that.stopWriting()
                        // 剧情前进+1
                        this.$emit('addDramaRateIndex')
                        this.$emit('resetClickNumber')
                    }
                }, 100);
            }, 100);
        }


        stopWriting () {
            clearInterval(this.textInterval);
        }

        skip() {
            this.currentContent = this.dramaObject.text
            // 重置clickNumber 点击次数
            this.$emit('resetClickNumber')
        }


    }

</script>

<style scoped>
    @import "Text.less";
</style>