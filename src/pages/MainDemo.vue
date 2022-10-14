<template>
  <vue-tel-input :value="phone" @input="onInput"></vue-tel-input>
  <div>{{ phone }}</div>
</template>

<script>
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";
export default {
  name: "MainDemo",
  components: {
    VueTelInput,
  },
  data() {
    return {
      phone: "+79991234567",
    };
  },
  methods: {
    onInput(phone, phoneObject) {
      if (phoneObject?.formatted) {
        this.phone = phoneObject.formatted;
      }
    },
  },
}
</script>

<style scoped>

</style>