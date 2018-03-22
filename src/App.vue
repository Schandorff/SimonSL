<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <global-header></global-header>

    <global-nav></global-nav>
    <main class="mdl-layout__content">
      <vue-particles color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.6"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push">
      </vue-particles>
      <div class="page-content">

        <router-view/>


      </div>
    </main>

    <global-footer></global-footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/includes/Header'
import Footer from '@/components/includes/Footer'
import Nav from '@/components/includes/Nav'
export default{
  name: 'App',
  components: {
    'global-header': Header,
    'global-footer': Footer,
    'global-nav': Nav
  }
}
</script>

<style lang="scss">
@import './assets/style';
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css?family=Nunito');
  @import url('https://code.getmdl.io/1.3.0/material.cyan-pink.min.css');
</style>
