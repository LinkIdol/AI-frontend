<template>
    <div class="card" v-loading="loading" element-loading-background="rgba(25,20,40, 0.8)">
        <div class="fixed-width" style="display: flex;align-items: center;justify-content: space-between;">
            <!--<button class="idol-button">
                <span>编辑</span>
            </button>-->
            <div>
                <a class="btn btn-plain" @click="showEdit=true">
                    <font-awesome-icon :icon="['far', 'edit']" />
                    <span>编辑</span>
                </a>
            </div>
            <div>
                <a class="btn btn-plain">
                    <span>赠送</span>
                </a>
                <a class="btn btn-plain">
                    <span>购买</span>
                </a>
                <a class="btn btn-plain">
                    <span>卖出</span>
                </a>
            </div>
        </div>
        <div class="detail fixed-width">
            <div class="detail-container">
                <div class="detail-main">
                    <div style="margin-right: 40px;">
                        <div class="share" @click="showShare=true">
                            <span>share</span>
                        </div>
                    </div>
                    <!--<div class="detail-info">-->

                    <!--</div>-->
                    <div style="z-index: 2;display: flex;">
                        <div style="display: inline-block;margin-right: 16px;width: 256px;box-sizing: border-box;">
                            <div style="height: 47px;margin-bottom: 14px;display: flex;align-items: center;justify-content: center;">
                                <span>{{idol.NickName}}</span>
                            </div>
                            <div style="height: 346px;display: flex;flex-direction: column;align-items: center;justify-content: center;">
                                <div class="image-outer">
                                    <img :src="CONFIG.IMG_SERVER+idol.Pic" style="width: 100%;">
                                </div>
                                <div style="margin-top: 20px;">
                                    <span>第{{idol.Genes}}世代#{{idol.TokenId}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="profileBox panel">
                            <div class="idolProfile">
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
                                    <div style="display: flex;flex-wrap: wrap;align-items: flex-start;">
                                        <span class="labelContent" v-for="(item, i) in labels" :key="i">{{item}}</span>
                                        <span v-if="labels.length <= 0">暂无标签~</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>属性</span>
                                    </div>
                                    <div style="display: flex;flex-wrap: wrap;align-items: flex-start;">
                                        <span class="labelContent" v-for="(item, i) in attributes" :key="i">{{item}}</span>
                                        <span class="labelContent">{{idol.HairColor}}</span>
                                        <span class="labelContent">{{idol.HairStyle}}</span>
                                        <span class="labelContent">{{idol.EyeColor}} eye</span>
                                    </div>
                                </div>
                                <div style="display: flex;">
                                    <div style="margin-right: 10px;">
                                        <div>编码</div>
                                        <div>...</div>
                                    </div>
                                    <div>
                                        <div>冷却状态</div>
                                        <div>{{coolDown[idol.Cooldown]}}</div>
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
        <el-dialog title="分享到社交网络" :visible.sync="showShare" width="400px" class="shareDialog">
            <input type="text" class="copyInput" :value="currentHref" readonly="readonly">
            <font-awesome-icon size="lg" class="copyIcon" :icon="['far', 'copy']" @click="copyText"/>
        </el-dialog>
        <el-dialog title="编辑idol" :visible.sync="showEdit" width="350px">
            <el-form label-width="80px">
                <el-form-item label="名称">
                    <el-input v-model="idolName"></el-input>
                </el-form-item>
                <el-form-item label="介绍">
                    <el-input v-model="idolBio" type="textarea" :rows="2"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="showEdit = false">取 消</el-button>
                <el-button type="primary" @click="editIdol">确 定</el-button>
              </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'Card',
        data() {
            return {
                idol: {},
                id: '',
                loading: false,
                showShare: false,
                coolDown: {
                    "4":"Ultra Rapid",
                    "3":"Specially Super Rapid",
                    "2":"Super Rapid",
                    "1":"Rapid",
                    "0":"Normal",
                },
                currentHref: window.location.href,
                showEdit: false,
                idolName: '',
                idolBio: ''
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getDetail();
        },
        methods: {
            async editIdol() {
                this.showEdit = false;
                this.loading = true;
                await this.API.setName({'tokenId': this.id, 'name': this.idolName})
                await this.API.setBio({'tokenId': this.id, 'bio': this.idolBio})
                this.loading = false;
                this.getDetail();
            },
            copyText() {
                let e = document.querySelector('.copyInput');
                e.select();
                document.execCommand('Copy');
                this.$message({
                    message: '复制成功',
                    type: 'success'
                });
            },
            getDetail() {
                this.loading = true;
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
    .profileBox {
        display: inline-block;
        width: 476px;
        padding: 20px;
        box-sizing: border-box;
        height: 407px;
        overflow-y: auto;
    }
    .copyIcon {
        cursor: pointer;
        float: right;
        &:hover {
            color: #656DF0;
        }
    }
    .idolProfile {
        height: 100%;
    }
    .idolProfile>div {
        margin-bottom: 30px;
    }
    .copyInput {
        border: none;
        font-size: 16px;
        color: #606266;
        width: 90%;
        outline: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .labelContent+.labelContent {
        margin-left: 10px;
    }
    .labelContent {
        padding: 2px 8px;
        border: 1px solid #ffffff;
        color: #ffffff;
        line-height: 20px;
        margin-top: 10px;
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
    .panel::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: transparent;
    }
    .panel::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.4);
        border-radius: 3px;
    }
    ::selection {
        background-color: #b3d4fc;
        color: #000;
        text-shadow: none;
    }
    .idol-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        border: none;
        -webkit-appearance: none;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        -webkit-transition: .1s;
        transition: .1s;
        font-weight: 500;
        padding: 10px 20px;
        font-size: 14px;
        color: #fff;
        background: linear-gradient(-45deg, transparent 10px, #333077 0);
        &:hover {
            background: linear-gradient(-45deg, transparent 10px, #656DF2 0);
        }
    }


    .btn {
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        padding: 6px 20px;
        max-width: 160px;
        position: relative;
        text-decoration: none;
        width: 100%;
        background-color: rgba(50,47,98, .5);
    }
    .btn+.btn {
        margin-left: 10px;
    }
    .btn-plain {
        border: 1px solid #333077;
        box-shadow: inset 0 0 20px rgba(101,109,242, 0);
        outline: 1px solid;
        outline-color: rgba(101,109,242, .5);
        outline-offset: 0px;
        text-shadow: none;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
        box-sizing: border-box;
        &:hover {
            border: 1px solid #656DF2;
            box-shadow: inset 0 0 20px rgba(101,109,242, .5), 0 0 20px rgba(101,109,242, .2);
            outline-color: rgba(101,109,242, 0);
            outline-offset: 15px;
            text-shadow: 1px 1px 2px #427388;
        }
    }
</style>