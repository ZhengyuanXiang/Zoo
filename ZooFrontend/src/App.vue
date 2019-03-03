<template>
    <div id="app">
        <div class = "main">
            <div class = "body-content">
                <tab></tab>
                <div class = "container" ref = "container">
                    <section class = "section"></section>
                </div>
            </div>
            <foot></foot>
        </div>
    </div>
</template>

<script>
import tab from "@/components/tab/tab"
import foot from "@/components/base/foot"

export default {
    name: 'app',
    components: {
      tab,
      foot
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="less">
    @import "./assets/css/prism.css";
    @import './assets/css/emoji-sprite.css';
    *{
        margin: 0;
        padding: 0;
    }
    a{
        -webkit-tap-highlight-color: transparent
    }
    body{
        font: 400 16px/20px Arial,Helvetica,Tahoma,"华文细黑","Microsoft YaHei","微软雅黑",sans-serif;
        color: #000;
    }
    #app{
        margin: 50px 0 0 0;
    }
    .main{
        width: 100%;
    }
    a{
        text-decoration: none
    }
    .body-content,.container{
        position: relative
    }
    .location{
        background: #FAF7F7;
        margin-top: 10px;
        padding: 10px;
        font-size: 14px;
        a{
            color: #16a085
        }
        div{
            display: inline;
        }
    }
    .section{
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }
    .content{
        width: 68%;
    }
    .r-slide{
        width: 32%;
    }
    .rocket{
        position: fixed;
        right: 10px;
        bottom: 10px;
        a{
            display: inline-block;
            width: 50px;
            height: 50px;
            background: url("/img/backTop.png") 0 0 no-repeat;
        }
        a:hover{
            background-position: -50px 0;
        }
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active,.fade-leave-active{
        transition: all ease .5s;
    }
    .fix-bg{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
//手机端
@media screen and (max-width: 767px){
    .fix-bg{
        background: #f4f4f4
    }
    .section{
            flex-wrap: wrap;
              // padding: 10px 15px;
        }
        .section .content,.r-slide{
            width: 100%
        }
        .location{
            margin-top: 0;
        }
}
//平板
@media screen and (min-width: 768px){
    .fix-bg{
        background: url("/img/mainBg2.jpg") 0 0 no-repeat;
        background-size: 100% 100%;
    }
    .section{
        max-width: 760px;
        padding: 10px 30px;
    }
    .navbar{
        max-width: 820px
    }
    .search{
        padding: 0 30px
    }
    .nav-header{
        padding: 0 20px 0 35px
    }
    .r-slide{
        margin-left: 25px;
        margin-top: 10px;
    }
}
//小屏幕pc端
    @media screen and (min-width: 992px) {
        .section{
            max-width: 970px;
            padding: 10px 30px;
        }
        .navbar{
            max-width: 1030px;
        }
    }
    //大屏幕pc端
    @media screen and (min-width: 1200px){
        .section{
            max-width: 1140px;
            padding: 20px 30px;
        }
        .r-slide{
            margin-left: 30px;
        }
        .navbar{
          max-width: 1200px;
        }
    }
</style>

