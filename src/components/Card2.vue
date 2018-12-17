<template>
  <div class="card">
    <div class="card-body">
      <div class="heart-icon">
        <font-awesome-icon icon="heart"/>
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
      <span>加入购物车</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
        imgsrc: 'https://img.crypko.ai/daisy/03b2239f442b83f6516ead0461328346e1bf3422_sm.jpg'
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  $border-color: #656DF2;
  $width: 150px;
  .card {
    position: relative;
  }
  .heart-icon {
    padding: 6px 25px 6px 15px;
    position: absolute;
    top: -4px;
    left: -4px;
    z-index: 2;
    background:linear-gradient(-45deg, transparent 10px, $border-color 0);
  }
  .card {
    font-size: 14px;
    color: #fff;
  }
  .body-top {
    background-color: #404040;
    font-size: 12px;
    text-align: right;
    line-height: 18px;
    height: 18px;
    padding: 2px 10px;
  }
  .body-bottom {
    padding: 2px 10px;
    color: #fff;
    line-height: 20px;
    height: 20px;
  }
  .body-middle {
    padding: 2px 10px;
    background:linear-gradient(-45deg, transparent 15px, $border-color 0);
    line-height: 20px;
    height: 20px;
  }
  .card-body {
    box-shadow: 0 0 1px $border-color;
    border: 2px solid $border-color;
  }
  .buy {
    background-color: #0C071D;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    padding: 2px 0;
    width: $width;
    color: #fff;
    box-shadow: 0 0 1px $border-color;
    border: 2px solid $border-color;
    margin-top: 10px;
    cursor: pointer;
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
