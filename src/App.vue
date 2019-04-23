<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- {{timeCodeData}} -->
    <vue-good-table
      :columns = "tableHead"
      :rows = "timeCodeData" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { VueGoodTable } from 'vue-good-table';

export default {
  name: 'app',
  components: {
    HelloWorld,
    VueGoodTable
  },
  data () {
    return {
      timeCodeData: [],
      tableHead: [
        {
          label: 'Chinese Name',
          field: 'ChineseName'
        }, {
          label: 'English Name',
          field: 'EnglishName'
        }, {
          label: 'Department',
          field: 'department'
        }, {
          label: 'Task Content',
          field: 'Task'
        }, {
          label: 'Id',
          field: '_id'
        }
      ]
    }
  },
  created () {
    // console.log(this.axios)
    this.axios.get('http://10.2.178.174:8001/user').then( data => {

      this.timeCodeData = data.data.data;
      console.log(this.timeCodeData)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
