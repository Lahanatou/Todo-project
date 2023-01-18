<template>
  <div>
    <h1>issueリスト</h1>
    <el-button type="success" @click="getIssues()">issue取得</el-button>
    <el-row :gutter="12">
      <!-- コード1 indexも使用できるように追加 -->
      <el-col :span="12"  v-for="( issue, index ) in issues" :key="issue.id">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
          <el-row :gutter="12">
            <el-col :span="21">{{ issue.title }}</el-col>
            <el-col :span="3">
              <el-button @click="closeIssue(index)" type="success" icon="el-icon-check" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
  <script>
  import axios from 'axios';

  const client = axios.create({
  baseURL: ` https://api.github.com/repos/Lahanatou/Todo-projet`,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type':'application/json',
    //'Authorization': `token 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`
  },
})

  export default {
    name: 'IssueList',
    data() {
      return {
        issues: []
      }
    },
    methods: {
      getIssues() {
      client.get('/issues')
        .then((res) => {
          this.issues = res.data;
      })
    },
    closeIssue(index){
      const target = this.issues[index]
        console.log(`/issues/${target.number}`)
      client.patch(`/issues/${target.number}`,
          {
            state: 'closed'
          },
        )
        .then(() => {
        console.log (target)
          this.issues.splice(index, 1)
      })
    },
    }
  }
  </script>
