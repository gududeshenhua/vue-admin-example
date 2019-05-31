<template>
  <div class="hello">
    <div>{{$route.params}}</div>
	<router-view></router-view>
	 <Button type="primary">Primary</Button>
  </div>
</template>

<script>
export default { 
  name: 'User',
  data () {
    return { 
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
	  
  },
  created(){
	  console.log(this.$route.params);  
	  
  },
  watch:{
	  '$route'(to,from){
		  //对路由变化做出响应
		  console.log(to);
		  console.log(from);  
	  }
  }
}
</script>
<style scoped>
	.hello{
		background: red; 
	}
h1, h2 {
  font-weight: normal;
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
