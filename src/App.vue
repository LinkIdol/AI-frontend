<template>
    <div id="app">
        <el-container>

            <CryptoHeader></CryptoHeader>
            <router-view></router-view>
            <el-footer style="background-color: #0C071C;height: auto;">
                <div class="fixed-width myFooter">
                    <div>
                        <p>市场</p>
                        <p>常见问题</p>
                        <p>教程</p>
                    </div>
                    <div>
                        <p>关于</p>
                        <p>白皮书</p>
                        <p>关于</p>
                        <p>隐私政策</p>
                    </div>
                    <div>
                        <p>telegram</p>
                        <p>twitter</p>
                        <p>youtube</p>
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
import api from '@/util/api'
import CryptoHeader from './components/layout/CryptoHeader'
import CryptoFooter from './components/layout/CryptoFooter'

export default {
  name: 'app',
  components: {
      CryptoHeader,
      CryptoFooter
  },
  mounted (){
    api.setTronWeb(window.tronWeb)

    api.contract.allOf(1).call().then(resp => {
      console.log(resp)
    })

    api.contract.ownerOf(1).call().then(resp => {
      console.log(resp)
    })

    api.contract.tokenExists(1).call().then(resp => {
      console.log(resp)
    })
  }
}
</script>

<style lang="scss">
    html,body {
        padding: 0;
        margin: 0;
        background-color: $bgColor;
    }
    .fixed-width {
        max-width: 1000px;
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
        color: #fff;
    }
    .myFooter p {
        line-height: 14px;
    }
    .copyRight {
        width: 1100px;
        text-align: center;
        margin: 0 auto;
        color: #fff;
        font-size: 14px;
        padding: 40px;
        border-top: 1px solid #191428;
    }
</style>
