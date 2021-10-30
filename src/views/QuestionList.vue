<template>
  <router-link to="/">
    <input type="button" id="back" value="戻る" />
  </router-link>

  <form action="cgi-bin/example.cgi" method="post">
    <input type="search" name="search" placeholder="キーワードを入力" />
    <input type="submit" name="submit" value="検索" />
  </form>
  <div class="search-box">
    <span class="search-box_title">カテゴリ：</span>
    <label
      ><input type="checkbox" name="subject" value="subject01" />二次関数</label
    >
    <label
      ><input type="checkbox" name="subject" value="subject02" />三角関数</label
    >
    <label
      ><input type="checkbox" name="subject" value="subject03" />微分</label
    >
    <label
      ><input type="checkbox" name="subject" value="subject04" />積分</label
    >
  </div>
  <table>
    <tr>
      <th>ユーザーネーム</th>
      <th>分野</th>
      <th>内容</th>
      <th>詳細ページへ</th>
    </tr>
    <tr>
      <td>マコト</td>
      <td>三角関数</td>
      <td>
        問題集を解いていて、わからない問題があったので質問させていただきました。
      </td>
      <td>
        <router-link to="/detail"
          ><button type="button">詳細</button></router-link
        >
      </td>
    </tr>
    <tr>
      <td>Dragon</td>
      <td>積分</td>
      <td>~~~の積分の仕方がわかりません^^;</td>
      <td>
        <router-link to="/detail"
          ><button type="button">詳細</button></router-link
        >
      </td>
    </tr>
    <tr>
      <td>積分キラー</td>
      <td>微分</td>
      <td>
        問題集~~~の123p、(3)がわかりません。解答を読んでも、なぜその公式が使えるのか,
        いまい...
      </td>
      <td>
        <router-link to="/detail"
          ><button type="button">詳細</button></router-link
        >
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'QuestionList',
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
th,
td {
  padding: 5px;
  border: 1px solid #333;
}
th {
  background-color: #2c88d9;
  color: #fff;
}
</style>
