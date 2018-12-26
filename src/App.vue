<template>
    <div id="app">
        <el-container>
            <el-header class="page-header" style="height: auto;">
                <AppHeader></AppHeader>
            </el-header>
            <router-view></router-view>
            <el-footer style="background-color: #0C071C;height: auto;">
                <AppFooter></AppFooter>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import AppHeader from './components/layout/AppHeader'
    import AppFooter from './components/layout/AppFooter'

    export default {
        name: 'app',
        components: {
            AppHeader,
            AppFooter
        },
        mounted() {
            window.onload = () => {
                if (!window.tronWeb) {
                    this.$notify({
                        title: '提示',
                        message: '请先安装波场钱包插件',
                        duration: 0
                    });
                    this.$store.commit('updateLogin', false)
                } else {
                    console.log(window.tronWeb)
                    if (!window.tronWeb.ready) {
                        this.$notify({
                            title: '提示',
                            message: '波场钱包请先解锁',
                            duration: 0
                        });
                        this.$store.commit('updateLogin', false)
                    } else {
                        this.$store.commit('updateLogin', true)
                        let address = window.tronWeb.defaultAddress.hex;
                        this.API.login({
                            address: address
                        }).then(res => {
                            if (res.code === 0) {
                                this.util.setCookie('access_token', res.data.access_token);
                            }
                        });
                        window.tronWeb.trx.getAccount(address).then((res) => {
                            console.log(res);
                        })
                    }
                }
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    html, body {
        padding: 0;
        margin: 0;
        background-color: $bgColor;
    }
    .page-header {
        position: relative;
        width: $innerWidth;
        margin: 0 auto;
    }
    .fixed-width {
        max-width: $fixedWidth;
        padding: 20px;
        width: 100%;
        margin: 0 auto;

    }
</style>
