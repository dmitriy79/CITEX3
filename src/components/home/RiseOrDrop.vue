<template>
  <div class="rise">
    <div class="container">
      <div class="rise-list">
        <div class="title">
          <div>涨幅排行榜</div>
        </div>
        <ul>
          <li><i class="ranking">1</i>
            <div class="type">EOS/BTC</div>
            <div class="rate">+30%<i class="ico-uos"></i></div>
          </li>
          <li><i class="ranking">2</i>
            <div class="type">EOS/BTC</div>
            <div class="rate">+20%<i class="ico-uos"></i></div>
          </li>
          <li><i class="ranking">3</i>
            <div class="type">EOS/BTC</div>
            <div class="rate">+10%<i class="ico-uos"></i></div>
          </li>
          <li><i class="ranking">4</i>
            <div class="type">EOS/BTC</div>
            <div class="rate">+10%<i class="ico-uos"></i></div>
          </li>
          <li><i class="ranking">5</i>
            <div class="type">EOS/BTC</div>
            <div class="rate">+10%<i class="ico-uos"></i></div>
          </li>
          <li><i class="ranking">6</i>
            <div class="type">EOS/BTC</div>
            <div class="rate">+10%<i class="ico-uos"></i></div>
          </li>
          <li><i class="ranking">7</i>
            <div class="type">EOS/BTC</div>
            <div class="rate">+10%<i class="ico-uos"></i></div>
          </li>
          <li><i class="ranking">8</i>
            <div class="type">EOS/BTC</div>
            <div class="rate">+10%<i class="ico-uos"></i></div>
          </li>
          <li><i class="ranking">9</i>
            <div class="type">EOS/BTC</div>
            <div class="rate">+10%<i class="ico-uos"></i></div>
          </li>
          <li><i class="ranking">10</i>
            <div class="type">EOS/BTC</div>
            <div class="rate">+10%<i class="ico-uos"></i></div>
          </li>
        </ul>
      </div>
      <div class="rise-list">
        <div class="title">
          <div>跌幅排行榜</div>
        </div>
        <ul>
          <li><i class="ranking">1</i>
            <div class="type">EOS/BTC</div>
            <div class="rate red">-30%<i class="ico-downs"></i></div>
          </li>
          <li><i class="ranking">2</i>
            <div class="type">EOS/BTC</div>
            <div class="rate red">-20%<i class="ico-downs"></i></div>
          </li>
          <li><i class="ranking">3</i>
            <div class="type">EOS/BTC</div>
            <div class="rate red">-10%<i class="ico-downs"></i></div>
          </li>
          <li><i class="ranking">4</i>
            <div class="type">EOS/BTC</div>
            <div class="rate red">-10%<i class="ico-downs"></i></div>
          </li>
          <li><i class="ranking">5</i>
            <div class="type">EOS/BTC</div>
            <div class="rate red">-10%<i class="ico-downs"></i></div>
          </li>
          <li><i class="ranking">6</i>
            <div class="type">EOS/BTC</div>
            <div class="rate red">-10%<i class="ico-downs"></i></div>
          </li>
          <li><i class="ranking">7</i>
            <div class="type">EOS/BTC</div>
            <div class="rate red">-10%<i class="ico-downs"></i></div>
          </li>
          <li><i class="ranking">8</i>
            <div class="type">EOS/BTC</div>
            <div class="rate red">-10%<i class="ico-downs"></i></div>
          </li>
          <li><i class="ranking">9</i>
            <div class="type">EOS/BTC</div>
            <div class="rate red">-10%<i class="ico-downs"></i></div>
          </li>
          <li><i class="ranking">10</i>
            <div class="type">EOS/BTC</div>
            <div class="rate red">-10%<i class="ico-downs"></i></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'RiseOrDrop'
    }
  }
}

</script>
<style lang="less" scoped>
.rise {
  display: flex;
  margin-top: 33px;
  .container {
    display: flex;
    justify-content: space-between;
  }
  &-list {
    width: 48%;
  }
  .ranking {
    background: #d4d5d7;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 2px;
    text-align: center;
    margin-right: 4px;
  }
  &-list {
    width: 50%;
    background: #292F37;
    &:first-child {
      margin-right: 20px;
    }
    .title {
      background: #1f252d;
      height: 40px;
      line-height: 40px;
      div {
        width: 120px;
        text-align: center;
        display: block;
        ;
        color: #fff;
        font-size: 14px;
        background: #292F37;
      }
    }
    ul {
      overflow: hidden;
      padding: 10px 5px 11px 15px;

      li {
        height: 50px;
        width: 48.1%;
        float: left;
        margin: 0 10px 4px 0;
        display: flex;
        align-items: center;
        padding: 0 16px 0 9px;
        font-family: "PingFangSC-Semibold";
        font-size: 14px;
        background: #31373e;
        .type {
          color: #d4d5d7;
          flex: 1;
        }
        .rate {
          color: #1FC56D;
        }
        .red{
              color: #FF6442;
        }
      }
    }
  }
  .list-drop {
    ul {
      li {
        .rate {
          color: #EF6E59;
        }
      }
    }
  }
}

</style>
<style>
@media only screen and (max-width: 1366px) and (min-width: 1300px) {
  .riseOrDrop .list ul li {
    width: 48%!important
  }
}

@media only screen and (max-width: 1300px) {
  .riseOrDrop .list ul li {
    width: 47.9%!important
  }
}

</style>
