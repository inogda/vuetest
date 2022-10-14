<template>
<!--  <div>Файл tip2.vue</div>-->

  <div class="onboarding-step-input-container">
    <div id="q1_plot_value_txt">

      <div class="input-group input-group-overlay">

        <my-input
            v-model=" this.$store.state.rubric[ this.$store.state.step ].field "
            :class="this.$store.state.inputrror ? 'ng-pristine ng-invalid is-invalid' : 'ng-dirty ng-valid'"
            v-money="money"

            type="tel" step="1" aria-label="Amount"
            class="form-control ng-touched"
            required
        />
        <div class="input-group-append">
          <span class="input-group-text">€</span>
        </div><!----><!----><!---->
      </div>
      <p
          v-if="this.$store.state.inputrror"

          class="color-red fs-12"
      >
        Please enter a value over 0 €
      </p>
      <!----><!---->
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import { VMoney } from "v-money";

export default {
  name: "tip-2",
  emits: ["selectPoint2"],
  components: {
    MyInput
  },
  data () {
    return {
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '€ ',
        suffix: '',
        //suffix: ' #',
        precision: 0,
        masked: false /* doesn't work with directive */
      }
    }
  },
  directives: {money: VMoney},

  computed: {
    ctr() { return this.$store.state.rubric[ this.$store.state.step ].field; }
  },
  watch: {
    ctr(newValue) {
      //alert('ttt'+newValue);
      // Если в переменной пусто то очищаем переменую названия города inputCity в стейте
      if(newValue!='€ 0'){ this.$store.state.inputrror = false; }

    },
  },
}
</script>

<style scoped>
.onboarding-step-input-container {
  width: 320px;
  max-width: 100%;
  margin: 0 auto;
}
</style>