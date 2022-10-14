<template>
  <div>Файл tip0.vue</div>

  <div class="onboarding-step-select-icons-container">
    <div class="row">
      <!---->
      <div
          class="col-12 col-sm-6"
          v-for="point in this.$store.state.points.filter(info => info.level === this.$store.state.step)"
          v-bind:key="point.id"
          @click="$emit('selectPoint0', point)"
      >
        <!---->
        <div class="card border-pastel-blue card-clickable card-select-radio card-select-radio-small mb-0 q1-card" id="q1_answers_new_from_developer_opt">
          <div class="align-items-center card-body d-flex justify-content-between q1-card-body">
            <div class="icon-container sc-iwsKbI lftFIO">
              <div>

                <object :data="`${point.icon}`" type="image/svg+xml"></object>
<!--                <img :src="`${point.icon}`">-->

              </div>
              <!---->
            </div>
            <!---->
            <div class="d-fle justify-content-start w-100 m-l-8">
              <div class="text-card-primary">
                {{ point.title }}
              </div>
            </div>
            <div class="card-icon">
              <div class="fade-in">
                <svg
                  v-if="point.select"

                  xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                  <path fill="currentColor" fill-rule="nonzero" d="M11 0C4.933 0 0 4.933 0 11s4.933 11 11 11 11-4.933 11-11S17.067 0 11 0zm5.865 8.006l-6.246 7.43c-.26.32-.636.492-1.041.492-.405 0-.78-.174-1.042-.491l-3.584-4.28c-.492-.578-.405-1.416.174-1.909.578-.49 1.416-.404 1.908.174l2.544 3.036 5.204-6.187a1.369 1.369 0 0 1 1.909-.174c.578.492.665 1.33.174 1.91z"></path>
                </svg>
              </div>
              <!---->
            </div>
          </div>
          <!---->
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
  name: "tip-0",
  emits: ["selectPoint0"],
}
</script>

<style scoped>
.icon-container object { width: 50px;height: 50px; }
.icon-container img { width: 50px;height: 50px; }
</style>