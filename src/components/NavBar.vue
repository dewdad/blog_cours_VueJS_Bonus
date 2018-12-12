<template>
  <div id="navbar">
    <img src="../assets/apple.jpg">
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  #navbar {
    height: 50px;
    width: 100%;
    background: #fff;
    border-bottom: lightgreen solid 2px;
    box-shadow: 0px 1px 1px lightgray;
  }

  img {
    height: 40px;
    margin: 5px;
  }
</style>
