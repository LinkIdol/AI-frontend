<template>
    <el-main class="home-page">
        <div class="line">
            <img style="width: 100%;" src="../assets/line2@2x.png" alt="">
        </div>
        <div class="home-header fixed-width cryptoTab">
            <div style="display: flex;align-items: center">
                <el-menu
                        default-active="1"
                        mode="horizontal"
                        background-color="#191428"
                        text-color="#BDBDBD"
                        active-text-color="#ffffff">
                    <el-menu-item index="1">全部</el-menu-item>
                    <el-menu-item index="2">待出售</el-menu-item>
                    <el-menu-item index="3">可租赁</el-menu-item>
                    <el-menu-item index="4">最新</el-menu-item>
                </el-menu>
                <div class="c-input">
                    <el-input
                            placeholder="编号、名称、#标签 …"
                            prefix-icon="el-icon-search" clearable>
                    </el-input>
                </div>
            </div>
            <div class="menu-container">
                <div class="menu-btn">
                    <font-awesome-icon :icon="['fas', 'filter']" style="margin-right: 8px;"/>
                    <span>筛选</span>
                </div>
                <div class="menu-btn">
                    <font-awesome-icon :icon="['fas', 'bars']" style="margin-right: 8px;"/>
                    <span>ID降序</span>
                </div>
            </div>
        </div>
        <div class="fixed-width cardContainer">
            <Card v-for="i in 8" :key="i" class="card"></Card>
        </div>
        <!--<div class="pagination">
            <el-pagination
                    layout="prev, pager, next"
                    :total="50">
            </el-pagination>
        </div>-->
    </el-main>
</template>

<script>
    import Card from '@/components/Card'
    import apis from '@/util/apis'
    export default {
        name: 'home',
        components: {
            Card
        },
        data() {
            return {
                cardList: []
            }
        },
        methods: {},
        created() {
            console.log(this.CONFIG)
            apis.getList({
                page: 1,
                pageSize: 2,
                category: "forsale",
                hairColors: "blonde,brown,black,blue",
                eyeColors: "brown,black",
                hairStyles: "long hair,short hair",
                attributes: "hasname,hasbio,cooldownready,dark skin,blush,smile,open mouth,hat,ribbon,glasses",
                filters: "iteration:1~2,cooldown:ur|ssr|sr|r|n,price:1~2",
                sort: "-id"
            }).then(res => {
                console.log(res);
            })
        }
    }
</script>
<style lang="scss" scoped>
    .card {
        margin-right: 4rem;
        margin-bottom: 4rem;
    }
    .card:nth-child(4n) {
        margin-right: 0;
    }
    .cardContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 3rem auto;
    }

    .line {
        width: $innerWidth;
        position: absolute;
        top: 9px;
    }

    .home-page {
        position: relative;
        width: $innerWidth;
        padding: 0 0 100px 0;
        margin: 0 auto;
    }

    .home-header {
        display: flex;
        flex-direction: row;
        padding: 0 20px;
        align-items: center;
        justify-content: space-between;
    }

    .c-input {
        align-self: stretch;
        display: flex;
        align-items: center;
        margin-left: 40px;
    }
    .menu-container {
        display: flex;
        margin-top: 10px;
    }
    .menu-btn {
        color: #BDBDBD;
        font-size: 15px;
        z-index: 2;
        cursor: pointer;
    }
    .menu-btn:hover {
        color: #fff;
    }
    .menu-btn + .menu-btn {
        margin-left: 20px;
    }
    .filter-icon {
        width: 10px;
        display: inline-block;
        margin-right: 8px;
    }
    .pagination {
        background-color: $bgColor;
        text-align: center;
    }
</style>
<style lang="scss">
    .c-input .el-input__inner {
        background-color: $bgColor;
        border: none;
        color: #ffffff;
    }

    input::-webkit-input-placeholder {
        color: #989898 !important;
    }

    input::-moz-placeholder {
        color: #989898 !important;
    }

    input:-ms-input-placeholder {
        color: #989898 !important;
    }

    .el-input__prefix, .el-input__suffix {
        color: #989898 !important;
    }
    /*.el-pagination .btn-next, .el-pagination .btn-prev {
        background-color: $bgColor;
    }
    .el-pagination button:disabled {
        background-color: $bgColor;
    }
    .el-pager li {
        background-color: $bgColor;
    }*/
</style>
