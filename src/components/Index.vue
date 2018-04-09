<template lang="html">
<div class="innerContainer">
  <div class="content" style="margin-top: 10%;">
    <h1>Simon <span style="color: #33d0de;">Schandorff</span> Larsen</h1>
    <div class="subHeader">
      <router-link :to="{ name: 'projects', params: {} }">Projects</router-link>
      <router-link :to="{ name: 'about', params: {} }">About</router-link>
      <router-link :to="{ name: 'contact', params: {} }">Contact</router-link>

    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$colors: (
  'green': #01FF89,
  'purple': rgb(255,64,129),
  'white': #ffffff
);
.subHeader{
  display: flex;
  justify-content: space-around;
  /*a{
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Roboto';
  }*/
  a {
  overflow: hidden;
  line-height: 30px;
    font-size: 24px;
  position: relative;
  text-decoration: none;
  vertical-align: bottom;

  &:after {
    background: linear-gradient(
      to bottom,
      rgba( map_get($colors, 'white'), 0.8),
      rgba( map_get($colors, 'white'), 0.8)
    ) center 1.08em / 100% 3px no-repeat;

    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 400%;
    will-change: transform;
    z-index: -1;
  }

  &:hover:after {
    animation: underline-gradient 6s linear infinite;
    background-image: linear-gradient(
      90deg,
      rgba( map_get($colors, 'purple'), 0.8) 15%,
      rgba( map_get($colors, 'green'), 0.6) 35%,
      rgba( map_get($colors, 'purple'), 0.8) 85%
    );
  }
}
}

@keyframes underline-gradient {
  0%{
    transform: translate3d(0%, 0%, 0);
  }
  100%{
    transform: translate3d(-75%, 0%, 0);
  }
}
</style>
