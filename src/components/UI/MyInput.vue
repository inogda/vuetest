<template>
  <input
      :value="modelValue"
      @input="updateInput"
      type="text"
  />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
    //value: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
      //this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>
/*
.input {
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 10px;
}

 */
</style>