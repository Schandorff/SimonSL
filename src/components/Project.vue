<template lang="html">
<div class="innerContainer">
  <div class="content">
    <h1 class="projectTitle">
      {{project.title.rendered}}
    </h1>
    <p v-html="project.content.rendered">

    </p>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
      return {
        project: [],
      }
    },
    created: function() {
    this.getProjectById();
    },
    watch:{
      '$route' (to, from){
        this.getProjectById();
      }
    },
    methods:{
      getProjectById: function(){
        let id = this.$route.params.id;
        axios.get("https://cms.simonsl.dk/wp-json/wp/v2/posts/" + id)
        .then(response => {
          this.project = response.data;
          console.log(this.project);
        })
        .catch(error =>{
          console.log(error);
        })
      }
    }
}
</script>

<style lang="scss">
</style>
