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
        },
        methods: {
        },
        created() {
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
