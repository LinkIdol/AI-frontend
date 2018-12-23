<template>
    <div class="idol">
        <div class="card-body" @click="toDetail">
            <div class="heart-icon-container">
                <font-awesome-icon :icon="['far', 'heart']"/>
            </div>
            <div class="body-top">
                <span>cryptogirls</span>
            </div>
            <div class="image-inner">
                <img :src="imgsrc" class="avatar-img">
            </div>
            <div class="body-middle">
                <span>第14世代 · R</span>
            </div>
            <div class="body-bottom">
                <span>#712044</span>
            </div>
        </div>
        <div class="buy">
            <span>购买</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            idol: {
                type: Object,
                default: function () {
                    return {
                        Bio:"1",
                        BirthTime:0,
                        Cooldown:0,
                        Generation:2,
                        Genes:"0",
                        MatronId:0,
                        NickName:"1",
                        Pic:"/idol/00a1f298bbe0.jpg",
                        SireId:0,
                        TokenId:2,
                        UserId:1
                    }
                }
            }
        },
        data() {
            return {
                imgsrc: 'https://img.crypko.ai/daisy/03b2239f442b83f6516ead0461328346e1bf3422_sm.jpg'
            }
        },
        mounted() {
        },
        methods: {
            toDetail() {
                this.$router.push({
                    path: '/card'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: #656DF2;
    $width: 150px;
    .idol {
        position: relative;
        font-size: 14px;
        color: #fff;
    }

    .heart-icon-container {
        padding: 6px 25px 6px 15px;
        position: absolute;
        top: -4px;
        left: -4px;
        z-index: 2;
        background: linear-gradient(-45deg, transparent 10px, $border-color 0);
    }
    .body-top {
        background-color: #404040;
        font-size: 12px;
        text-align: right;
        padding: 4px 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    .body-bottom {
        padding: 2px 10px;
        color: #fff;
        line-height: 20px;
        height: 20px;
    }

    .body-middle {
        padding: 2px 10px;
        background: linear-gradient(-45deg, transparent 15px, $border-color 0);
        line-height: 20px;
        height: 20px;
    }

    .card-body {
        border: 2px solid $border-color;
        cursor: pointer;
    }
    .card-body:hover {
        box-shadow: 0 0 4px $border-color;
    }

    .buy {
        background-color: #0C071D;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        padding: 2px 0;
        width: $width;
        color: #fff;
        border: 2px solid $border-color;
        margin-top: 10px;
        cursor: pointer;
    }
    .buy:hover {
        box-shadow: 0 0 10px $border-color;
    }

    .image-inner {
        height: $width;
        width: $width;
        position: relative;
    }

    .avatar-img {
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
</style>
