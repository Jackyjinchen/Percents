<template>
  <div class="hello">
    <h1>环形加载进度</h1>
    <percent :percent="percents"></percent>
  </div>
</template>

<script>
import Percent from "./Percent"
export default {
  name: 'HelloWorld',
  components:{Percent},
  data() {
    return {
      percents:0,
      time:null
    } 
  },
  mounted() {
    this.time = setInterval(()=>{
      this.percents+=0.5
      if(this.percents >= 100) this.percents = 0;
    },10)
  },
  beforeDestroy(){
    clearInterval(this.time)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
