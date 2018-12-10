<template>
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
        <div class="myMenu">
          <el-menu mode="horizontal" style="border-bottom: none;">
            <el-menu-item index="1">全部</el-menu-item>
            <el-menu-item index="2">待出售</el-menu-item>
            <el-menu-item index="3">可租赁</el-menu-item>
            <el-menu-item index="4">最新</el-menu-item>
          </el-menu>
          <el-input style="width: 200px;" size="small" placeholder="编码、名称、#标签..." suffix-icon="el-icon-search"></el-input>
        </div>
      </div>
    </el-header>
    <el-main>
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
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
        </el-pagination>
      </div>
    </el-main>
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
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      currentDate: new Date(),
      cardList: [
          {
              name: 'Crypko #712044',
              gen: '第14世代 · R',
              num: '71'
          },{
              name: 'Crypko #712044',
              gen: '第14世代 · R',
              num: '71'
          },{
              name: 'Crypko #712044',
              gen: '第14世代 · R',
              num: '71'
          },{
              name: 'Crypko #712044',
              gen: '第14世代 · R',
              num: '71'
          },{
              name: 'Crypko #712044',
              gen: '第14世代 · R',
              num: '71'
          },{
              name: 'Crypko #712044',
              gen: '第14世代 · R',
              num: '71'
          },{
              name: 'Crypko #712044',
              gen: '第14世代 · R',
              num: '71'
          },{
              name: 'Crypko #712044',
              gen: '第14世代 · R',
              num: '71'
          }
      ]
    }
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
  }
  .card-below {
    padding: 6px 10px;
    background-color: rgb(134, 205, 123);
    font-size: 14px;
    color: #fff;
  }
  .mycard {
    margin-right: 4rem;
    margin-bottom: 4rem;
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
