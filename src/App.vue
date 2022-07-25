<template>
  <div id="app">
    <DiegoButton />
    <lore-button> Slot </lore-button>
    <lore-button
      text="text"
      :color="green"
    />
  </div>
</template>

<script>
import DiegoButton from './components/Button/index.vue';
import LoreButton from './components/Button/Button.vue';

export default {
  name: 'App',
  components: {
    DiegoButton,
    LoreButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
