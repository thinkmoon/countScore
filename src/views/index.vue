<template>
  <div class="content">
    <div class="justify-center flex"><Button
        type="default"
        size="small"
        @click="changeColor()"
      >
        <Icon type="md-repeat" />交换颜色</Button></div>
    <div class="numberline flex">
      <div class="flex-sub justify-center flex text-l">11. 李勤思</div>
      <div class="flex-sub justify-center flex text-l">13. 梁晓威</div>
    </div>
    <div class="avatarLine">
      <div class="flex-sub justify-center flex">
        <img
          src="../images/head.png"
          alt=""
          style="background-color:#ddd;width:150px;height:150px"
          class="radius"
        >
      </div>
      <div class="flex-sub justify-center flex"> <img
          src="../images/head.png"
          alt=""
          style="background-color:#ddd;width:150px;height:150px"
          class="radius"
        ></div>
    </div>
    <div class="Abstain flex justify-between">
      <Button
        type="error"
        size="small"
      >
        <Icon
          type="ios-flag-outline"
          size="24"
        />弃权</Button>
      <Button
        type="error"
        size="small"
      >
        <Icon
          type="ios-flag-outline"
          size="24"
        />弃权</Button>
    </div>
    <div class="scoreLine margin-top-sm">
      <div class="countScore flex-sub justify-center flex">
        <div
          class="digits"
          :class="color?'black':'red'"
        >
          <div :class="score1 | firstNumber">
            <span class="d1"></span>
            <span class="d2"></span>
            <span class="d3"></span>
            <span class="d4"></span>
            <span class="d5"></span>
            <span class="d6"></span>
            <span class="d7"></span>
          </div>
          <div v-bind:class="score1 | secondNumber">
            <span class="d1"></span>
            <span class="d2"></span>
            <span class="d3"></span>
            <span class="d4"></span>
            <span class="d5"></span>
            <span class="d6"></span>
            <span class="d7"></span>
          </div>
        </div>
      </div>
      <div class="countScore flex-sub justify-center flex">
        <div
          class="digits"
          :class="color?'red':'black'"
        >
          <div :class="score2 | firstNumber">
            <span class="d1"></span>
            <span class="d2"></span>
            <span class="d3"></span>
            <span class="d4"></span>
            <span class="d5"></span>
            <span class="d6"></span>
            <span class="d7"></span>
          </div>
          <div :class="score2 | secondNumber">
            <span class="d1"></span>
            <span class="d2"></span>
            <span class="d3"></span>
            <span class="d4"></span>
            <span class="d5"></span>
            <span class="d6"></span>
            <span class="d7"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="opreatorLine margin-top-sm">
      <div class="flex-sub justify-center flex">
        <Button type="success">犯规0次</Button>
        <Button
          type="primary"
          @click="addScore(0,1)"
        >+1</Button>
        <Button
          type="primary"
          @click="addScore(0,2)"
        >+2</Button>
        <Button
          type="primary"
          @click="addScore(0,3)"
        >+3</Button>
      </div>
      <div class="flex-sub justify-center flex">
        <Button type="success">犯规0次</Button>
        <Button
          type="primary"
          @click="addScore(1,1)"
        >+1</Button>
        <Button
          type="primary"
          @click="addScore(1,2)"
        >+2</Button>
        <Button
          type="primary"
          @click="addScore(1,3)"
        >+3</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: true,
      score1: 0,
      score2: 0
    };
  },
  filters: {
    firstNumber(value) {
      value = value.toString();
      if (value.length < 2) {
        return "c0";
      } else {
        return "c" + value.substr(0, 1);
      }
    },
    secondNumber(value) {
      value = value.toString();
      return "c" + value.substr(-1);
    }
  },
  methods: {
    changeColor() {
      this.color = !this.color;
      console.log(this.color);
    },
    addScore(index, number) {
      if(index == 0) {
        this.score1 += number
      }else{
        this.score2 += number
      }
    }
  }
};
</script>
<style scoped lang="less">
/*-------------------------
	General Styles
--------------------------*/
.content {
  padding-bottom: 32px;
  border: 2px solid #272e38;
  width: 70%;
  margin: auto;
  margin-top: 40px;
  background: url(../images/vs.png) center center no-repeat;
  background-size: 200px 180px;
  background-repeat: no-repeat;
}
.opreatorLine div button {
  margin: 0 4px;
}
/*-------------------------
	The scoreLines
--------------------------*/
.numberLine,
.avatarLine,
.scoreLine,
.opreatorLine {
  display: flex;
  justify-content: space-between;
}

/*-------------------------
	Light color theme
--------------------------*/
// 数字边框
.scoreLine .digits {
  padding: 12px;
  display: flex;
  justify-content: center;
}
.scoreLine .digits.black {
  border: 3px solid #272e38;
}
.scoreLine .digits.red {
  border: 3px solid crimson;
}
.scoreLine .digits.black div span {
  background-color: #272e38;
  border-color: #272e38;
}
.scoreLine .digits.red div span {
  background-color: crimson;
  border-color: crimson;
}
.scoreLine .digits div.dots:before,
.scoreLine .digits div.dots:after {
  background-color: #272e38;
}

/*-------------------------
	The coutBoxs
--------------------------*/

.scoreLine .digits div {
  text-align: left;
  position: relative;
  width: 84px;
  height: 150px;
  display: inline-block;
  margin: 0 12px;
}

.scoreLine .digits div span {
  opacity: 0;
  position: absolute;

  -webkit-transition: 0.25s;
  -moz-transition: 0.25s;
  transition: 0.25s;
}

.scoreLine .digits div span:before,
.scoreLine .digits div span:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 5px solid transparent;
}

