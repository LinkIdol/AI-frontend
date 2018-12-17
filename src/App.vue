<template>
    <div id="app">
        <el-container>
            <el-header style="padding: 0;height: auto;">
                <div>
                    <div class="logoDiv">
                        <img src="https://crypko.ai/static/images/logo-header.png" class="logo-icon">
                        <div class="myTab">
                            <el-button type="text">注册</el-button>
                            <el-button type="text">登录</el-button>
                        </div>
                    </div>
                </div>
            </el-header>
            <router-view></router-view>
            <el-footer style="border-top: solid 1px #e6e6e6;" class="myFooter">
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
                <div>
                    <p>Copyright © 2018 Andoromeda</p>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import api from '@/util/api'

export default {
  name: 'app',
  components: {},
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

<style>
    html,body {
        padding: 0;
        margin: 0;
        background-color: #191428;
    }
    .logo-icon {
        width: 300px;
    }
    .logoDiv {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
    }
    .myTab {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .myFooter {
        display: flex;
        padding: 20px 20px 40px 20px;
        flex-direction: row;
        height: auto!important;
        justify-content: space-between;
        font-size: 14px;
        color: #909399;
    }
    .myFooter p {
        line-height: 14px;
    }
</style>
