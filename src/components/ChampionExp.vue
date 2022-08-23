<template>
  <div class="table-wrap">
    <b>미니언 경험치</b>
    <table>
      <thead>
        <tr>
          <th>미니언\팀원</th>
          <th>1명</th>
          <th>2명</th>
          <th>3명</th>
          <th>4명</th>
          <th>5명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>근접</td>
          <td>60.45</td>
          <td>33.25</td>
          <td>22.17</td>
          <td>16.62</td>
          <td>13.3</td>
        </tr>
        <tr>
          <td>원거리</td>
          <td>29.76</td>
          <td>16.37</td>
          <td>10.91</td>
          <td>8.19</td>
          <td>6.55</td>
        </tr>
        <tr>
          <td>대포</td>
          <td>93</td>
          <td>51.15</td>
          <td>34.1</td>
          <td>25.575</td>
          <td>20.46</td>
        </tr>
        <tr>
          <td>수식</td>
          <td>exp=x</td>
          <td>1.1x/2</td>
          <td>1.1x/3</td>
          <td>1.1x/4</td>
          <td>1.1x/5</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="table-wrap">
    <b>챔피언 킬 경험치</b>
    <table>
      <tr>
        <th>1~5렙</th>
        <td>42</td>
        <td>114</td>
        <td>186</td>
        <td>258</td>
        <td>330</td>
      </tr>
      <tr>
        <th>6~10렙</th>
        <td>402</td>
        <td>434.5</td>
        <td>500.5</td>
        <td>515</td>
        <td>590</td>
      </tr>
      <tr>
        <th>11~15렙</th>
        <td>640</td>
        <td>690</td>
        <td>740</td>
        <td>790</td>
        <td>840</td>
      </tr>
      <tr>
        <th>16~18렙</th>
        <td>890</td>
        <td>940</td>
        <td>990</td>
      </tr>
    </table>
    <div class="text-wrap">
      <p>1. 적 챔프와 내 레벨의 차이마다 7%씩 증감함. (최소/최대 20%)</p>
      <p>2. 어시스트는 킬 경험치의 1/n을 획득함</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChampionExp"
}
</script>

<style scoped lang="scss">
.table-wrap{
  width: 520px;
  margin: 80px auto 0 auto;
  padding: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 16px rgba(29, 101, 160, 0.3);

  &:last-child{
    margin-top: 30px;
  }

  b{
    color: #587fda;
  }


  table{
    margin: 20px auto 0 auto;
    tr{
      th, td{
        padding: 5px 10px;
      }
      th{
        font-weight: 400;
        color: #587fda;
      }
    }
  }
  .text-wrap{
    margin-top: 15px;
    font-size: 14px;
    color: #666;
    p{
      margin: 0;
      line-height: 1.75em;
    }
  }
}
</style>