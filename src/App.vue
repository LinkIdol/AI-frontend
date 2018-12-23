<template>
    <div id="app">
        <el-container>
            <CryptoHeader></CryptoHeader>
            <router-view></router-view>
            <el-footer style="background-color: #0C071C;height: auto;">
                <div class="fixed-width myFooter">
                    <div>
                        <p>
                            <router-link to="/market">市场</router-link>
                        </p>
                        <p>
                            <router-link to="/market">常见问题</router-link>
                        </p>
                        <p>
                            <router-link to="/market">教程</router-link>
                        </p>
                    </div>
                    <div>
                        <p>
                            <router-link to="/about">关于</router-link>
                        </p>
                        <p>
                            <router-link to="/market">白皮书</router-link>
                        </p>
                        <p>
                            <router-link to="/market">隐私政策</router-link>
                        </p>
                    </div>
                    <div>
                        <p><a href="https://telegram.org/">telegram</a></p>
                        <p><a href="https://twitter.com/">twitter</a></p>
                        <p><a href="https://www.youtube.com/">youtube</a></p>
                    </div>
                </div>
                <div class="copyRight">
                    <span>Copyright © 2018 CryptoGirls Team </span>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    //import api from '@/util/api'
    import CryptoHeader from './components/layout/CryptoHeader'

    export default {
        name: 'app',
        components: {
            CryptoHeader
        },
        mounted() {
            /*api.setTronWeb(window.tronWeb)

            api.contract.allOf(1).call().then(resp => {
              console.log(resp)
            })

            api.contract.ownerOf(1).call().then(resp => {
              console.log(resp)
            })

            api.contract.tokenExists(1).call().then(resp => {
              console.log(resp)
            })*/
        }
    }
</script>

<style lang="scss">
    html, body {
        padding: 0;
        margin: 0;
        background-color: $bgColor;
    }

    .fixed-width {
        max-width: $fixedWidth;
        padding: 20px;
        width: 100%;
        margin: 0 auto;

    }

    .myFooter {
        display: flex;
        padding: 20px 20px 40px 20px;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        color: #BDBDBD;
    }

    .myFooter p {
        line-height: 14px;
    }

    .myFooter a {
        color: #BDBDBD;
    }

    .myFooter a:hover {
        color: #ffffff;
    }

    .copyRight {
        width: 1100px;
        text-align: center;
        margin: 0 auto;
        color: #BDBDBD;
        font-size: 14px;
        padding: 40px;
        border-top: 1px solid #191428;
    }

    a {
        text-decoration: none;
    }
</style>
