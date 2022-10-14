<template>
<!--  <div>Файл tip2.vue</div>-->

  <div class="onboarding-signup-container">
    <div class="flex">
      <div>
        <button class="onboarding-signup-back">
          <span class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15">
    <path class="fill-primary" fill="#2F70E8" fill-rule="nonzero" d="M7.371 0c.218 0 .451.079.622.253.343.347.343.9 0 1.248L2.1 7.504l5.893 5.988c.343.347.343.9 0 1.247a.854.854 0 0 1-1.228 0L.25 8.136A.877.877 0 0 1 0 7.504c0-.237.094-.458.25-.632L6.764.253A.84.84 0 0 1 7.371 0z"></path>
</svg>
          </span>
          <!---->
        </button>
      </div>
      <div class="onboarding-signup-title">
        Digitaler Zugang zu Ihrer Immobilienfinanzierung
      </div>
    </div>



    <div class="onboarding-signup-flex">

      <form
          @submit.prevent="handleSubmit"

          class="inputs-container"
      >
        <div class="row">
          <div class="col">
            <div class="onboarding-question-container field-title">
              <div class="onboarding-question-title">
                Anrede
              </div>
              <div class="input-group-overlay">

                <select
                    v-model="anrede.value"
                    @change="clickSelect(anrede.value)"
                    :class="!anrede.valid ? 'is-invalid' : ''"

                    class="form-control ng-pristine ng-valid ng-touched"
                >
                  <option hidden disabled selected></option>
                  <option value="male">Herr</option>
                  <option value="female">Frau</option>
                </select>
                <div class="input-icon">
                  <img src="@/assets/icons/icon-select-down.svg">
                </div>
              </div>
              <p
                  v-if="!anrede.valid"

                  class="color-red fs-12">Bitte geben Sie einen gültigen Wert ein</p>
              <!---->
            </div>
            <div class="onboarding-question-container field-first-name">
              <div class="onboarding-question-title">
                Vorname
              </div>

              <div style="width: 100%;" class="ng-untouched ng-pristine ng-invalid" required>

                <input
                    v-model="vorname.value"
                    @blur="focusOutText('vorname')"
                    :class="!vorname.valid ? 'is-invalid' : ''"

                    class="form-control ng-untouched ng-pristine ng-invalid"
                    type="text"
                    placeholder
                    required
                />
                <p
                    v-if="!vorname.valid"

                    class="color-red fs-12"
                >
                  Bitte geben Sie einen gültigen Wert ein
                </p>
                <!---->
              </div>
            </div>
            <div class="onboarding-question-container field-last-name">
              <div class="onboarding-question-title">
                Nachname
              </div>
              <div style="width: 100%;" class="ng-untouched ng-pristine ng-valid">
                <input

                    v-model="nachname.value"
                    @blur="focusOutText('nachname')"
                    :class="!nachname.valid ? 'is-invalid' : ''"

                    class="form-control ng-untouched ng-pristine ng-invalid"
                    type="text"
                    placeholder
                    required
                />
                <p
                    v-if="!nachname.valid"

                    class="color-red fs-12"
                >
                  Bitte geben Sie einen gültigen Wert ein
                </p>
                <!---->
              </div>
            </div>
          </div>
        </div>
        <div class="onboarding-question-container clear-left">
          <div class="onboarding-question-title" style="float: left">
            Email
          </div>

          <div style="width: 100%;" class="ng-untouched ng-pristine ng-invalid" required>
            <input
                v-model="email.value"
                :class="!email.valid ? 'is-invalid' : 'ng-dirty ng-valid'"
                @blur="focusOutEmail"

                class="form-control ng-untouched ng-pristine ng-invalid"
                type="email"
                placeholder
                required
            />
            <p
                v-if="!email.valid"

                class="color-red fs-12"
            >
              Bitte geben Sie einen gültigen Wert ein
            </p>
            <!---->
          </div>
          <!---->
        </div>
        <div class="onboarding-question-container clear-left mb-3">
          <div class="onboarding-question-title" style="float: left">
            Telefonnummer
          </div>

          <div style="width: 100%;" class="ng-untouched ng-pristine ng-invalid" required>

            <div
                id="ngx-intl-tel-input"
                cssclass="form-control"
                required
                class="ng-invalid ng-dirty ng-touched"
            >

              <div
                  v-bind:style="!phone.valid ? 'border: 1px solid #fd6565;' : 'border: none;' "

                  class="iti iti--allow-dropdown"
              >

                <vue-tel-input
                    v-model="phone.value"
                    @blur="focusOutPhone"
                    :value="phone.value"
                    @input="onInput"
                    v-bind="bindProps"
                />

              </div>
            </div>
            <p
                v-if="!phone.valid"

                class="color-red fs-12">Bitte geben Sie eine gültige Telefonnummer an (z.B. +49 171 123 45678)</p>
            <!---->
          </div>
        </div>
        <div class="onboarding-consent-flex">

          <input

              v-model="checkboxPolicy.value"
              @click="checkboxClickPolicy"
              v-bind:style="checkboxPolicy.value ? 'background-image: url(https://matho-finance.finlink.de/assets/icons/icon-checkbox.svg);' : '' "

              icon="https://matho-finance.finlink.de/assets/icons/icon-check.svg"
              type="checkbox"
              class="form-check-input checkbox-consent ng-valid ng-dirty ng-touched"
          />

          <p class="onboarding-terms">
            <span class="onboarding-terms-link">
              Ich bin mit den allgemeinen
              <a href="https://www.matho-finance.de/impressum" target="_blank"> Geschäftsbedingungen </a>
              einverstanden.
            </span><!----><!----><!---->
            <span class="onboarding-terms-link">
              Ich nehme die
              <a href="https://www.matho-finance.de/datenschutz" target="_blank"> Datenschutzerklärung </a>
              zur Kenntnis
            </span><!---->
            <br />
            <span
                v-if="!checkboxPolicy.valid"

                class="color-red fs-12">
              Bitte akzeptieren Sie die allgemeinen Geschäftsbedingungen und Datenschutzerklärung
            </span>
          </p>
        </div>
        <!---->
        <div class="onboarding-consent-flex">
          <input
              v-model="checkboxContact.value"
              @click="checkboxClickContact"
              v-bind:style="checkboxContact.value ? 'background-image: url(https://matho-finance.finlink.de/assets/icons/icon-checkbox.svg);' : '' "

              icon="https://matho-finance.finlink.de/assets/icons/icon-check.svg"
              type="checkbox"
              class="form-check-input checkbox-consent ng-untouched ng-pristine ng-valid"
          >
          <p class="onboarding-terms"> Ja, mein Berater darf mich telefonisch kontaktieren. Eine optimale Angebotserstellung und/oder Beratung ist nur dann möglich, wenn der für Sie zuständige Finanzierungsberater mit Ihnen Rücksprache halten kann.
            <br >
            <span
                v-if="!checkboxContact.valid"

                class="color-red fs-12"
            >
              Bitte akzeptieren Sie die Beratervereinbarung
            </span>
            <!---->
          </p>
        </div>
        <!----><!---->
        <div>
          <div class="w-full flc-button">
            <button
                @click="validateSubmit"

                type="submit"
            >
              Fortschritt speichern
            </button>
          </div>
        </div>
      </form>

      <div class="badges-container">
        <div class="badge-element m-b">
          <div class="icon">
            <span class="mr-2">
              <svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg">

                <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
                <title>icon-vault</title>
                <desc>Created with Sketch.</desc>
                <g id="Questionnaire-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Question-Sign-Up---Phone-number-Copy" transform="translate(-760.000000, -282.000000)" fill="#2F70E8" fill-rule="nonzero">
                        <g id="np_vault_774199_449FC8" transform="translate(760.000000, 282.000000)">
                            <path class="fill-primary" d="M6.30069469,5 C6.12942285,5.03869267 5.99570843,5.20686255 6.0001054,5.38098339 L6.0001054,34.3357213 C6.0001054,34.5351432 6.18350708,34.7167047 6.3848287,34.7167047 L9.84634223,34.7167047 L9.84634223,36.6216216 L10.6155675,36.6216216 L10.6155675,34.7167047 L31.3846486,34.7167047 L31.3846486,36.6216216 L32.1538739,36.6216216 L32.1538739,34.7167047 L35.6153874,34.7167047 C35.816709,34.7167047 36,34.5351432 36,34.3357213 L36,5.38098339 C36,5.18156145 35.816709,5 35.6153874,5 L6.30059854,5 L6.30069469,5 Z M6.76946055,5.76196679 L35.230794,5.76196679 L35.230794,33.9547379 L6.76946055,33.9547379 L6.76946055,5.76196679 Z M10.1468208,8.80983393 C9.97554899,8.8485266 9.84183457,9.01669648 9.84634223,9.19081732 L9.84634223,13.3816346 L8.69250439,13.3816346 L8.69250439,14.1436014 L9.84634223,14.1436014 L9.84634223,25.5731032 L8.69250439,25.5731032 L8.69250439,26.33507 L9.84634223,26.33507 L9.84634223,30.5258873 C9.84634223,30.7253093 10.0296332,30.9068707 10.2309548,30.9068707 L31.7692612,30.9068707 C31.9705829,30.9068707 32.1538739,30.7253093 32.1538739,30.5258873 L32.1538739,9.19081732 C32.1538739,8.99139538 31.9705829,8.80983393 31.7692612,8.80983393 L10.1467247,8.80983393 L10.1468208,8.80983393 Z M10.6155867,9.57180072 L31.3846679,9.57180072 L31.3846679,30.1449039 L10.6155867,30.1449039 L10.6155867,26.33507 L11.7694245,26.33507 L11.7694245,25.5731032 L10.6155867,25.5731032 L10.6155867,14.1436014 L11.7694245,14.1436014 L11.7694245,13.3816346 L10.6155867,13.3816346 L10.6155867,9.57180072 Z M17.9232264,16.0485184 C15.803357,16.0485184 14.0651772,17.7584862 14.0651772,19.8583523 C14.0651772,21.9582185 15.8034339,23.6562996 17.9232264,23.6562996 C20.0430188,23.6562996 21.7693525,21.9582566 21.7693525,19.8583523 C21.7693525,17.7584481 20.0430957,16.0485184 17.9232264,16.0485184 Z M28.3077669,16.0485184 L28.3077669,23.6681863 L29.0769922,23.6681863 L29.0769922,16.0485184 L28.3077669,16.0485184 Z M17.9232264,16.7985985 C19.6269449,16.7985985 20.9881274,18.1707483 20.9881274,19.8583523 C20.9881274,21.5459564 19.6269449,22.9062195 17.9232264,22.9062195 C16.2195079,22.9062195 14.8463254,21.5459945 14.8463254,19.8583523 C14.8463254,18.1707102 16.2195079,16.7985985 17.9232264,16.7985985 Z M17.9232264,18.3344188 C17.0773863,18.3344188 16.3847759,19.0204937 16.3847759,19.8583523 C16.3847759,20.696211 17.0773863,21.3822859 17.9232264,21.3822859 C18.7690664,21.3822859 19.4616768,20.696211 19.4616768,19.8583523 C19.4616768,19.0204937 18.7690664,18.3344188 17.9232264,18.3344188 Z M17.9232264,19.0963855 C18.3529156,19.0963855 18.6924516,19.4327215 18.6924516,19.8583523 C18.6924516,20.2839832 18.3529117,20.6203191 17.9232264,20.6203191 C17.493541,20.6203191 17.1540011,20.2839832 17.1540011,19.8583523 C17.1540011,19.4327215 17.493541,19.0963855 17.9232264,19.0963855 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
              </svg>
            </span>
            <!---->
          </div>
          <div >
            <div class="title"> Persönlicher Bereich </div>
            <div class="text"> Beste Technologie und Beratung </div>
          </div>
        </div>
        <div class="badge-element m-b">
          <div class="icon">
            <span class="mr-2">
              <svg width="42px" height="43px" viewBox="0 0 42 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
                <title>icon-options</title>
                <desc>Created with Sketch.</desc>
                <g id="Questionnaire-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Question-Sign-Up---Phone-number-Copy" transform="translate(-760.000000, -372.000000)" fill="#2F70E8" fill-rule="nonzero">
                        <g id="icon-options" transform="translate(759.500000, 372.000000)">
                            <path class="fill-primary" d="M5.98,10 L13.33,10 C13.8712391,10 14.31,10.4387609 14.31,10.98 L14.31,18.33 C14.31,18.8712391 13.8712391,19.31 13.33,19.31 L5.98,19.31 C5.43876095,19.31 5,18.8712391 5,18.33 L5,10.98 C5,10.4387609 5.43876095,10 5.98,10 Z M5.98,10.637 C5.79056633,10.637 5.637,10.7905663 5.637,10.98 L5.637,18.33 C5.637,18.5194337 5.79056633,18.673 5.98,18.673 L13.33,18.673 C13.5194337,18.673 13.673,18.5194337 13.673,18.33 L13.673,10.98 C13.673,10.7905663 13.5194337,10.637 13.33,10.637 L5.98,10.637 Z" id="Rectangle-12"></path>
                            <path class="fill-primary" d="M5.98,23.72 L13.33,23.72 C13.8712391,23.72 14.31,24.1587609 14.31,24.7 L14.31,32.05 C14.31,32.5912391 13.8712391,33.03 13.33,33.03 L5.98,33.03 C5.43876095,33.03 5,32.5912391 5,32.05 L5,24.7 C5,24.1587609 5.43876095,23.72 5.98,23.72 Z M5.98,24.357 C5.79056633,24.357 5.637,24.5105663 5.637,24.7 L5.637,32.05 C5.637,32.2394337 5.79056633,32.393 5.98,32.393 L13.33,32.393 C13.5194337,32.393 13.673,32.2394337 13.673,32.05 L13.673,24.7 C13.673,24.5105663 13.5194337,24.357 13.33,24.357 L5.98,24.357 Z" id="Rectangle-12-Copy"></path>
                            <path class="fill-primary" d="M19.0109375,13.8665 L37.0490625,13.8665 C37.2249652,13.8665 37.3675625,13.6426424 37.3675625,13.3665 C37.3675625,13.0903576 37.2249652,12.8665 37.0490625,12.8665 L19.0109375,12.8665 C18.8350348,12.8665 18.6924375,13.0903576 18.6924375,13.3665 C18.6924375,13.6426424 18.8350348,13.8665 19.0109375,13.8665 Z" id="Line-2"></path>
                            <path class="fill-primary" d="M19.0109375,27.0965 L37.0490625,27.0965 C37.2249652,27.0965 37.3675625,26.8726424 37.3675625,26.5965 C37.3675625,26.3203576 37.2249652,26.0965 37.0490625,26.0965 L19.0109375,26.0965 C18.8350348,26.0965 18.6924375,26.3203576 18.6924375,26.5965 C18.6924375,26.8726424 18.8350348,27.0965 19.0109375,27.0965 Z" id="Line-2-Copy-2"></path>
                            <path class="fill-primary" d="M19.0036842,17.7865 L29.2163158,17.7865 C29.3922185,17.7865 29.5348158,17.5626424 29.5348158,17.2865 C29.5348158,17.0103576 29.3922185,16.7865 29.2163158,16.7865 L19.0036842,16.7865 C18.8277815,16.7865 18.6851842,17.0103576 18.6851842,17.2865 C18.6851842,17.5626424 18.8277815,17.7865 19.0036842,17.7865 Z" id="Line-2-Copy"></path>
                            <path class="fill-primary" d="M19.0036842,31.5065 L29.2163158,31.5065 C29.3922185,31.5065 29.5348158,31.2826424 29.5348158,31.0065 C29.5348158,30.7303576 29.3922185,30.5065 29.2163158,30.5065 L19.0036842,30.5065 C18.8277815,30.5065 18.6851842,30.7303576 18.6851842,31.0065 C18.6851842,31.2826424 18.8277815,31.5065 19.0036842,31.5065 Z" id="Line-2-Copy-3"></path>
                            <polygon class="fill-primary" id="Path-14" points="8.12889484 14.0135609 7.75110516 14.5264391 10.8204905 16.7873703 16.0031755 11.6972332 15.5568245 11.2427668 10.7613276 15.9526297"></polygon>
                        </g>
                    </g>
                </g>
              </svg>
            </span>
            <!---->
          </div>
          <div >
            <div class="title">Zugriff auf Angebote</div>
            <div class="text">Vergleichen Sie alle</div>
            <div class="text">Finanzierungsoptionen </div>
          </div>
        </div>
        <div class="badge-element m-b">
          <div class="icon">
            <span class="mr-2">
              <svg width="42px" height="43px" viewBox="0 0 42 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
                <title>icon-lock</title>
                <desc>Created with Sketch.</desc>
                <g id="Questionnaire-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Question-Sign-Up---Phone-number-Copy" transform="translate(-760.000000, -464.000000)" fill="#2965E5" fill-rule="nonzero">
                        <g id="Group-4" transform="translate(760.000000, 464.000000)">
                            <g id="np_lock_1603410_2965E5">
                                <path class="fill-primary" d="M20.9513248,4 C16.392066,4 12.7095727,7.71944631 12.7095727,12.3246336 L12.7095727,16.685156 L9.96232194,16.685156 C8.88151426,16.685156 8,17.5755351 8,18.6672117 L8,33.7308344 C8,34.822511 8.88151426,35.7128901 9.96232194,35.7128901 L31.9403277,35.7128901 C33.0211353,35.7128901 33.9026496,34.822511 33.9026496,33.7308344 L33.9026496,18.6672117 C33.9026496,17.5755351 33.0211353,16.685156 31.9403277,16.685156 L29.1930769,16.685156 L29.1930769,12.3246336 C29.1930769,7.7195256 25.5106621,4 20.9513248,4 Z M20.9513248,4.79282225 C25.0890768,4.79282225 28.4081482,8.14527114 28.4081482,12.3246336 L28.4081482,16.685156 L13.4945014,16.685156 L13.4945014,12.3246336 C13.4945014,8.14527114 16.8135728,4.79282225 20.9513248,4.79282225 Z M9.96232194,17.4779783 L31.9403277,17.4779783 C32.5995501,17.4779783 33.1177208,18.0013599 33.1177208,18.6672117 L33.1177208,33.7308344 C33.1177208,34.3966862 32.5995501,34.9200678 31.9403277,34.9200678 L9.96232194,34.9200678 C9.30309951,34.9200678 8.78492878,34.3966862 8.78492878,33.7308344 L8.78492878,18.6672117 C8.78492878,18.0013599 9.30309951,17.4779783 9.96232194,17.4779783 Z M20.9513248,21.4420895 C19.4381784,21.4420895 18.2040741,22.6886043 18.2040741,24.2169674 C18.2040741,24.9540543 18.5229514,25.5904527 18.9890029,26.0875522 L18.9890029,28.9739009 C18.9890029,30.0655775 19.8705171,30.9559566 20.9513248,30.9559566 C22.0321325,30.9559566 22.9136467,30.0655775 22.9136467,28.9739009 L22.9136467,26.0875522 C23.3796982,25.5904923 23.6985755,24.9540543 23.6985755,24.2169674 C23.6985755,22.6886043 22.4644713,21.4420895 20.9513248,21.4420895 Z M20.9513248,22.2349118 C22.0397855,22.2349118 22.9136467,23.1175608 22.9136467,24.2169674 C22.9136467,24.8054001 22.6652914,25.3272357 22.2636472,25.6911411 C22.1793302,25.7654682 22.1287376,25.8754089 22.1287376,25.9884495 L22.1287376,28.9739009 C22.1287376,29.6397527 21.6105669,30.1631343 20.9513444,30.1631343 C20.292122,30.1631343 19.7739513,29.6397527 19.7739513,28.9739009 L19.7739513,25.9884495 C19.7739513,25.8754089 19.7233587,25.7654682 19.6390416,25.6911411 C19.2373936,25.3272476 18.9890421,24.8054001 18.9890421,24.2169674 C18.9890421,23.1175608 19.8629033,22.2349118 20.951364,22.2349118 L20.9513248,22.2349118 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
              </svg>
            </span>
            <!---->
          </div>
          <div>
            <div class="title"> Hoher Datenschutzstandard </div>
            <div class="text"> 256 Bit Sicherheitstechnologie </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";

