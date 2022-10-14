<template>
<!--  <div>Файл tip1.vue</div>-->

  <div class="onboarding-step-input-container">
    <div class="input-label"> Zip code </div>
    <div
        v-click-outside="hideModalZip"

        class="d-flex position-relative"
        style="margin-bottom: 20px;"
    >
      <div class="fl-question-input-zip w-100">
        <div class="input-group-overlay">

          <my-input
              v-on:keyup.enter="submitEnter"
              v-model="this.$store.state.inputZIP"
              v-focus
              :class="totalPages===0||this.$store.state.inputrror ? 'is-invalid' : 'open'"

              type="text"
              class="form-control ng-untouched ng-pristine ng-valid"
              placeholder="Post code (PLZ)"
          />

<!--          class="form-control ng-touched ng-pristine ng-valid "-->

          <!-- Вывод массива городов -->
          <div
              v-if="isModalZipView"

              role="listbox" id="ngb-typeahead-0" class="dropdown-menu show"
              style="position: absolute; top: 0px; left: 0px; will-change: transform; transform: translate(0px, 48px);"
          >
            <!---->
            <template
                v-for="pos in posts" v-bind:key="pos.id"
            >
              <button
                  @click="buttonZip(pos)"
                  v-on:keyup.down="buttonKeyDown(pos)"
                  v-on:keyup.up="buttonKeyUp(pos)"
                  :class="itemActive==pos.id ? 'active' : ''"
                  v-bind:id="'ngb-typeahead-0-' + pos.id"

                  type="button" role="option" class="dropdown-item"
              >
                <div class="mdbPageScroll">
                  <!----><!---->
                  <span class="div">{{ pos.zip }}</span>
                  <!----><!---->, {{ pos.name }}<!----><!----><!---->
                </div>
                <!---->
              </button>
            </template>
            <!---->
          </div>



          <!-- Вывод значка поиск в инпуте -->
          <div class="input-icon input-icon-search">
            <img src="@/assets/icons/icon-search.svg">
          </div>
          <!---->
          <div
              v-if="totalPages===0"

              class="invalid-zip"
          >
            No matching ZIP codes
          </div>
          <!---->
        </div>



      </div>
    </div>
    <div class="input-label"> City </div>
    <input
        v-model="this.$store.state.inputCity"
        v-on:keyup.enter="submitEnter"
        :disabled="totalPages===-1"

        class="form-control ng-untouched ng-pristine ng-valid" id="q1_german_address_txt"
    />
  </div>
</template>

<script>
import {usePosts} from "@/hooks/usePostZip";

//import useSortedPosts from "@/hooks/useUpdatePostZip";


export default {
  name: "tip-1",
  emits: ["selectPoint1"],

  components: {
    //MyInput,
  },
  data() {
    return {
      //dialogVisible: false,
      itemActive: 0,
    }
  },
  setup() {

    const {posts, totalPages, isPostsLoading, isModalZipView, fetching, getPokemonId } = usePosts();

    return {
      posts,
      totalPages,
      isPostsLoading,
      isModalZipView,
      fetching,
      getPokemonId
    }
  },
  methods: {
    //showDialog() { this.dialogVisible = true; },
    //handleFocus() { /* do something here */ },

    hideModalZip() {
      // Клик вне элемента
       this.isModalZipView = false;
    },
    submitEnter() {
      //alert('1cvbcvbvcvh');
    },
    buttonZip(pos) {
      //alert('www'+pos.id);
      this.totalPages = -2;
      this.isModalZipView = false;
      this.itemActive = pos.id;
      this.$store.state.inputCity = pos.name;
      this.$store.state.inputZIP = pos.zip;
      this.$emit('selectPoint1', pos.zip+', '+pos.name);
    },
    buttonKeyDown() {
      if (this.itemActive < this.totalPages) { this.itemActive += 1; }
    },
    buttonKeyUp() {
      if (this.itemActive > 0) { this.itemActive -=1; }
    }

  },
  computed: {
    ctr() { return this.$store.state.inputZIP; }
  },
  watch: {
    ctr(newValue) {
      // Если в переменной пусто то очищаем переменую названия города inputCity в стейте
      if(!newValue){ this.$store.state.inputCity = ''; }
      this.getPokemonId(newValue);
    },
    totalPages(newValue) {
      this.$store.commit('setInputError', newValue);
    }
  },

}
</script>

<style scoped>
.onboarding-step-input-container {
  width: 320px;
  max-width: 100%;
  margin: 0 auto;
}
.input-label {
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  color: #737373;
  margin-bottom: 8px;
  text-align: left;
}
.fl-question-input-zip .dropdown-menu {
  width: 320px;
  transform: translateY(35px)!important;
}
.dropdown-item {
  color: #686d78;
  padding: 11px 20px 14px;
  font-size: 15px;
  font-weight: 600;
}
.dropdown-item:active {
  background-color: #f2f5fa;
  color: #686d78;
}

.dropdown-menu {
  width: 350px;
  padding: 0;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 6px #003fb433;
  background-color: #fff;
  margin-top: 15px;
}

</style>