<template>
  <div>
    <h1>issueリスト</h1>
    <!-- getIssue()をクリックイベントに登録する -->
    <el-button type="success" @click="getIssues()">issue取得</el-button>
    <!-- 取得したデータを確認するための暫定要素 -->
    <div>{{ issues }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'IssueList',
  data() {
    return {
      issues: []
    }
  },
  methods: {
    getIssues() {
      axios.get('https://github.com/Lahanatou/Todo-projet/issues',
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'Content-Type':'application/json',
              'Authorization': `token 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`
            },
          },
        )
        .then((res) => {
          this.issues = res;
      })
    }
  }
}
</script>