// eslint-disable-next-line no-undef
let emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;


export default {
  name: "tip-4",
  components: {
    VueTelInput,
  },
  data() {
    return {

      data: [],

      validate: true,

      //checkboxPolicy: false,
      //checkboxContact: false,

      checkboxPolicy:  { value: false, valid: true },
      checkboxContact: { value: false, valid: true },
      anrede:   { value: "", valid: true },
      nachname: { value: "", valid: true },
      vorname:  { value: "", valid: true },
      email:    { value: "", valid: true },
      phone:    { value: "", valid: true },


      bindProps: {
        mode: "international",
        //defaultCountry: "DE",
        dynamicPlaceholder: false,
        preferredCountries: ["DE"], //Список предпочтительных стран будет в верхней части раскрывающегося списка.
        disabledFetchingCountry: false, //Отключить получение текущей страны на основе IP-адреса пользователя
        disabled: false,
        disabledFormatting: false, //Отключить форматирование номера телефона на входе
        placeholder: "Enter44 a phone number", ///Заполнитель для ввода
        required: false,
        enabledCountryCode: false, //Включить код страны во вводе
        enabledFlags: true, //Включить флаги на входе

        onlyCountries: [],    //Список стран будет показан в раскрывающемся списке. то есть['AU', 'BR']
        ignoredCountries: [], //Список стран НЕ будет отображаться в раскрывающемся списке. то есть['AU', 'BR']
        autocomplete: "off",
        name: "telephone",
        maxLen: 10, //Собственный входной атрибут maxlength
        wrapperClasses: "",
        inputClasses: "",

      }
    };
  },
  methods: {

    validateSubmit() {
      this.validate = true;
      this.clickSelect();
      this.focusOutText('nachname');
      this.focusOutText('vorname');
      this.focusOutEmail();
      this.focusOutPhone();
      this.checkboxClickContact();
      this.checkboxClickPolicy();


      //alert(this.validate);
      if(this.validate==true){

        this.data = {
          anrede: this.anrede.value,
          vorname: this.vorname.value,
          nachname: this.nachname.value,
          email: this.email.value,
          phone: this.phone.value,
        };

        this.$store.commit('setSelectPoint1', JSON.stringify(this.data) );
        //alert(this.$store.state.rubric[ 13 ].field);
      }

    },

    handleSubmit() {
      //alert('Submit');
      //setTimeout(() => { this.submitted = true; }, 100);
    },

    clickSelect() {
      //alert(this.anrede.value);
      if(this.anrede.value){ this.anrede.valid = true; }else{ this.anrede.valid = false; this.validate = false; }
    },

    focusOutEmail() {
      this.email.valid = this.isEmail(this.email.value) ? true : false;
      if(this.email.valid==false) { this.validate = false; }
    },
    // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    },
    focusOutText(name) {
      if(name=='nachname'){
        if(this.nachname.value.length>=3){ this.nachname.valid = true;
        }else{ this.nachname.valid = false; this.validate = false; }
        //alert(this.nachname.value.length)
      }
      if(name=='vorname'){
        if(this.vorname.value.length>=3){ this.vorname.valid = true;
        }else{ this.vorname.valid = false; this.validate = false; }
      }
    },
    focusOutPhone() {
      //alert(this.phone.value);
      if(this.phone.value.length>=3){ this.phone.valid = true; }else{ this.phone.valid = false; this.validate = false; }
    },
    checkboxClickContact() {
      if(this.checkboxContact.value!=this.checkboxContact.valid) {
        this.checkboxContact.valid = false;
      }else{
        if(this.checkboxContact.value==true) { this.checkboxContact.valid=false; }else{ this.checkboxContact.valid=true; }
      }
    },
    checkboxClickPolicy() {
      if(this.checkboxPolicy.value!=this.checkboxPolicy.valid) {
        this.checkboxPolicy.valid=false;
      }else{
        if(this.checkboxPolicy.value==true) { this.checkboxPolicy.valid=false; }else{ this.checkboxPolicy.valid=true; }
      }

    },

    onInput(phone, phoneObject) {
      if (phoneObject?.formatted) {
        this.phone.value = phoneObject.formatted;
      }
    },
  },
  mounted() {
    // Заполняем поля формы если в стейте уже есть
    if(this.$store.state.rubric[ this.$store.state.step ].field.length) {
      this.data = JSON.parse(this.$store.state.rubric[ this.$store.state.step ].field);
      this.anrede.value = this.data.anrede;
      this.vorname.value = this.data.vorname;
      this.nachname.value = this.data.nachname;
      this.email.value = this.data.email;
      this.phone.value = this.data.phone;
      this.checkboxPolicy.value = true;
      this.checkboxContact.value = true;
      //alert(this.phone.value);
    }
  },

}
</script>

