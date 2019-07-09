<template>
    <div>
        <SelectComponent @clickEvent="clickEvent" ref="selectComponent" :selection="selection"></SelectComponent>

        <div class="wrap" @click="clickEvent">
            <Background :currentBackgroundImage="currentBackgroundImage"></Background>
            <TextContainer
                    ref="textContainer"
                    @resetClickNumber="resetClickNumber()"
                    @addDramaRateIndex="addDramaRateIndex()"
            ></TextContainer>
            <div class="role_layer">
                <Role :rolePic="leftRolePic" class="common_role left_role"></Role>
                <Role :rolePic="centerRolePic" class="common_role center_role"></Role>
                <Role :rolePic="rightRolePic" class="common_role right_role"></Role>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Background from '../background/Background.vue';
    import TextContainer from '../text/Text.vue';
    import Role from '../role/Role.vue'
    import SelectComponent from '../select/Select.vue'
    import RoleSelector from '@/assets/utils/RoleSelector.js';

    import part1 from '@/assets/data/part_1.js';
    import part2 from '@/assets/data/part_2.js';

    const partList = [part1, part2];
    @Component({
        components: {
            Background,
            TextContainer,
            Role,
            SelectComponent
        },
    })
    export default class home extends Vue {
        leftRolePic = {};
        centerRolePic = {};
        rightRolePic = {};
        dramaRateIndex = 1;
        dramaList = part1.drama;
        clickNumber = 1;
        currentBackgroundImage = ''
        selection = ''
        partIndex = 0

        clickEvent() {
            this.typewitter(partList[this.partIndex]);
            this.changeRole();
        }

        typewitter(part) {
            this.currentBackgroundImage = part.backgroundImage;
            this.dramaList = part.drama
            const {dramaRateIndex, dramaList, clickNumber} = this
            const currentDramaRateIndex = dramaRateIndex - 1
            const textComponent = this.$refs.textContainer

            console.log(dramaList[currentDramaRateIndex])


            // 判断是否进入下一章节
            if (dramaRateIndex > dramaList.length) {
                // 本章内容结束，跳入下一章
                if (this.partIndex < partList.length) {
                    this.partIndex++;
                    this.resetDramaRate();
                } else {
                    alert('剩余剧情正在开发中...')
                }

                return;
            }
            // 判断是否为选项
            if (dramaList[currentDramaRateIndex].isSelection) {
                // 显示选项
                this.$refs.selectComponent.showSelection()
                textComponent.typewitter({
                    role: '',
                    text: ''
                });
                this.selection = dramaList[currentDramaRateIndex].text
                this.clickNumber++;
                return
            }


            if (clickNumber % 2 === 0 && clickNumber !== 0) {
                // 剧情经过了skip，现在要清除text内容和点击次数
                textComponent.skip();
                textComponent.stopWriting();
                this.addDramaRateIndex();
            } else {
                // 剧情开始正常播放，此时累加点击次数
                const dramaObject = dramaList[currentDramaRateIndex];
                textComponent.typewitter(dramaObject);
                this.clickNumber++;
            }
        }

        changeRole() {
            const {dramaRateIndex, dramaList} = this
            console.log(dramaList[dramaRateIndex - 1].leftRole)
            this.leftRolePic = RoleSelector(dramaList[dramaRateIndex - 1].leftRole)
            this.rightRolePic = RoleSelector(dramaList[dramaRateIndex - 1].rightRole)
        }


        resetDramaRate() {
            this.clickNumber = 1;
            this.dramaRateIndex = 1;
        }

        addDramaRateIndex() {
            this.dramaRateIndex++;
        }

        resetClickNumber() {
            this.clickNumber = 1;
        }

        // close = () => {
        //     const ipcRenderer = window.electron.ipcRenderer;
        //     ipcRenderer.send('app', 'quit')
        // }
        // max = () => {
        //     const ipcRenderer = window.electron.ipcRenderer;
        //     ipcRenderer.send('app', 'max')
        // }
        // min = () => {
        //     const ipcRenderer = window.electron.ipcRenderer;
        //     ipcRenderer.send('app', 'min')
        // }
        created() {
            this.clickEvent()
        }
    }
</script>

<style scoped lang="less">
    @import "./Home.less";
</style>
