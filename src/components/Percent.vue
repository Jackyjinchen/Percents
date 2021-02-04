<template>
  <div class="percent">
    <div class="circleProgress_wrapper">
      <div class="wrapper right">
        <div class="circleProgress rightcircle" id="rightcircle"></div>
      </div>
      <div class="wrapper left">
        <div class="circleProgress leftcircle" id="leftcircle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Percent",
  data() {
    return {
      deg: 45,
      time1: null,
      time2: null,
      timedownload: null,
      percent: 0,
    };
  },
  created() {},
  mounted() {
    document.body.style.setProperty("--itemsize", "100px");
    this.timedownloadr();
  },
  methods: {
    timedownloadr() {
      this.timedownload = setInterval(() => {
        var obj1 = document.getElementById("rightcircle");
        var obj2 = document.getElementById("leftcircle");
        if (this.percent <= 50) {
          obj1.style.webkitTransform = `rotate(${
            (180 / 50.0) * this.percent + 45
          }deg)`;
          obj2.style.webkitTransform = `rotate(45deg)`;
        } else {
          obj2.style.webkitTransform = `rotate(${
            (180 / 50.0) * (this.percent - 50) + 45
          }deg)`;
          obj1.style.webkitTransform = `rotate(225deg)`;
        }
        this.percent += 0.2;
        if (this.percent >= 100) this.percent = 0;
        // console.log(this.percent);
      }, 10);
    },
    // timer1() {
    //   this.time1 = setInterval(() => {
    //     var obj = document.getElementsByClassName("rightcircle");
    //     obj.style.webkitTransform = `rotate(${this.deg}deg)`;
    //     this.deg += 0.1;
    //     if (this.deg >= 225) {
    //       clearInterval(this.time1);
    //       this.deg = 45;
    //       this.timer2();
    //     }
    //   }, 0.001);
    // },
    // timer2() {
    //   this.time2 = setInterval(() => {
    //     var obj = document.getElementsByClassName("leftcircle");
    //     obj.style.webkitTransform = `rotate(${this.deg}deg)`;
    //     this.deg += 0.1;
    //     if (this.deg >= 225) {
    //       obj.style.webkitTransform = `rotate(45deg)`;
    //       clearInterval(this.time2);
    //       this.deg = 45;
    //       this.timer1();
    //     }
    //   }, 0.001);
    // },
  },
};
</script>

<style lang="scss" scoped>
body {
  --itemsize: 150px;
}
.percent {
  --color: rgba(0, 0, 0, 0.329);
  .circleProgress_wrapper {
    width: var(--itemsize); //宽度 需设置
    height: var(--itemsize); //高度 需设置
    margin: 50px auto;
    position: relative;
    border-radius: 20%;
    overflow: hidden;
    background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fthumb625.jfcdns.com%2Fn131c32a13713%2F16f6018fedae159e.png&refer=http%3A%2F%2Fthumb625.jfcdns.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614914991&t=3d78d7843067aa584d8eb9059a0c9ec3)
      no-repeat center;
    background-size: var(--itemsize) var(--itemsize); //图片高度 需重设
    .wrapper {
      width: calc(var(--itemsize) / 2); //宽度 需重设
      height: var(--itemsize); //高度 需重设
      position: absolute;
      top: 0;
      overflow: hidden;
    }
    .right {
      right: 0;
    }
    .left {
      left: 0;
    }
    .circleProgress {
      width: 0px;
      height: 0px;
      border: var(--itemsize) solid transparent; //设置其他边的长度 需重设
      position: absolute;
      top: 0;
      -webkit-transform: rotate(45deg);
    }
    .rightcircle {
      //全部参数均需重设
      border-top: var(--itemsize) solid var(--color);
      border-right: var(--itemsize) solid var(--color);
      right: calc(var(--itemsize) / (-2));
      top: calc(var(--itemsize) / (-2));
    }
    .leftcircle {
      //全部参数均需重设
      border-bottom: var(--itemsize) solid var(--color);
      border-left: var(--itemsize) solid var(--color);
      left: calc(var(--itemsize) / (-2));
      top: calc(var(--itemsize) / (-2));
    }

    //   -webkit-animation: circleProgressLoad_right 5s linear infinite;
    // @-webkit-keyframes circleProgressLoad_right {
    //   0% {
    //     -webkit-transform: rotate(45deg);
    //   }
    //   50%,
    //   100% {
    //     -webkit-transform: rotate(225deg);
    //   }
    // }
    // @-webkit-keyframes circleProgressLoad_left {
    //   0%,
    //   50% {
    //     -webkit-transform: rotate(45deg);
    //   }
    //   100% {
    //     -webkit-transform: rotate(225deg);
    //   }
    // }
  }
}
</style>
