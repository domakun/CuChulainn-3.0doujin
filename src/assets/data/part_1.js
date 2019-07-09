import bgSeasideGray from '../images/bg/bg-b&w-seaside.jpg'
const content =
    {
        backgroundImage: bgSeasideGray,
        drama:[
            {
                role: false,
                leftRole: false,
                rightRole: false,
                text: '做了一个十分悲伤的梦。'
            },
            {
                leftRole: false,
                rightRole: false,
                role:false,
                text:'……抑或是，误入了谁的梦中。'
            },
            // {
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'在耳边回响着的是寂寥的海浪声。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'缓缓抬起沉重的眼睑，横陈在眼前的是由单调黑白构成的风景。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'机械地冲刷着沙滩的海浪，划过空际的海鸥，在海风中摇曳着的、如同黑色火焰一般的树木。\n'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'　　——以及坐在礁石上，眺望着海平面的女人。像是在等待着什么。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'在无尽的大海的衬托下，那身影显得格外单薄。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'我无法移动身体，只能伫立在沙滩之上，任由海浪一次又一次地攀上脚背。浪花在用尽全力冲向前方，却无数次地迎来失败，无数次地消散时发出濒死的声响。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'奋起冲向礁石发出巨响，亦或是在更远处的沙滩缓缓死去的海浪，冰冷黏腻的海水，弥漫在空气中的腥味，一切都在安静地洗刷着我的理智，仿佛被卷入了永不会迎来结束的战场……'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'为了保持理智，我数着足下被海浪冲刷的次数。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'数到第三千二百九十七下的时候，一成不变的风景终于迎来了变化。\n' +
            //     '　　——从浓浓的海雾深处，浮现出了什么。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'一艘逐渐靠近海边的船，以及上面的两个乘客——划船的人，和坐在船头的乘客。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'异样的是，唯有坐在船上的这两个人，是彩色的。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'　——是与这黑白世界格格不入的异常事物。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'承载着斑斓色彩的船停了下来。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'撑着船桨的男人停下了手中的动作。坐在船头的少年回头看了一眼那身披斗篷的高个子男人，得到默许后，便身手敏捷地跳下船，淌过海水，走到了女人面前。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'女人仿佛听不见也看不见那孩子的身影。在他向她靠近的过程中，依旧是一动不动的模样。几乎令人怀疑她是不是一具尸体。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'终于孩子站在了她的面前。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'然而处于黑白世界中的女人却看不见他。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'漠然的目光穿过他的身影，依然朝向远方。那是不抱有任何希望的、仅仅是出于“习惯”的等待。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'与此同时，渐浓的海雾像对作品感到不满的画家那样，一点点抹去两人的身影。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'少年向女人伸出手。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'有着健康肤色的手，轻轻抚过女人干涸的眼角和灰白的侧脸。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'“……对不起。”'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'“但是……”'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'混杂在海风中的少年的声音，逐渐变得模糊。'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'带着快要哭出来的表情，最后他说了什么呢？'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'只是看到他的嘴唇动了动。海雾隔开了声音与画面……'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'然后……'
            // },{
            //     leftRole: false,
            //     rightRole: false,
            //     role:false,
            //     text:'我醒了过来。'
            // }
        ]
    }



export default content;