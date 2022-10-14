<template>
<!--    <div>Файл tipend.vue</div>-->

  <div class="onboarding-step-select-icons-container">
    <div class="row">
      <!---->
      <div
          class="col-12 col-sm-12"
          v-for="point in this.$store.state.selectId"
          v-bind:key="point.id"
      >
        level: {{ point }}


        <div class="d-fle justify-content-start w-100 m-l-8">
          <div class="text-card-primary">
            {{ this.$store.state.rubric[ point ].title }}
          </div>
          <div style="color: green">
            {{ this.$store.state.rubric[ point ].field }}
          </div>
        </div>
        <!----><!---->
      </div>

    </div>
    <!---->
  </div>
  <!----><!----><!----><!----><!----><!----><!---->
</template>

<script>
export default {
name: "tip-end"
}
</script>

<style scoped>

</style>