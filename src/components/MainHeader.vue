<template>
    <div>
        <div class="line">
            <img style="width: 100%;" src="../assets/line2@2x.png" alt="">
        </div>
        <div class="home-header fixed-width cryptoTab">
            <div style="display: flex;align-items: center">
                <el-menu
                        :default-active="category"
                        mode="horizontal"
                        background-color="#191428"
                        text-color="#BDBDBD"
                        active-text-color="#ffffff"
                        @select="handleSelect">
                    <el-menu-item index="all">全部</el-menu-item>
                    <el-menu-item index="forsale">待出售</el-menu-item>
                    <el-menu-item index="rental">可租赁</el-menu-item>
                    <el-menu-item index="new">最新</el-menu-item>
                </el-menu>
                <div class="c-input">
                    <el-input
                            placeholder="编号、名称、#标签 …"
                            prefix-icon="el-icon-search" clearable>
                    </el-input>
                </div>
            </div>
            <div class="menu-container">
                <div class="menu-btn" :class="{'menu-btn-active': filterActive}" @click="filterActive=!filterActive">
                    <font-awesome-icon :icon="['fas', 'filter']" style="margin-right: 8px;"/>
                    <span>筛选</span>
                </div>
                <div class="menu-btn">
                    <font-awesome-icon :icon="['fas', 'bars']" style="margin-right: 8px;"/>
                    <span>ID降序</span>
                </div>
            </div>
        </div>
        <div v-if="filterActive" class="filterContainer fixed-width">
            <div class="filterRow">
                <span style="margin-right: 10px">头发颜色：</span>
                <span class="a-tag"
                      v-for="(value, key, index) in hairColors"
                      :class="{'a-tag-active': value.active}"
                      :key="index"
                      @click="activeAttr('hairColors', key)">{{value.name}}
                </span>
            </div>
            <div class="filterRow">
                <span style="margin-right: 10px">眼睛颜色：</span>
                <span class="a-tag"
                      v-for="(value, key, index) in eyeColors"
                      :class="{'a-tag-active': value.active}"
                      :key="index"
                      @click="activeAttr('eyeColors', key)">{{value.name}}
                </span>
            </div>
            <div class="filterRow">
                <span style="margin-right: 10px">发型：</span>
                <span class="a-tag"
                      v-for="(value, key, index) in hairStyles"
                      :class="{'a-tag-active': value.active}"
                      :key="index"
                      @click="activeAttr('hairStyles', key)">{{value.name}}
                </span>
            </div>
            <div class="filterRow">
                <span style="margin-right: 10px">特征：</span>
                <span class="a-tag"
                      v-for="(value, key, index) in attributes"
                      :class="{'a-tag-active': value.active}"
                      :key="index"
                      @click="activeAttr('attributes', key)">{{value.name}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'card',
        props: {
            msg: String
        },
        data() {
            return {
                category: 'all',
                hairColors: {
                    blonde: {name: '金色', active: false},
                    brown: {name: '棕色', active: false},
                    black: {name: '黑色', active: false},
                    blue: {name: '蓝色', active: false},
                },
                eyeColors: {
                    brown: {name: '棕色', active: false},
                    black: {name: '黑色', active: false},
                },
                hairStyles: {
                    'long hair': {name: '长', active: false},
                    'short hair': {name: '短', active: false},
                },
                attributes: {
                    'cooldownready': {name: '短', active: false},
                    'dark skin': {name: '黑色肌肤', active: false},
                    'blush': {name: '脸红', active: false},
                    'smile': {name: '微笑', active: false},
                    'open mouth': {name: '张嘴', active: false},
                    'hat': {name: '帽子', active: false},
                    'ribbon': {name: '丝带', active: false},
                    'glasses': {name: '眼镜', active: false},
                },
                filterActive: false
            }
        },
        mounted() {
        },
        methods: {
            handleSelect(key) {
                this.category = key;
                this.getList();
            },
            activeAttr(attr, key) {
                console.log(attr, key);
                this[attr][key].active = !this[attr][key].active
            },
            getList() {}
        }
    }
</script>

<style lang="scss" scoped>
    .a-tag {
        color: rgb(189, 189, 189);
        background-color: $bgColor;
        border: 1px solid rgb(189, 189, 189);
        height: 24px;
        padding: 0 8px;
        line-height: 22px;
        cursor: pointer;
        font-size: 12px;
        box-sizing: border-box;
        white-space: nowrap;
        display: inline-block;
    }
    .a-tag+.a-tag {
        margin-left: 10px;
    }
    .a-tag-active {
        color: #fff;
        background-color: #656DF2;
        border-color: #656DF2;
    }
    .filterRow+.filterRow {
        margin-top: 10px;
    }
    .filterContainer {
        color: #ffffff;
        font-size: 12px;
    }
    .line {
        width: $innerWidth;
        position: absolute;
        top: 9px;
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
    .menu-btn-active, .menu-btn:hover {
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
</style>
