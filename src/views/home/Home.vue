<template>
    <div class="wrap" @click="clickEvent">
        <Background></Background>
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
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Background from '../background/Background.vue';
    import TextContainer from '../text/Text.vue';
    import Role from '../role/Role.vue'
    import RoleSelector from '@/assets/utils/RoleSelector.js';

    import drama from '@/assets/data/part_1.js';
    @Component({
        components: {
            Background,
            TextContainer,
            Role
        },
    })
    export default class home extends Vue {
        leftRolePic = {};
        centerRolePic = {};
        rightRolePic = {};
        dramaRateIndex = 1;
        dramaList = drama;
        clickNumber = 1

        clickEvent() {
            this.typewitter();
            this.changeRole();
        }

        typewitter(){
            const {dramaRateIndex, dramaList, clickNumber} = this
            if(dramaRateIndex > dramaList.length){
                return ;
            }
            const textComponent = this.$refs.textContainer
            if(clickNumber % 2 === 0 && clickNumber !== 0 ) {
                // 剧情经过了skip，现在要清除text内容和点击次数
                textComponent.skip();
                textComponent.stopWriting();
                this.addDramaRateIndex();
            }else {
                // 剧情开始正常播放，此时累加点击次数
                const dramaObject = dramaList[dramaRateIndex - 1];
                textComponent.typewitter(dramaObject);
                this.clickNumber ++ ;
            }
        }

        changeRole() {
            const {dramaRateIndex, dramaList} = this
            console.log(dramaList[dramaRateIndex - 1].leftRole)
            this.leftRolePic = RoleSelector(dramaList[dramaRateIndex - 1].leftRole)
            this.rightRolePic = RoleSelector(dramaList[dramaRateIndex - 1].rightRole)
        }



        addDramaRateIndex(){
            this.dramaRateIndex ++ ;
        }
        resetClickNumber(){
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
    }
</script>

<style scoped lang="less">
    @import "./Home.less";
</style>
