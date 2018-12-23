<template>
    <el-header class="page-header" style="height: auto;">
        <div class="line">
            <img src="@/assets/line1@2x.png" alt="" style="width: 100%">
        </div>
        <div class="fixed-width logoDiv cryptoTab">
            <router-link to="/">
                <img src="@/assets/CryptoGirls@2x.png" class="logo-icon">
            </router-link>
            <el-menu
                    default-active="1"
                    mode="horizontal"
                    background-color="#191428"
                    text-color="#BDBDBD"
                    active-text-color="#ffffff">
                <el-menu-item index="1">
                    <router-link to="/market">
                        市场
                    </router-link>
                </el-menu-item>
                <!--<el-menu-item index="2">-->
                    <!--<router-link to="/">-->
                        <!--注册-->
                    <!--</router-link>-->
                <!--</el-menu-item>-->
                <el-menu-item index="3">
                    <router-link to="/">
                        登录
                    </router-link>
                </el-menu-item>
            </el-menu>
        </div>
    </el-header>
</template>

<script>
    export default {
        name: 'CryptoHeader',
        data() {
            return {}
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .page-header {
        position: relative;
        width: $innerWidth;
        margin: 0 auto;
    }
    .line {
        position: absolute;
        bottom: 9px;
        right: 0;
        width: 220px;
        z-index: 2;
    }
    .logo-icon {
        width: 180px;
    }
    .logoDiv {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        margin-top: 20px;
    }

    .myTab {
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>
<style>
    .cryptoTab .el-menu-item {
        padding: 0 8px;
        font-size: 15px;
    }
    .el-menu.el-menu--horizontal {
        border-bottom: none!important;
    }
    .el-menu-item.is-active {
        border-bottom-color: #656DF0!important;
    }
    .el-menu--horizontal>.el-menu-item {
        height: 50px!important;
        line-height: 50px!important;
    }
</style>
