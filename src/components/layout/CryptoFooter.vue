<template>
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
</template>

<script>
export default {
  name: 'CryptoFooter',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
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
