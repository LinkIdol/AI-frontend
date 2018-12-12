<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import api from '@/util/api'

export default {
  name: 'app',
  components: {},
  mounted (){
    api.setTronWeb(window.tronWeb)

    api.contract.allOf(1).call().then(resp => {
      console.log(resp)
    })

    api.contract.ownerOf(1).call().then(resp => {
      console.log(resp)
    })

    api.contract.tokenExists(1).call().then(resp => {
      console.log(resp)
    })
  }
}
</script>

<style>
  html,body {
    padding: 0;
    margin: 0;
  }
</style>
