<template>
    <div class="detail fixed-width">
        <div class="detail-container">
            <div class="detail-main">
                <div style="margin-right: 40px;">
                    <div class="share">
                        <span>share</span>
                    </div>
                </div>
                <!--<div class="detail-info">-->

                <!--</div>-->
                <div style="z-index: 2;display: flex;">
                    <div style="display: inline-block;margin-right: 16px;width: 256px;box-sizing: border-box;">
                        <div style="height: 47px;margin-bottom: 14px;display: flex;align-items: center;justify-content: center;">
                            <span>第307世代·Normal冷却状态</span>
                        </div>
                        <div style="height: 346px;display: flex;flex-direction: column;align-items: center;justify-content: center;">
                            <img src="https://img.crypko.ai/daisy/03b2239f442b83f6516ead0461328346e1bf3422_sm.jpg" style="width: 150px;height: auto">
                            <div style="margin-top: 20px;">
                                <span>CryptoGirls#712035</span>
                            </div>
                        </div>
                    </div>
                    <div style="display: inline-block;width: 476px;padding: 20px;box-sizing: border-box;">
                        <div style="display: flex;flex-direction: column;justify-content: space-between;height: 100%;">
                            <div>
                                <div>
                                    <span>自我介绍</span>
                                </div>
                                <div>
                                    <p>我是itzik家的MixR9，是MixR系列的第九代试验品，拥有白色的长发和湖蓝色的瞳孔，是人形AI私人助理哦~ 希望以后的生活中可以帮助到你，也希望可以和你好好相处哦~ KIRA~</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>标签</span>
                                </div>
                                <div>
                                    <span style="margin-right: 10px;">#AI</span> <span style="margin-right: 10px;">#MixR系列</span> <span>#个人助理</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>属性</span>
                                </div>
                                <div>
                                    <span style="margin-right: 10px;">白发</span>
                                    <span>蓝眼睛</span>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <div style="margin-right: 10px;">
                                    <div>编码</div>
                                    <div>...</div>
                                </div>
                                <div>
                                    <div>冷却状态</div>
                                    <div>Ready</div>
                                </div>
                            </div>
                            <div>
                                <font-awesome-icon :icon="['far', 'heart']" />
                                <span>173</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-bg">
                    <img src="../assets/detail-bg.png" alt="">
                </div>
            </div>
            <div class="line">
                <img src="../assets/detail-bg2.png" alt="">
                <p style="white-space: nowrap;color: #fff;margin-left: 10px;font-size: 14px;line-height: 24px;">所有者：Itzik</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        data() {
            return {}
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .detail-container {
        position: relative;
    }
    .detail {
        position: relative;
        height: 500px;
    }
    .line {
        width: 600px;
        position: absolute;
        bottom: -80px;
        left: 30px;
        display: flex;
        align-items: flex-end;
    }
    .detail-bg {
        width: 750px;
        position: absolute;
        top: 0;
        right: 0;
    }
    .share {
        color: #656DF0;
        background: url("../assets/share-bg.png") center no-repeat,
                    url("../assets/earth1.png") center center no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 191px;
        height: 155px;
        cursor: pointer;
    }
    .share:hover {
        color: #ffffff;
    }
    .detail-info {
        color: #656DF0;
        background: url("../assets/detail-bg.png");
        width: 787px;
        height: 448px;
    }
    .detail-main {
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 14px;
    }
    .earth-img {
        width: 120px;
    }
    .share-bg {
        width: 160px;
    }
    img {
        width: 100%;
    }
    p {
        margin: 0;
    }
</style>