.scoreLine .digits .d1 {
  height: 15px;
  width: 48px;
  top: 0;
  left: 18px;
}
.scoreLine .digits .d1:before {
  border-width: 0 15px 15px 0;
  border-right-color: inherit;
  left: -15px;
}
.scoreLine .digits .d1:after {
  border-width: 0 0 15px 15px;
  border-left-color: inherit;
  right: -15px;
}

.scoreLine .digits .d2 {
  height: 15px;
  width: 48px;
  top: 72px;
  left: 18px;
}
.scoreLine .digits .d2:before {
  border-width: 9px 12px 6px;
  border-right-color: inherit;
  left: -24px;
}
.scoreLine .digits .d2:after {
  border-width: 9px 12px 6px;
  border-left-color: inherit;
  right: -24px;
}

.scoreLine .digits .d3 {
  height: 15px;
  width: 48px;
  top: 144px;
  left: 18px;
}
.scoreLine .digits .d3:before {
  border-width: 15px 15px 0 0;
  border-right-color: inherit;
  left: -15px;
}
.scoreLine .digits .d3:after {
  border-width: 15px 0 0 15px;
  border-left-color: inherit;
  right: -15px;
}

.scoreLine .digits .d4 {
  width: 15px;
  height: 42px;
  top: 21px;
  left: 0;
}
.scoreLine .digits .d4:before {
  border-width: 0 15px 15px 0;
  border-bottom-color: inherit;
  top: -15px;
}
.scoreLine .digits .d4:after {
  border-width: 0 0 15px 15px;
  border-left-color: inherit;
  bottom: -15px;
}

.scoreLine .digits .d5 {
  width: 15px;
  height: 42px;
  top: 21px;
  right: 0;
}
.scoreLine .digits .d5:before {
  border-width: 0 0 15px 15px;
  border-bottom-color: inherit;
  top: -15px;
}
.scoreLine .digits .d5:after {
  border-width: 15px 0 0 15px;
  border-top-color: inherit;
  bottom: -15px;
}

.scoreLine .digits .d6 {
  width: 15px;
  height: 42px;
  top: 96px;
  left: 0;
}
.scoreLine .digits .d6:before {
  border-width: 0 15px 15px 0;
  border-bottom-color: inherit;
  top: -15px;
}
.scoreLine .digits .d6:after {
  border-width: 0 0 15px 15px;
  border-left-color: inherit;
  bottom: -15px;
}

.scoreLine .digits .d7 {
  width: 15px;
  height: 42px;
  top: 96px;
  right: 0;
}
.scoreLine .digits .d7:before {
  border-width: 0 0 15px 15px;
  border-bottom-color: inherit;
  top: -15px;
}
.scoreLine .digits .d7:after {
  border-width: 15px 0 0 15px;
  border-top-color: inherit;
  bottom: -15px;
}

/* 1 */

.scoreLine .digits div.c1 .d5,
.scoreLine .digits div.c1 .d7 {
  opacity: 1;
}

/* 2 */

.scoreLine .digits div.c2 .d1,
.scoreLine .digits div.c2 .d5,
.scoreLine .digits div.c2 .d2,
.scoreLine .digits div.c2 .d6,
.scoreLine .digits div.c2 .d3 {
  opacity: 1;
}

/* 3 */

.scoreLine .digits div.c3 .d1,
.scoreLine .digits div.c3 .d5,
.scoreLine .digits div.c3 .d2,
.scoreLine .digits div.c3 .d7,
.scoreLine .digits div.c3 .d3 {
  opacity: 1;
}

/* 4 */

.scoreLine .digits div.c4 .d5,
.scoreLine .digits div.c4 .d2,
.scoreLine .digits div.c4 .d4,
.scoreLine .digits div.c4 .d7 {
  opacity: 1;
}

/* 5 */

.scoreLine .digits div.c5 .d1,
.scoreLine .digits div.c5 .d2,
.scoreLine .digits div.c5 .d4,
.scoreLine .digits div.c5 .d3,
.scoreLine .digits div.c5 .d7 {
  opacity: 1;
}

/* 6 */

.scoreLine .digits div.c6 .d1,
.scoreLine .digits div.c6 .d2,
.scoreLine .digits div.c6 .d4,
.scoreLine .digits div.c6 .d3,
.scoreLine .digits div.c6 .d6,
.scoreLine .digits div.c6 .d7 {
  opacity: 1;
}

/* 7 */

.scoreLine .digits div.c7 .d1,
.scoreLine .digits div.c7 .d5,
.scoreLine .digits div.c7 .d7 {
  opacity: 1;
}

/* 8 */

.scoreLine .digits div.c8 .d1,
.scoreLine .digits div.c8 .d2,
.scoreLine .digits div.c8 .d3,
.scoreLine .digits div.c8 .d4,
.scoreLine .digits div.c8 .d5,
.scoreLine .digits div.c8 .d6,
.scoreLine .digits div.c8 .d7 {
  opacity: 1;
}

/* 9 */

.scoreLine .digits div.c9 .d1,
.scoreLine .digits div.c9 .d2,
.scoreLine .digits div.c9 .d3,
.scoreLine .digits div.c9 .d4,
.scoreLine .digits div.c9 .d5,
.scoreLine .digits div.c9 .d7 {
  opacity: 1;
}

/* 0 */

.scoreLine .digits div.c0 .d1,
.scoreLine .digits div.c0 .d3,
.scoreLine .digits div.c0 .d4,
.scoreLine .digits div.c0 .d5,
.scoreLine .digits div.c0 .d6,
.scoreLine .digits div.c0 .d7 {
  opacity: 1;
}
</style>
