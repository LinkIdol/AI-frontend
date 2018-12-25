<template>
    <div>
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
            <div class="langContainer">
                <el-select v-model="lang" placeholder="请选择" @change="langChange">
                    <el-option
                            v-for="item in LangOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="copyRight">
            <span>Copyright © 2018 CryptoGirls Team </span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CryptoFooter',
  data() {
    return {
        LangOptions: [{
            value: 'en',
            label: 'English'
        }, {
            value: 'zh',
            label: '简体中文'
        }, {
            value: 'zh_tw',
            label: '繁體中文'
        }],
        lang: 'zh'
    }
  },
  mounted() {
  },
  methods: {
      langChange(lang) {
          this.$i18n.locale = lang;
      }
  }
}
</script>

<style lang="scss" scoped>
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
<style lang="scss">
    .langContainer .el-input__inner {
        background-color: rgb(12, 7, 28)!important;
        color: #BDBDBD;
        border: none;
    }
    .langContainer .el-select {
        border-bottom: 1px solid #BDBDBD;
    }
</style>
