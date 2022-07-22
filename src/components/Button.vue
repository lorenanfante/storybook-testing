<template>
  <button class="primary">
    {{ text }}
    <span v-if="isLoading">
      Loading...
    </span>
    <span v-else-if="text">
      {{ text }}
    </span>
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: '',
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
      required: true,
    },
  },

};
</script>

<style>
  .primary{
    background-color: #7432F9;
    padding: 10px;
    color: #FFFFFF;
    font-weight: 500;
    border: none;
    border-radius: 12px;
    font-size: 16px;
  }
</style>
