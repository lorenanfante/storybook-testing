<template>
  <div id="app">
    <h1>Pelotas</h1>
    <MyButton />
  </div>
</template>

<script>
import MyButton from './components/Button/index.vue';

export default {
  name: 'App',
  components: {
    MyButton,
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
