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
