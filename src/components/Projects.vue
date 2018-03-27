<template lang="html">
<div class="innerContainer">
  <div class="content">
    <ul class="projectContainer">
    <li v-for="project in projects" v-bind:key="project.id">
      <div class="projectItem">
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div v-bind:style="{ backgroundImage: 'url(' + getImage(project.featured_media) + ')' }" class="mdl-card__title">
          <h2 class="mdl-card__title-text">{{project.title.rendered}}</h2>
        </div>
        <div class="mdl-card__supporting-text" v-html="project.excerpt.rendered">

        </div>
        <div class="mdl-card__actions mdl-card--border">
          <router-link :to='"/project/" + project.id' class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Read more
          </router-link>
        </div>
      </div>
      </div>
    </li>
  </ul>

  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'all-projects',
  data: function(){
    return{
      projects: [],
      img: ""
    }
  },

  created: function() {
      this.getAllProjects()
  },
  methods: {
  getAllProjects: function() {
    axios.get("https://cms.simonsl.dk/wp-json/wp/v2/posts")
      .then(response => {
        this.projects = response.data;
        console.log(this.projects);
      })
      .catch(error =>{
        console.log(error);
      })
  },
  getImage: function(imgApi) {
    axios.get("https://cms.simonsl.dk/wp-json/wp/v2/media/" + imgApi)
    .then(response => {
      this.img = response.data.guid.rendered
    })
    .catch(error =>{
      console.log(error);
    })
    return this.img
  }
}
}
</script>

<style lang="scss">
.projectContainer{
  padding: 0px;
  li{
      list-style-type: none;
      padding-top: 30px;
}
}
.demo-card-wide.mdl-card {
  width: 512px;
}
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
</style>
