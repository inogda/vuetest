<template>

  <h1>Это страница с ID = пусто{{ $route.params.id }}</h1>

  <div>Параметр в стейте step: {{ $store.state.step }}</div>


  <div class="onboarding-page-container">
    <div class="d-flex justify-content-center">
      <div class="onboarding-steps-component">
        <!---->


        <div ng-version="13.3.11" class="matho-finance-ui">
          <!---->
          <div>
            <div>
              <!---->
              <div>

                  <div>
                    <div class="onboarding-page-container">
                      <div class="d-flex justify-content-center">
                        <div class="onboarding-steps-component">





                          <!---->
                            <div class="separator-40 separator-sm-60"></div>
                            <div class="onboarding-question-container">
                              <div>
                                <div class="detail-question-title"
                                     v-for="item in $store.state.rubric.filter(info => info.level === $store.state.step)"
                                     v-bind:key="item.id"
                                >
                                  <h2 class="onboarding-question-step-title" id="q1_question_finance_type_lbl">
                                    {{ item.title }}
                                  </h2>
                                  {{ item.field }}
                                </div>
                                <!---->
                              </div>
                              <div style="height: 30px;"></div>

                              <tip-0
                                  @selectPoint0="selectPoint"
                              ></tip-0>



                            </div>


                          <div class="onboarding-question-button d-flex justify-content-center"
                               v-for="item in this.$store.state.rubric.filter(info => info.level === this.$store.state.step)"
                               v-bind:key="item.id"
                          >


                            <div id="q1_navigation_next_btn" class="flc-button" v-if="item.select">
                              <button type="button" @click="buttonStep">
                                <div class="flc-button-content"> {{ item.nameB }} </div>
                                <!---->
                              </button>
                            </div>
                            <!---->
                          </div>




                        </div>
                        <!---->
                      </div>






                      <div>
                        <div class="text-center">
                          <!---->
                        </div>
                        <div class="separator-50 separator-sm-140"></div>
                        <!----><!---->
                      </div>




                      <div class="hide-ios-focus" style="height: 80px;"></div>

                        <div class="onboarding-footer">
                          <div class="onboarding-bottom-progress">
                            <div class="progress">
                              <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar" style="width: 0%;"></div>
                            </div>
                            <div class="onboarding-bottom-buttons question-one">
                              <div class="button-previous"><!----></div>
                              <div class="mobile-invisible">
                                <div class="onboarding-bottom-info-center">
                                  <div class="icon-clock">
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19">
          <path class="fill-primary" fill="#2F70E8" fill-rule="nonzero" d="M9.802 11.089c.489-.267.817-.765.817-1.336 0-.57-.328-1.07-.817-1.336v-4.06c0-.421-.365-.773-.816-.773-.454 0-.817.347-.817.774v4.06c-.489.266-.817.764-.817 1.335 0 .57.328 1.07.817 1.336v.975c0 .422.365.773.817.773.453 0 .816-.346.816-.773v-.975zm.804-9.68c4.19.72 7.365 4.182 7.365 8.344 0 4.684-4.023 8.482-8.986 8.482C4.023 18.235 0 14.437 0 9.753 0 5.59 3.176 2.129 7.364 1.409a.785.785 0 0 1-.012-.138c0-.426.362-.771.824-.771h1.618c.456 0 .825.343.825.771a.791.791 0 0 1-.013.138zm-1.62 15.284c4.06 0 7.351-3.107 7.351-6.94s-3.291-6.94-7.351-6.94c-4.06 0-7.352 3.107-7.352 6.94s3.291 6.94 7.352 6.94zM14.922 2.35a.593.593 0 0 1-.002-.874.683.683 0 0 1 .927.001l1.96 1.851c.256.242.259.631.001.874a.683.683 0 0 1-.926-.002l-1.96-1.85z"></path>

                                                                    </svg>
                                                                </span>
                                    <!---->
                                  </div>
                                  <div class="text"> 3 minutes to see my financing options </div>
                                </div>
                              </div>
                              <div class="button-next">
                                <div class="mobile-visible">
                                  <!---->
                                </div>
                              </div>
                            </div>
                          </div>
                          <!---->
                          <div class="fl-footer">
                            <a href="https://www.matho-finance.de/impressum" target="_blank">Terms and Conditions</a>
                            <!---->
                            <a href="https://www.matho-finance.de/impressum" target="_blank">Imprint</a>
                            <!---->
                            <a href="https://www.matho-finance.de/datenschutz" target="_blank">Privacy policy</a>
                            <!----><!---->
                          </div>
                        </div>

                      <!---->
                    </div>
                    <!---->
                  </div>
                  <!----><!---->

                <!---->
              </div>
            </div>
          </div>
          <!---->
        </div>




        <!---->
      </div>
    </div>
  </div>




</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import Tip0 from "@/components/tip0";


export default {
  name: "StepView",
  components: {
    Tip0,
  },
  methods: {
    ...mapMutations({
      setSelectPoint: 'setSelectPoint',
      setStep: 'setStep',
      setButtonStep: 'setButtonStep',
    }),
    ...mapActions({
    }),
    selectPoint(point) {

      this.$store.commit('setSelectPoint', point);

      //this.$router.push(`/step/${point.next}`);
      //console.log(post)
      //this.posts = this.posts.filter(p => p.id !== post.id)
    },
    buttonStep() {
      this.$store.commit('setButtonStep');
    },

  },
  mounted() {
    //console.log(this.$route)
    //alert('-' + this.$route.params.id)
    //this.setStep(`${this.route.params.id}`);
    this.setStep(0);
    //this.$store.commit('setStep', 0)
  },

  computed: {
    ...mapState({

    }),
    ...mapGetters({

    })
  },

}



</script>

<style scoped>
.onboarding-page-container {
  margin:0 auto;max-width:calc(100% - 40px);padding-top:0;box-sizing:border-box;position:relative;min-height:calc(100vh - 170px);
}
.onboarding-page-container {
  min-height:calc(100vh - 80px);display:flex;flex-direction:column;
}
.onboarding-steps-component {
  width:832px;max-width:100%;
}
.onboarding-question-button {
  width: 180px;
  margin: 30px auto;
}




.icon-container object {
  width: 50px;
  height: 50px;
}
.onboarding-bottom-info-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}
.onboarding-bottom-info-center .icon-clock {
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  margin-right: 10px;
}
</style>