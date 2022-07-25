<template>
  <button
    :class="getBtnClass()"
    @click="clickButton"
  >
    {{ loading ? 'Cargando' : label }}
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      btnTypes: {
        primary: 'btn--primary',
        secondary: 'btn--secondary',
      },
    };
  },
  methods: {
    clickButton() {
      this.$emit('click', 'button clicked');
    },
    getBtnClass() {
      let btnClass = 'btn ';
      btnClass += this.loading ? 'btn--loading ' : '';
      btnClass += this.btnTypes[this.type];
      return btnClass;
    },
  },
};
</script>

<style scoped>
  .btn {
    padding: 10px 20px;
    overflow: hidden;
    border: none;
    background-color: transparent;
    border-radius: 20px;
    cursor: pointer;
  }

  .btn--primary {
    background-color: #FFB800;
  }

  .btn--secondary {
    background-color: #1976D2;
    color: white;
  }

  .btn--loading {
    cursor: initial;
    background-color: #DEE1E6BF;
    color: black;
    pointer-events: none;
  }
</style>
