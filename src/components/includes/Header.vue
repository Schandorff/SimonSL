<template lang="html">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <router-link :to="{ name: 'index', params: {} }"><span class="mdl-layout-title">SimonSL</span></router-link>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer">
          <breadcrumbs></breadcrumbs>
        </div>
        <!-- Navigation. We hide it in small screens. -->
      </div>
      <a  target="_blank" href="https://github.com/Schandorff"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="Fork me on GitHub"></a>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
