<template>
    <el-main style="padding: 0;">
        <div class="myMenu">
            <el-menu mode="horizontal" style="border-bottom: none;">
                <el-menu-item index="1">全部</el-menu-item>
                <el-menu-item index="2">待出售</el-menu-item>
                <el-menu-item index="3">可租赁</el-menu-item>
                <el-menu-item index="4">最新</el-menu-item>
            </el-menu>
            <el-input style="width: 200px;" size="small" placeholder="编码、名称、#标签..." suffix-icon="el-icon-search"></el-input>
        </div>
        <div class="mainContainer">
            <Card2 style="margin-right: 10rem;"></Card2>
            <Card></Card>
            <Card v-for="(x, i) in cardList" :key="i" class="mycard"></Card>
        </div>
        <div class="my-pagination">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="100"
                    layout="total, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
      <div class="mainContainer">
        <el-card v-for="(x, i) in cardList" :key="i" :body-style="{ padding: '0px' }" class="mycard">
          <div class="imageContainer">
            <img src="https://img.crypko.ai/daisy/03b2239f442b83f6516ead0461328346e1bf3422_sm.jpg" class="image">
          </div>
          <div class="card-below">
            <div>
              <span>{{x.name}}</span>
            </div>
            <div>
              <span >{{x.gen}}</span>
              <span>{{x.num}}</span>
            </div>
          </div>
        </el-card>
      </div>
      <div style="margin-top: 4rem;margin-bottom: 2rem;">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="1"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
        </el-pagination>
      </div>
    </el-main>
</template>

<script>
import Card from '@/components/card'
import Card2 from '@/components/Card2'
import api from '@/util/api'
export default {
    name: 'home',
    components: {
        Card,
        Card2,
    },
    data() {
        return {
            currentPage: 0,
            currentDate: new Date(),
            cardList: []
        }
    },
    methods: {
        handleCurrentChange() {},
    },
    created() {
        
    }
}
</script>
<style scoped>
    .myMenu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: solid 1px #e6e6e6;
        padding: 0 2rem;
    }
    .imageContainer {
        height: 140px;
        width: 140px;
        position: relative;
    }
    .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        z-index: 1;
        transition-duration: .3s;
        transition-property: all;
        transition-timing-function: ease-out;
        transform: translateZ(0);
    }
    .mainContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 20px;
        margin: 0 auto;
        width: 1000px;

    }
    .card-below {
        padding: 6px 10px;
        background-color: rgb(134, 205, 123);
        font-size: 14px;
        color: #fff;
    }
    .mycard {
        margin: 20px 144px 20px 0;
    }
    .mycard:nth-child(4n) {
        margin-right: 0;
    }
    .my-pagination {
        text-align: center;
        margin-bottom: 2rem;
    }
</style>
