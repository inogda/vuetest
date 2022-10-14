<template>
  <div class="onboarding-step-input-container">
<!--    <div>Файл tip3.vue</div>-->

    <div>
      <div class="input-group-overlay">
        <select
            v-model="sortType"
            @change="clickSelect(sortType)"

            class="form-control ng-pristine ng-valid ng-touched"
            required
        >
          <option hidden disabled selected>{{ sortType }}</option>
          <option
              v-for="point in this.$store.state.points.filter(info => info.level === this.$store.state.step)"
              v-bind:key="point.id"
              :value="point.title"
          >
            {{ point.title }}
          </option>
          <!---->
        </select>
        <div class="input-icon">
          <img src="@/assets/icons/icon-select-down.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "tip-3",
  data () {
    return {
      sortType: 'Select an option',
    }
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
    }),
    clickSelect(sortType) {
      this.$store.commit('setSelectField', sortType);
    },
  },
  mounted() {
    if(this.$store.state.rubric[ this.$store.state.step ].field!=''){
      this.sortType = this.$store.state.rubric[ this.$store.state.step ].field;
    }
  },


}
</script>

<style scoped>
option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
select.form-control {
  cursor: pointer;
}
.form-control {
  height: 48px;
  font-size: 15px;
  line-height: 18px;
  padding: 15px 20px;
  color: #686d78;
}
.input-group-overlay {
  position: relative;
}
</style>