<style scoped>
.onboarding-signup-container {
  box-sizing: border-box;
  margin: 0 auto;
  width: 820px;
  max-width: 100%;
  padding: 40px 40px 0;
  border-radius: 8px;
  border: solid 1px #eaeaea;
  position: relative;
}
.flex {
  display: flex;
}
.onboarding-signup-container .onboarding-signup-back {
  margin-left: -5px;
  padding-top: 10px;
  z-index: 10;
  left: 20px;
  top: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.mr-2, .mx-2 {
  margin-right: 0.5rem!important;
}
.mb-3, .my-3 {
  margin-bottom: 1rem!important;
}
.onboarding-signup-container .onboarding-signup-title {
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 33px;
}
.onboarding-signup-container .onboarding-signup-flex {
  display: flex;
}
.onboarding-signup-container .onboarding-signup-flex .inputs-container {
  width: 55%;
  flex-shrink: 0;
  border-right: solid 1px #eaeaea;
  box-sizing: border-box;
  padding-right: 30px;
  padding-bottom: 30px;
  padding-top: 10px;
}
.onboarding-signup-container .onboarding-signup-flex .inputs-container .row {
  margin: 0 -15px!important;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}
.onboarding-question-container {
  margin-bottom: 25px;
}
@media screen and (min-width: 320px) {
  .field-title {
    width: 28%;
    float: left;
    box-sizing: border-box;
    padding-right: 5px;
  }
}
.onboarding-signup-container .onboarding-question-title {
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: #737373;
  margin-bottom: 10px;
}
.input-group-overlay {
  position: relative;
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
.onboarding-question-container {
  margin-bottom: 25px;
}
@media screen and (min-width: 320px) {
  .field-first-name {
    width: 36%;
    float: left;
    box-sizing: border-box;
    padding-right: 5px;
    padding-left: 5px;
  }
}
.onboarding-question-container {
  margin-bottom: 25px;
}
@media screen and (min-width: 320px) {
  .field-last-name {
    width: 36%;
    float: left;
    padding-left: 5px;
    box-sizing: border-box;
  }
}


.onboarding-consent-flex {
  display: flex;
}
.onboarding-consent-flex input[type=checkbox].form-check-input.checkbox-consent {
  border-color: #959595;
  background-color: #fff;
  margin-right: 12px;
  float: left;
}
.onboarding-terms {
  font-size: 13px;
  line-height: 18px;
  color: #959595;
  margin-bottom: 12px;
}

.onboarding-signup-container .onboarding-signup-flex .badges-container {
  width: 45%;
  flex-shrink: 0;
  box-sizing: border-box;
  padding-left: 40px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
}
.onboarding-signup-container .onboarding-signup-flex .badges-container .badge-element {
  display: flex;
}
.badges-container .badge-element .m-b {
  margin-bottom: 28px;
}
.onboarding-signup-container .onboarding-signup-flex .badges-container .badge-element .icon {
  width: 36px;
  height: 36px;
  margin-right: 12px;
}
.onboarding-signup-container .onboarding-signup-flex .badges-container .badge-element .title {
  font-size: 15px;
  font-weight: 500;
  line-height: 2;
  float: left;
}
.onboarding-signup-container .onboarding-signup-flex .badges-container .badge-element .text {
  font-size: 13px;
  line-height: 20px;
  color: #686d78;
  float: left;
}
.form-control {
  display: block;
  width: 100%;
  height: 48px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e7e7e7;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
#ngx-intl-tel-input .ng-invalid .ng-touched input {
  border: 1px solid #fd6565;
}
.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated .custom-select:invalid, .custom-select.is-invalid {
  border-color: #fd6565;
}


</style>