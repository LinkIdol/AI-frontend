<template>
    <div class="card" v-loading="loading" element-loading-background="#191428">
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
                                <span>第{{idol.Genes}}世代</span><!--·Normal冷却状态-->
                            </div>
                            <div style="height: 346px;display: flex;flex-direction: column;align-items: center;justify-content: center;">
                                <div class="image-outer">
                                    <img :src="CONFIG.IMG_SERVER+idol.Pic" style="width: 100%;">
                                </div>
                                <div style="margin-top: 20px;">
                                    <span>{{idol.NickName}}#{{idol.TokenId}}</span>
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
                                        <p>{{idol.Bio || '暂无'}}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>标签</span>
                                    </div>
                                    <div>
                                        <span class="labelContent" v-for="(item, i) in labels" :key="i">{{item}}</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>属性</span>
                                    </div>
                                    <div>
                                        <span class="labelContent" v-for="(item, i) in attributes" :key="i">{{item}}</span>
                                    </div>
                                </div>
                                <div style="display: flex;">
                                    <div style="margin-right: 10px;">
                                        <div>编码</div>
                                        <div>...</div>
                                    </div>
                                    <div>
                                        <div>冷却状态</div>
                                        <div>{{idol.Cooldown}}</div>
                                    </div>
                                </div>
                                <div>
                                    <font-awesome-icon style="cursor: pointer;" :icon="['far', 'heart']" v-if="idol.IsLike === 0" @click="like"/>
                                    <font-awesome-icon style="cursor: pointer;" :icon="['fas', 'heart']" v-if="idol.IsLike === 1" @click="unlike"/>
                                    <span style="margin-left: 10px;">{{idol.LikeCount}}</span>
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
                    <p style="white-space: nowrap;color: #fff;margin-left: 10px;font-size: 14px;line-height: 24px;">所有者：{{idol.UserName}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Card',
        data() {
            return {
                idol: {},
                id: '',
                loading: false
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.loading = true;
            this.getDetail();
        },
        methods: {
            getDetail() {
                this.API.getIdol({tokenId: this.id}).then(res => {
                    this.loading = false;
                    if (res.code === 0) {
                        this.idol = res.data;
                    }
                })
            },
            like() {
                this.API.like({tokenId: this.idol.TokenId}).then(res => {
                    if (res.code === 0) {
                        this.idol.IsLike = 1;
                        this.getDetail();
                    }
                })
            },
            unlike() {
                this.API.unlike({tokenId: this.idol.TokenId}).then(res => {
                    if (res.code === 0) {
                        this.idol.IsLike = 0;
                        this.getDetail();
                    }
                })
            }
        },
        computed: {
            labels() {
                let labels = this.idol.Labels ? this.idol.Labels : '';
                return labels.split(',')
            },
            attributes() {
                let attributes = this.idol.Attributes ? this.idol.Attributes : '';
                return attributes.split(',')
            }
        }
    }
</script>
<style lang="scss" scoped>
    .labelContent+.labelContent {
        margin-left: 10px;
    }
    .image-outer {
        height: 150px;
        width: 150px;
        position: relative;
    }
    .card {
        margin: 15px 0;
        min-height: 400px;
    }

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
