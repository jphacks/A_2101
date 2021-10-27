<template>
  <h1>チャット</h1>
  <!-- 戻るボタン -->
  <input type="button" id="back" value="戻る"/><br><br>

  <!-- チャットボックス -->
  <!-- 2行のテーブルで作ってみました -->
  <!-- 1行目:相手のチャット　2行目:自分のチャット -->
  <div id="scroll">
    <table id="chat" align="center">
      <tr>
        <td></td><td class="me">こんにちは</td>
      </tr>
      <tr>
        <td></td><td class="me">質問があります</td>
      </tr>
      <tr>
        <td class="you">はい、どうぞ</td><td></td>
      </tr>
      <tr>
        <td></td><td class="me">(2)の問題でXXXの公式を使っていますが、その理由がよく分かりません。ご教授いただければ幸いです。</td>
      </tr>
      <tr>
        <td class="you">質問ありがとうございます。XXXの公式は...</td><td></td>
      </tr>
    </table>
  </div>

  <!-- チャットする人の名前 -->
  <!-- 1行目:相手の名前　2行目:自分の名前 -->
  <table id="namespace" align="center">
    <tr>
      <th>tanaka@塾講師</th><th>花子</th>
    </tr>
  </table>
  <br><br>

  <!-- コメント入力フォーム -->
  <form>
    <textarea v-model="message" placeholder="ここにコメントを入力"></textarea><br>
    <input type="submit" value="コメントを送信">
  </form>
</template>

<script>
export default {
  name: "ChatPage"
}
</script>

<style scoped>
*{
  margin-bottom: 5px;
}

textarea {
  resize: none;
  width:410px;
  height:100px;
}

#scroll{
  margin-left: auto;
  margin-right: auto;
  width: 410px;
  height: 200px;
  border: solid;
  border-color: black;
  border-width: 1px;
  overflow-y: scroll;
}

#namespace{
  border: solid;
  border-color: black;
  border-width: 1px;
}

td.me{
  background-color: lightblue;
}

td.you{
  background-color: lightpink;
}

td,th{
  width: 200px;
}
</style>