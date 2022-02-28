<template>
  <main class="CartLayout">
    <div class="u-frameMd"></div>

    <form
      v-if="true"
      method="post"
      enctype="application/x-www-form-urlencoded"
      accept-charset="utf-8"
      id="getCart"
    >
      <input type="hidden" name="__form_submitted_getCart" value="1" />

      <div class="u-frameMd"></div>

      <div class="CartMain" data-component="CartMain" data-step-cart>
        <div class="CartMain-frame u-frameMd">
          <h1 class="CartMain-title">Košík</h1>
          <input type="hidden" value="1" name="recalculate" />

          <div class="CartItems">
            <!-- <div class="CartItem" data-component="CartItem">
              <div class="CartItem-image">
                <a title="E-shop na míru COMBI"
                  ><picture
                    ><source
                      srcset="
                        /data/storage/thumbs/75x75-scaleexpand//images/test-data/marketing/marketing-weby.jpg.webp
                      "
                      type="image/webp" />
                    <img
                      src="/data/storage/thumbs/75x75-scaleexpand//images/test-data/marketing/marketing-weby.jpg"
                      width="75"
                      height="75"
                      alt="E-shop na míru COMBI"
                      title="E-shop na míru COMBI" /></picture
                ></a>
              </div>
              <div class="CartItem-main">
                <div class="CartItem-stock">Dostupné</div>

                <a
                  class="CartItem-title"
                  href="https://demo.tvorba-eshopy.cz/eshop/p/e-shop-na-miru-combi-10054/"
                >
                  <span></span> E-shop na míru COMBI
                </a>

                <label class="CartItemParams">
                  <input
                    type="checkbox"
                    class="CartItemParams-opener u-hidden"
                  />
                  <span class="CartItemParams-title">
                    Zobrazit parametry
                    <svg
                      width="10"
                      height="10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"
                      ></path>
                    </svg>
                  </span>
                  <span class="CartItemParams-content">COMBI</span>
                </label>
              </div>
              <div class="CartItem-counter">
                <div
                  data-amount-input
                  class="InputUpDownBase"
                  data-component="InputUpDownBase"
                  data-min="1"
                >
                  <div class="InputUpDownBase-control" data-decrement>-</div>
                  <input
                    aria-label="Množství"
                    type="text"
                    value="1"
                    id="count-10054"
                    name="count-10054"
                    data-counter
                  />
                  <div class="InputUpDownBase-control" data-increment>+</div>
                </div>
              </div>
              <div class="CartItem-price">
                250&nbsp;000,00&nbsp;<span class="currency">Kč</span>
              </div>
              <div class="CartItem-remove">
                <a href="/kosik/?remove=10054" data-remove>
                  <svg
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div> -->
            <div v-for="item in items" :key="item.id" class="CartItem" data-component="CartItem">
              <div class="CartItem-image">
                <a
                  :title="item.title"
                  ><picture
                    ><source
                      :srcset="
                        `${item.image}.webp`
                      "
                      type="image/webp" />
                    <img
                      class="no-picture"
                      loading="lazy"
                      :src="item.image"
                      width="75"
                      height="75"
                      alt="Objemová sleva Objemová sleva 40 % od 10000 Kč v sazbě DPH 21 %"
                      title="Objemová sleva Objemová sleva 40 % od 10000 Kč v sazbě DPH 21 %" /></picture
                ></a>
              </div>
              <div class="CartItem-main">
                <a class="CartItem-title">
                  <span></span> {{item.title}}
                </a>
              </div>
              <div class="CartItem-counter">
                <span v-if="!item.showCount">1&nbsp;ks</span>
                <div
                  v-if="item.showCount"
                  data-amount-input
                  class="InputUpDownBase"
                  data-component="InputUpDownBase"
                  data-min="1"
                >
                  <div v-on:click="decreaseCount(item)" class="InputUpDownBase-control" data-decrement>-</div>
                  <input
                    aria-label="Množství"
                    type="text"
                    :value="item.count"
                    id="count-10054"
                    name="count-10054"
                    data-counter
                  />
                  <div v-on:click="increaseCount(item)" class="InputUpDownBase-control" data-increment>+</div>
                </div>
              </div>
              <div class="CartItem-price" v-html="item.totalPriceWithVATFormatted">
              </div>
              <div v-if="item.count === 1" class="CartItem-remove" v-on:click="deleteItem(item.id)">
                <a data-remove>
                  <svg
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="DeliveryBar">
            <div class="DeliveryBar-top">
              <svg
                class="DeliveryBar-icon"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
                ></path>
              </svg>
              <div class="DeliveryBar-title">
                Máte dopravu <strong>zdarma</strong>
              </div>
            </div>
          </div>

          <div class="AlertList">
            <div class="AppAlert AppAlert--info">
              <div class="AppAlert-icon">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                  ></path>
                </svg>
              </div>
              <div class="AppAlert-text" data-text>
                Nákupem za minimálně 10 000,00 Kč jste získali objemovou slevu
                ve výši 40 % z celkové hodnoty nákupu.
              </div>
            </div>
          </div>

          <div class="CartMain-cols">
            <div class="CartMain-col">
              <div>
                <div class="CartDiscount">
                  <div
                    class="CartDiscountItem"
                    data-component="CartDiscountItem"
                  >
                    <div class="CartDiscountItem-header">
                      <input type="hidden" name="discount-opener" value="0" />
                      <input
                        class="CheckboxBase CartDiscountItem-input"
                        type="checkbox"
                        id="discount-opener"
                        name="discount-opener"
                        value="1"
                      />
                      <label for="discount-opener">Mám slevový kód</label>
                    </div>
                    <div class="CartDiscountItem-dropdown" data-dropdown>
                      <input
                        class="InputBase"
                        type="text"
                        id="discount"
                        name="discount"
                        value=""
                      />
                      <button
                        class="ButtonBase ButtonBase--primary"
                        type="submit"
                        disabled
                        data-add-discount
                      >
                        <span>Vložit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="CartMain-col">
              <aside class="CartPriceSummary">
                <div v-for="(summaryLine, index) in summaryLines" :key="index">
                  <header class="CartPriceSummary-title">
                    {{summaryLine.text}}
                  </header>
                  <p :class="`CartPriceSummary-value ${summaryLine.type}`" v-html="summaryLine.priceFormatted"></p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <div class="CartBar">
        <div class="CartBar-frame u-frameMd">
          <a class="ButtonBase ButtonBase--ghost CartBar-back" href="/eshop/">
            <svg
              width="1em"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              ></path>
            </svg>
            <span>Přidat další položku</span>
          </a>
          <button
            class="ButtonBase ButtonBase--primary btn-primary btn-outline"
            type="submit"
            value="progress"
            id="buttonSubmit"
            name="buttonSubmit"
          >
            <span>Pokračovat</span>
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch("getItems")
    })

    const increaseCount = (item) => {
      store.commit("increaseCount", item)
    }
    
    const decreaseCount = (item) => {
      store.commit("decreaseCount", item)
    } 

    const deleteItem = (itemId) => {
      store.commit("deleteItem", itemId)
    }

    const items = computed(() => store.state.currentOrder.items)
    const summaryLines = computed(() => store.state.currentOrder.totals.summaryLines)

    return {
      items,
      summaryLines,
      increaseCount,
      decreaseCount,
      deleteItem
    }
  },
}
</script>

<style>
@charset "UTF-8";
:root {
  --colorBrand: hsl(205, 100%, 50%);
  --colorBrand-h: 205;
  --colorBrand-s: 100;
  --colorBrand-l: 50;
  --colorBrand-contrast: hsl(0, 0%, calc((var(--colorBrand-l) - 60) * -100%));
  --colorBrandSecondary: hsl(205, 79%, 95%);
  --colorBrandSecondary-h: 205;
  --colorBrandSecondary-s: 79;
  --colorBrandSecondary-l: 95;
  --colorBodyBg: hsl(0, 0%, 100%);
  --colorBodyBg-h: 0;
  --colorBodyBg-s: 0;
  --colorBodyBg-l: 100;
  --colorSecondaryBg: hsl(0, 0%, 91%);
  --colorSecondaryBg-h: 0;
  --colorSecondaryBg-s: 0;
  --colorSecondaryBg-l: 91;
  --colorContrastBg: hsl(203, 28%, 8%);
  --colorContrastBg-h: 203;
  --colorContrastBg-s: 28;
  --colorContrastBg-l: 8;
  --colorThemeAccent: hsl(0, 0%, 100%);
  --colorThemeAccent-h: 0;
  --colorThemeAccent-s: 0;
  --colorThemeAccent-l: 100;
  --colorBrandBg: hsla(
    var(--colorBrand-h),
    calc(var(--colorBrand-s) * 1%),
    calc(var(--colorBrand-l) * 1%),
    0.08
  );
  --colorShadeBg: rgba(0, 0, 0, 0.8);
  --colorOutlines: #e3e3e3;
  --colorOutlinesLight: #f5f5f5;
  --colorHighlighted: #ba0000;
  --starsColor: #fcad00;
  --colorErrorsDefault: hsl(352, 100%, 43%);
  --colorErrorsDefault-h: 352;
  --colorErrorsDefault-s: 100;
  --colorErrorsDefault-l: 43;
  --colorText: hsl(0, 0%, 0%);
  --colorText-h: 0;
  --colorText-s: 0;
  --colorText-l: 0;
  --colorTextHeading: #000;
  --colorTextSubtle: #4a4a4a;
  --colorLinkText: var(--colorBrand);
  --colorLinkTextActive: var(--colorText);
  --colorInputBorder: var(--colorOutlines);
  --colorInputBackground: var(--colorThemeAccent);
  --colorInputBorderFocus: #383838;
  --colorInputBackgroundFocus: var(--colorThemeAccent);
  --colorInputBackgroundInvalid: var(--colorThemeAccent);
  --colorButtonBg: var(--colorBrand);
  --colorButtonDisabledBg: gray;
  --colorButtonText: white;
  --stateInfo: #5895f5;
  --stateSuccess: #4dab00;
  --stateWarning: #f58c59;
  --stateError: #dc2727;
  --colorStockIn: var(--stateSuccess);
  --colorStockOut: var(--stateError);
}

:root {
  --durationAnimationBase: 0.25s;
  --easingAnimationBase: ease-in-out;
  --animationBase: all var(--durationAnimationBase) var(--easingAnimationBase);
}

:root {
  --layerNegativeZIndex: -1;
  --layerNullZIndex: 0;
  --layerPageZIndex: 1;
  --layerPageSecondaryZIndex: 2;
  --layerHeaderZIndex: 10;
  --layerDropdownZIndex: 20;
  --layerModalZIndex: 21;
  --layerPopoverZIndex: 22;
  --layerTooltipZIndex: 23;
  --layerSpinnerZIndex: 24;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html.is-not-smooth {
  scroll-behavior: unset;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  background: var(--colorBodyBg);
  margin: 0;
  font-size: var(--textBaseSize);
  font-family: var(--font-primary);
  color: var(--colorText);
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: var(--bodyLineHeight);
}

body.is-not-overflowed {
  overflow: hidden;
}

/* Remove default padding */
ul,
ol {
  padding: 0;
}

/* Remove default margin */
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
}

::selection {
  color: hsl(0, 0%, calc((var(--colorBrand-l) - 60) * -100%));
  background: var(--colorBrand);
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

:root {
  --sizeContentOffset: 1.25rem;
  --sizeContentOffsetHd: 4%;
  --sizeContentWidthHd: 120rem;
  --sizeContentWidthLarge: 87.5rem;
  --sizeContentWidthMedium: 75rem;
  --sizeContentWidthSmall: 61.25rem;
  --sizeInputFont: var(--textSm);
  --sizeInputPaddingVertical: var(--spaceSm);
  --sizeInputPaddingHorizontal: var(--spaceMd);
  --sizeInputPadding: var(--sizeInputPaddingVertical)
    var(--sizeInputPaddingHorizontal);
  --sizeInputBorder: 1px;
  --sizeInputBorderRadius: 0;
  --sizeButtonFont: var(--textSm);
  --sizeButtonPaddingVertical: var(--spaceSm);
  --sizeButtonPaddingHorizontal: var(--spaceLg);
  --sizeButtonPadding: var(--sizeButtonPaddingVertical)
    var(--sizeButtonPaddingHorizontal);
  --sizeButtonBorder: 1px;
  --sizeButtonBorderRadius: 0;
}

.u-frameSm {
  max-width: calc(var(--sizeContentWidthSmall) + var(--sizeContentOffset) * 2);
  padding-left: var(--sizeContentOffset);
  padding-right: var(--sizeContentOffset);
}

.u-frameMd {
  max-width: calc(var(--sizeContentWidthMedium) + var(--sizeContentOffset) * 2);
  padding-left: var(--sizeContentOffset);
  padding-right: var(--sizeContentOffset);
}

.u-frameLg {
  max-width: calc(var(--sizeContentWidthLarge) + var(--sizeContentOffset) * 2);
  padding-left: var(--sizeContentOffset);
  padding-right: var(--sizeContentOffset);
}

.u-frameHd {
  max-width: calc(var(--sizeContentWidthHd) + var(--sizeContentOffset) * 2);
  padding-left: var(--sizeContentOffset);
  padding-right: var(--sizeContentOffset);
}

.u-frameHdOffset {
  max-width: calc(
    var(--sizeContentWidthHd) +
      var(--sizeContentOffsetHd, var(--sizeContentOffset)) * 2
  );
  padding-left: var(--sizeContentOffsetHd, var(--sizeContentOffset));
  padding-right: var(--sizeContentOffsetHd, var(--sizeContentOffset));
}

.u-clearfix::after {
  clear: both;
  content: "";
  display: table;
}

.u-container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
}

[class*="u-frame"] {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.u-fullWidth {
  width: 100%;
}

.u-block {
  display: block;
}

.u-flex {
  display: flex;
}

.u-hidden {
  display: none !important;
}

.u-hiddenVisually {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.u-invisibleScrollBar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.u-invisibleScrollBar::-webkit-scrollbar {
  display: none;
}

.u-customScrollBar {
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  scrollbar-width: thin;
}

.u-customScrollBar::-webkit-scrollbar {
  width: 0.4rem;
}

.u-customScrollBar::-webkit-scrollbar-track {
  background: transparent;
}

.u-customScrollBar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease-in-out;
}

.u-customScrollBar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}

.u-textCenter {
  text-align: center;
}

.u-flexJustifyStart {
  justify-content: flex-start;
}

.u-flexJustifyEnd {
  justify-content: flex-end;
}

.u-flexJustifyCenter {
  justify-content: center;
}

.u-flexJustifyBetween {
  justify-content: space-between;
}

.u-flexJustifyAround {
  justify-content: space-around;
}

.u-flexAlignItemsStart {
  align-items: flex-start;
}

.u-flexAlignItemsEnd {
  align-items: flex-end;
}

.u-flexAlignItemsCenter {
  align-items: center;
}

.u-spanRow {
  grid-column: 1 / -1;
}

:root {
  --font-primary: SourceSansPro, sans-serif;
  --font-secondary: serif;
  /* set base values */
  --textBaseSize: 1rem;
  --textScaleRatio: 1.2;
  /* type scale */
  --textXxs: calc(
    1em /
      (var(--textScaleRatio) * var(--textScaleRatio) * var(--textScaleRatio))
  );
  --textXs: calc(1em / (var(--textScaleRatio) * var(--textScaleRatio)));
  --textSm: calc(1em / var(--textScaleRatio));
  --textRg: 1em;
  --textMd: calc(1em * var(--textScaleRatio));
  --textLg: calc(1em * var(--textScaleRatio) * var(--textScaleRatio));
  --textXl: calc(
    1em * var(--textScaleRatio) * var(--textScaleRatio) * var(--textScaleRatio)
  );
  --textXxl: calc(
    1em * var(--textScaleRatio) * var(--textScaleRatio) * var(--textScaleRatio) *
      var(--textScaleRatio)
  );
  --textXxxl: calc(
    1em * var(--textScaleRatio) * var(--textScaleRatio) * var(--textScaleRatio) *
      var(--textScaleRatio) * var(--textScaleRatio)
  );
  --textXxxxl: calc(
    1em * var(--textScaleRatio) * var(--textScaleRatio) * var(--textScaleRatio) *
      var(--textScaleRatio) * var(--textScaleRatio) * var(--textScaleRatio)
  );
  --bodyLineHeight: 1.5;
  --headingLineHeight: 1.2;
}

@media (min-width: 48.01rem) {
  :root {
    --textBaseSize: 1.15rem;
  }
}

@media (min-width: 64.01rem) {
  :root {
    --textBaseSize: 1.25rem;
  }
}

h1,
h2,
h3,
h4,
form legend {
  color: var(--colorTextHeading);
  margin-bottom: var(--spaceXs);
  line-height: var(--headingLineHeight);
}

/* text size */
.u-textXxxl {
  font-size: var(--textXxxl);
}

h1,
.u-textXxl {
  font-size: var(--textXxl);
}

h2,
.u-textXl {
  font-size: var(--textXxl);
  margin-bottom: var(--spaceSm);
}

h3,
.u-textLg {
  font-size: var(--textLg);
}

h4,
.u-textMd {
  font-size: var(--textMd);
}

.u-textSm,
small {
  font-size: var(--textSm);
}

.u-textXs {
  font-size: var(--textXs);
}

p {
  line-height: var(--bodyLineHeight);
}

a {
  color: var(--colorLinkText);
  text-decoration: none;
}

a:hover,
a:active,
a:focus {
  color: var(--colorLinkTextActive);
  text-decoration: underline;
}

:root {
  --spaceUnit: 1em;
  --spaceXxxxs: calc(0.125 * var(--spaceUnit));
  --spaceXxxs: calc(0.25 * var(--spaceUnit));
  --spaceXxs: calc(0.375 * var(--spaceUnit));
  --spaceXs: calc(0.5 * var(--spaceUnit));
  --spaceSm: calc(0.75 * var(--spaceUnit));
  --spaceRg: var(--spaceUnit);
  --spaceMd: calc(1.25 * var(--spaceUnit));
  --spaceLg: calc(2 * var(--spaceUnit));
  --spaceXl: calc(3.25 * var(--spaceUnit));
  --spaceXxl: calc(5.25 * var(--spaceUnit));
  --spaceXxxl: calc(8.5 * var(--spaceUnit));
  --spaceXxxxl: calc(13.75 * var(--spaceUnit));
}

.u-spaceUnit {
  margin-bottom: var(--spaceUnit);
}

.u-spaceXxxxs {
  margin-bottom: var(--spaceXxxxs);
}

.u-spaceXxxs {
  margin-bottom: var(--spaceXxxs);
}

.u-spaceXxs {
  margin-bottom: var(--spaceXxs);
}

.u-spaceXs {
  margin-bottom: var(--spaceXs);
}

.u-spaceSm {
  margin-bottom: var(--spaceSm);
}

.u-spaceMd {
  margin-bottom: var(--spaceMd);
}

.u-spaceLg {
  margin-bottom: var(--spaceLg);
}

.u-spaceXl {
  margin-bottom: var(--spaceXl);
}

.u-spaceXxl {
  margin-bottom: var(--spaceXxl);
}

.u-spaceXxxl {
  margin-bottom: var(--spaceXxxl);
}

.u-spaceXxxxl {
  margin-bottom: var(--spaceXxxxl);
}

[data-tooltip] {
  position: relative;
}

[data-tooltip]:before {
  content: attr(data-tooltip);
  position: absolute;
  left: 50%;
  bottom: calc(100% + 11px);
  background: #000000de;
  color: #fff;
  transform-origin: bottom center;
  transition: var(--animationBase);
  transform: translateX(-50%);
  padding: 17px;
  font-size: 14px;
  width: 249px;
  text-align: center;
  line-height: 1.4;
  border-radius: 4px;
  border-bottom: 3px solid var(--colorBrand);
  pointer-events: none;
  opacity: 0;
}

[data-tooltip]:after {
  content: "▾";
  display: block;
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
  width: 249px;
  font-size: 32px;
  line-height: 17px;
  text-align: center;
  color: var(--colorBrand);
  transition: var(--animationBase);
  pointer-events: none;
  opacity: 0;
}

[data-tooltip]:hover:before {
  pointer-events: auto;
  opacity: 1;
}

[data-tooltip]:hover:after {
  pointer-events: auto;
  opacity: 1;
}

/*# sourceMappingURL=base.min.css.map */
.AppAlert {
  display: flex;
  font-size: 0.8em;
  background: var(--colorThemeAccent);
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0 20px #0000001a;
  line-height: 1.5;
  margin-bottom: var(--spaceMd);
}

.AppAlert a {
  color: inherit;
  text-decoration: underline;
}

.AppAlert a:hover,
.AppAlert a:active,
.AppAlert a:focus {
  text-decoration: none;
}

.AppAlert-icon {
  background: currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
}

.AppAlert-icon svg {
  color: #fff;
  width: 1em;
}

.AppAlert-text {
  color: var(--colorText);
  padding: 1.2em;
}

.AppAlert--info {
  color: var(--stateInfo);
}

.AppAlert--success {
  color: var(--stateSuccess);
}

.AppAlert--warning {
  color: var(--stateWarning);
}

.AppAlert--error {
  color: var(--stateError);
}

/*# sourceMappingURL=alert.min.css.map */
.CartHolderItem {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr;
  grid-template-areas: "cartImage cartTitle cartRemove" "cartImage cartCount cartPrice";
  font-size: var(--textXs);
  grid-gap: 0.2em;
  border-bottom: 1px solid var(--colorOutlines);
  padding-bottom: var(--spaceSm);
  margin-bottom: var(--spaceSm);
}

.CartHolderItem-image {
  grid-area: cartImage;
  margin-right: var(--spaceSm);
}

.CartHolderItem-title {
  grid-area: cartTitle;
  color: var(--colorText);
  font-weight: 700;
  transition: var(--animationBase);
}

.CartHolderItem-title a {
  text-decoration: none;
  color: inherit;
  transition: var(--animationBase);
}

.CartHolderItem-title a:hover,
.CartHolderItem-title a:active,
.CartHolderItem-title a:focus {
  text-decoration: none;
  color: var(--colorBrand);
}

.CartHolderItem-count {
  grid-area: cartCount;
  align-self: flex-end;
}

.CartHolderItem-price {
  grid-area: cartPrice;
  align-self: flex-end;
}

.CartHolderItem-remove {
  grid-area: cartRemove;
  background: transparent;
  border: none;
  justify-self: flex-end;
  padding: 0;
  transition: var(--animationBase);
  cursor: pointer;
}

.CartHolderItem-remove:hover,
.CartHolderItem-remove:active,
.CartHolderItem-remove:focus {
  color: var(--colorBrand);
}

/*# sourceMappingURL=cart-holder-item.min.css.map */
.FormBubble {
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.FormBubble svg {
  display: block;
}

.FormBubble--errors {
  color: var(--colorErrorsDefault);
}

.FormBubble-content {
  position: absolute;
  right: -0.7em;
  bottom: calc(100% + 0.6em);
  opacity: 0;
  display: block;
  transform-origin: right bottom;
  transform: scale(0);
  transition: var(--animationBase);
  color: #fff;
  font-size: 0.7em;
  font-weight: 600;
  width: 13em;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  padding: 0.7em 0.5em;
  text-align: center;
}

.FormBubble-content:after {
  content: " ";
  display: block;
  position: absolute;
  right: 0.86em;
  top: 100%;
  border: 0.6em solid;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}

.FormBubble--errors .FormBubble-content {
  color: var(--colorErrorsDefault);
  background: hsl(
    var(--colorErrorsDefault-h),
    calc(var(--colorErrorsDefault-s) * 1%),
    calc(var(--colorErrorsDefault-l) * 2.2 * 1%)
  );
}

.FormBubble--errors .FormBubble-content:after {
  border-color: hsl(
      var(--colorErrorsDefault-h),
      calc(var(--colorErrorsDefault-s) * 1%),
      calc(var(--colorErrorsDefault-l) * 2.2 * 1%)
    )
    transparent transparent transparent;
}

.FormBubble:hover .FormBubble-content {
  opacity: 1;
  transform: scale(1);
}

/*# sourceMappingURL=form-bubble.min.css.map */
.CartLayout {
  padding-bottom: 0;
}

/*# sourceMappingURL=cart-layout.min.css.map */
main {
  padding-top: var(--spaceLg);
  padding-bottom: var(--spaceXl);
}

/*# sourceMappingURL=layout.min.css.map */
.CartSteps {
  margin-bottom: var(--spaceLg);
}

.CartSteps-frame {
  display: flex;
  flex-wrap: wrap;
}

.CartSteps-step {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.CartSteps-step:after {
  content: " ";
  display: block;
  position: absolute;
  top: 0.35em;
  height: 0.2em;
  width: 100%;
  left: 50%;
  background: var(--colorOutlines);
  z-index: var(--layerNegativeZIndex);
}

.CartSteps-step.is-done:after {
  background: var(--colorBrand);
}

.CartSteps-step:last-child:after {
  display: none;
}

.CartSteps-icon {
  width: 0.9em;
  height: 0.9em;
  border-radius: 50%;
  background-color: var(--colorOutlines);
  box-shadow: 0 0 0 4px var(--colorOutlines);
  color: var(--colorThemeAccent);
  border: 2px solid var(--colorThemeAccent);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 3px 2px;
}

.CartSteps-icon svg {
  display: none;
  color: var(--colorThemeAccent);
}

.CartSteps-icon.is-done svg {
  display: block;
}

.CartSteps-icon.is-done,
.CartSteps-icon.is-current {
  background-color: var(--colorBrand);
  box-shadow: 0 0 0 4px var(--colorBrand);
}

.CartSteps-link {
  color: var(--colorText);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: var(--spaceSm);
  font-size: var(--textSm);
}

@media (max-width: 32rem) {
  .CartSteps-link {
    font-size: 0.65em;
    margin-top: 1.4em;
  }
}

.CartSteps-link:hover,
.CartSteps-link:active,
.CartSteps-link:focus {
  text-decoration: none;
}

.CartSteps-link[href]:hover,
.CartSteps-link[href]:active,
.CartSteps-link[href]:focus {
  text-decoration: underline;
}

/*# sourceMappingURL=cart-steps.min.css.map */
.CartItemParams {
  position: relative;
  line-height: 1;
  margin-bottom: var(--spaceXxs);
}

.CartItemParams-title {
  font-size: var(--textXs);
  cursor: pointer;
  transition: var(--animationBase);
}

.CartItemParams-title:hover,
.CartItemParams-title:active,
.CartItemParams-title:focus {
  color: var(--colorBrand);
}

.CartItemParams-title svg {
  width: 0.8em;
  height: auto;
  display: inline-block;
  vertical-align: middle;
}

.CartItemParams-content {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background: #000000e8;
  color: #fff;
  padding: var(--spaceMd);
  font-size: var(--textXs);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-top: 2px solid var(--colorBrand);
  transition: var(--animationBase);
  transform-origin: top left;
  transform: scale(0);
  opacity: 0;
  line-height: 1.8;
  z-index: 2;
  width: 18rem;
}

@media (max-width: 63.99rem) {
  .CartItemParams-content {
    width: 11rem;
  }
}

.CartItemParams-content:before {
  content: " ";
  display: block;
  border: 8px solid;
  border-color: transparent transparent var(--colorBrand) transparent;
  position: absolute;
  bottom: 100%;
  left: 1.5em;
}

.CartItemParams-opener:checked ~ .CartItemParams-content {
  transform: scale(1);
  opacity: 1;
}

/*# sourceMappingURL=cart-item-params.min.css.map */
.InputUpDownBase {
  display: inline-flex;
  border: 1px solid;
}

.InputUpDownBase-control {
  user-select: none;
  cursor: pointer;
  padding: 0 10px;
  display: flex;
  align-items: center;
  transition: var(--animationBase);
}

.InputUpDownBase-control:hover,
.InputUpDownBase-control:active,
.InputUpDownBase-control:focus {
  color: var(--colorBrand);
}

.InputUpDownBase input {
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  background: transparent;
  width: 40px;
  text-align: center;
  border: none;
  border-left: 1px solid;
  border-right: 1px solid;
  font-size: var(--sizeInputFont);
  padding: calc(var(--sizeInputPaddingVertical) - 2px) 0.2em;
  outline: none;
}

.InputUpDownBase input::-webkit-outer-spin-button,
.InputUpDownBase input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/*# sourceMappingURL=input-up-down.min.css.map */
.CartItem {
  display: grid;
  grid-gap: var(--spaceMd);
  grid-template-columns: auto 1fr 110px 178px 14px;
  grid-template-areas: "cartPicture cartMain cartCount cartPrice cartRemove";
  align-items: center;
  border-bottom: 1px solid var(--colorOutlines);
  margin-bottom: 20px;
  padding-bottom: 20px;
}

@media (max-width: 48rem) {
  .CartItem {
    grid-template-columns: auto 1fr auto 14px;
    grid-gap: var(--spaceSm);
    grid-template-areas:
      "cartPicture cartMain cartMain cartMain"
      "cartCount cartCount cartPrice cartRemove";
  }
}

.CartItem--static {
  grid-template-columns: auto 1fr 110px 178px;
  grid-template-areas: "cartPicture cartMain cartCount cartPrice";
}

@media (max-width: 48rem) {
  .CartItem--static {
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      "cartPicture cartMain cartMain cartMain"
      "cartCount cartCount cartPrice cartPrice";
  }
}

.CartItem-image {
  grid-area: cartPicture;
}

.CartItem-main {
  grid-area: cartMain;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.CartItem-stock {
  color: var(--colorStockIn);
  font-size: var(--textXxs);
  line-height: 0.9;
}

.CartItem-stock.is-out {
  color: var(--colorStockOut);
}

.CartItem-title {
  color: var(--colorText);
  font-weight: 700;
  font-size: var(--textSm);
}

.CartItem-title:hover,
.CartItem-title:active,
.CartItem-title:focus {
  text-decoration: underline;
}

.CartItem-counter {
  grid-area: cartCount;
  justify-self: center;
}

@media (max-width: 48rem) {
  .CartItem-counter {
    justify-self: flex-start;
  }
}

.CartItem-counter span {
  font-size: var(--textSm);
}

.CartItem-price {
  grid-area: cartPrice;
  text-align: right;
  font-size: var(--textSm);
  font-weight: 700;
}

.CartItem-remove {
  grid-area: cartRemove;
}

.CartItem-remove a {
  color: inherit;
  transition: var(--animationBase);
}

.CartItem-remove a:hover,
.CartItem-remove a:active,
.CartItem-remove a:focus {
  color: var(--colorBrand);
}

.CartItem-gifts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: var(--spaceXs);
  margin-left: calc(var(--spaceLg) * -1);
}

/*# sourceMappingURL=cart-item.min.css.map */

/*# sourceMappingURL=cart-items.min.css.map */
.DeliveryBar {
  background: var(--colorSecondaryBg);
  text-align: right;
  padding: var(--spaceMd);
  margin-bottom: var(--spaceMd);
  font-size: var(--textSm);
}

.DeliveryBar--sm {
  font-size: var(--textXxs);
}

.DeliveryBar-top {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.DeliveryBar-icon {
  margin-right: 0.625rem;
  color: var(--colorBrand);
}

.DeliveryBar-title strong {
  color: var(--colorBrand);
}

.DeliveryBar-progress {
  display: block;
  width: 18.75rem;
  height: 0.8em;
  margin: 0.8rem 0 0 auto;
  padding: 0;
  border: 0 none;
  background: var(--colorThemeAccent);
  border-radius: 0.875rem;
  max-width: 100%;
}

.DeliveryBar-progress::-moz-progress-bar {
  border-radius: 0.8em;
  background: var(--colorBrand);
}

.DeliveryBar-progress::-webkit-progress-bar {
  background: transparent;
}

.DeliveryBar-progress::-webkit-progress-value {
  border-radius: 0.8em;
  background: var(--colorBrand);
}

/*# sourceMappingURL=delivery-bar.min.css.map */
.CheckboxBase {
  font-size: 1em;
  margin: 0;
  width: 1em;
  height: 1em;
  border: 2px solid var(--colorText);
  position: relative;
  top: 0.15em;
  transition: var(--animationBase);
  cursor: pointer;
  outline: none;
  border-radius: 0;
}

.CheckboxBase:not(:disabled):hover,
.CheckboxBase:not(:disabled):focus,
.CheckboxBase:checked {
  border-color: var(--colorBrand);
  background: var(--colorBrand);
}

.CheckboxBase:after {
  content: " ";
  display: block;
  width: 0.62em;
  height: 0.34em;
  border-left: 0.18em solid hsl(0, 0%, calc((var(--colorBrand-l) - 60) * -100%));
  border-bottom: 0.18em solid
    hsl(0, 0%, calc((var(--colorBrand-l) - 60) * -100%));
  transform: rotate(-45deg);
  margin-left: calc(1em * 0.19 - 1px);
  margin-top: calc(1em * 0.22 - 1px);
  transition: var(--animationBase);
  opacity: 0;
}

.CheckboxBase:checked:after {
  opacity: 1;
}

.CheckboxBase:disabled,
.CheckboxBase:disabled + * {
  border-color: var(--colorTextSubtle);
  opacity: 0.4;
}

.CheckboxBase.is-invalid {
  border-color: var(--colorErrorsDefault);
}

/*# sourceMappingURL=checkbox.min.css.map */
.InputBase {
  width: 100%;
  display: block;
  border: var(--sizeInputBorder) solid var(--colorInputBorder);
  background: var(--colorInputBackground);
  border-radius: var(--sizeInputBorderRadius);
  padding: var(--sizeInputPadding);
  font-size: var(--sizeInputFont);
  transition: var(--animationBase);
  outline: none;
}

.InputBase.is-invalid {
  border-color: var(--colorErrorsDefault);
  background-color: var(--colorInputBackgroundInvalid);
}

.InputBase:focus {
  border-color: var(--colorInputBorderFocus);
  background-color: var(--colorInputBackgroundFocus);
}

/*# sourceMappingURL=input.min.css.map */
.ButtonBase {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--animationBase);
  background: var(--colorButtonBg);
  cursor: pointer;
  color: #fff;
  padding: var(--sizeButtonPadding);
  font-size: var(--sizeButtonFont);
  text-decoration: none;
  border: none;
  outline: 0;
  font-weight: 700;
  text-transform: uppercase;
}

.ButtonBase:hover,
.ButtonBase:active,
.ButtonBase:focus {
  background: hsl(
    var(--colorBrand-h),
    calc(var(--colorBrand-s) * 1%),
    calc(var(--colorBrand-l) * 0.8 * 1%)
  );
  text-decoration: none;
  color: #fff;
}

.ButtonBase svg {
  margin: 0 var(--spaceXxs) 0 0;
  width: auto;
  height: 1em;
}

.ButtonBase svg:last-child {
  margin: 0 0 0 var(--spaceXxs);
}

.ButtonBase--lg {
  font-size: calc(var(--sizeButtonFont) * 1.2);
}

.ButtonBase--md {
  font-size: calc(var(--sizeButtonFont) * 1.1);
}

.ButtonBase--sm {
  font-size: calc(var(--sizeButtonFont) * 0.85);
}

.ButtonBase:disabled {
  background: var(--colorTextSubtle);
  opacity: 0.6;
  pointer-events: none;
}

.ButtonBase--secondary {
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #fff;
  box-shadow: 0 0 20px #00000024;
}

.ButtonBase--ghost {
  background: transparent;
  color: var(--colorBrand);
  border: 1px solid var(--colorBrand);
}

.ButtonBase--ghost:disabled {
  background: transparent;
  color: var(--colorTextSubtle);
  border-color: var(--colorTextSubtle);
}

.ButtonBase--ghost:hover,
.ButtonBase--ghost:active,
.ButtonBase--ghost:focus {
  background: var(--colorBrand);
}

.ButtonBase--danger {
  background: transparent;
  color: var(--colorErrorsDefault);
  border: 1px solid var(--colorErrorsDefault);
}

.ButtonBase--danger:disabled {
  background: transparent;
  color: var(--colorTextSubtle);
  border-color: var(--colorTextSubtle);
}

.ButtonBase--danger:hover,
.ButtonBase--danger:active,
.ButtonBase--danger:focus {
  background: var(--colorErrorsDefault);
}

.ButtonBase--lite {
  background: transparent;
  color: #000;
  border: 1px solid #888888;
}

.ButtonBase--lite:hover,
.ButtonBase--lite:active,
.ButtonBase--lite:focus {
  background: var(--colorBrand);
  border-color: var(--colorBrand);
}

/*# sourceMappingURL=button.min.css.map */
.CartDiscountItem {
  margin-bottom: var(--spaceXs);
}

.CartDiscountItem-header {
  font-size: var(--textSm);
}

.CartDiscountItem-header input {
  margin-right: var(--spaceXs);
}

.CartDiscountItem-header label {
  cursor: pointer;
}

.CartDiscountItem-bubble {
  display: inline-block;
  vertical-align: middle;
  top: -0.07em;
  margin-left: 0.1em;
}

.CartDiscountItem-dropdown {
  overflow: hidden;
  max-height: 0;
  transition: var(--animationBase);
  display: flex;
  font-size: var(--textSm);
}

.CartDiscountItem-dropdown.is-open {
  max-height: 9.4em;
  padding: var(--spaceSm) 0;
}

.CartDiscountItem-dropdown input {
  margin-right: var(--spaceXs);
}

.CartDiscountItem-dropdown label {
  display: none;
}

/*# sourceMappingURL=cart-discount-item.min.css.map */
.CartPriceSummary {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: var(--spaceSm) var(--spaceLg);
  text-align: right;
  font-size: var(--textSm);
}

.CartPriceSummary-title:last-of-type {
  font-size: var(--textLg);
}

@media (max-width: 25rem) {
  .CartPriceSummary-title:last-of-type {
    font-size: var(--textMd);
  }
}

.CartPriceSummary-value {
  font-weight: 700;
}

.CartPriceSummary-value:last-of-type {
  font-size: var(--textLg);
}

@media (max-width: 25rem) {
  .CartPriceSummary-value:last-of-type {
    font-size: var(--textMd);
  }
}

/*# sourceMappingURL=cart-price-summary.min.css.map */
.CartMain-cols {
  margin: var(--spaceLg) 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media (max-width: 48rem) {
  .CartMain-col {
    width: 100%;
  }
  .CartMain-col:last-child {
    margin-top: var(--spaceMd);
  }
}

/*# sourceMappingURL=cart-main.min.css.map */
.CartBar {
  padding: 14px 0;
  background: var(--colorThemeAccent);
  position: sticky;
  bottom: 0;
  box-shadow: 0 -13px 10px rgba(0, 0, 0, 0.03);
  margin-top: 40px;
}

.CartBar-frame {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 32rem) {
  .CartBar-back span {
    display: none;
  }
}

.CartBar-back svg {
  margin: 0;
}

@media (min-width: 32.01rem) {
  .CartBar-back svg {
    display: none;
  }
}

/*# sourceMappingURL=cart-bar.min.css.map */
.HeadTrustpoints {
  padding: var(--spaceXs) 0;
  font-size: var(--textXs);
  font-weight: 600;
}

.HeadTrustpoints-frame {
  display: flex;
  flex-wrap: wrap;
}

.HeadTrustpoints-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.333%;
  padding: 0 10px;
  line-height: 1.2;
}

@media (max-width: 64rem) {
  .HeadTrustpoints-item {
    width: 50%;
  }
  .HeadTrustpoints-item:last-child {
    display: none;
  }
}

@media (max-width: 48rem) {
  .HeadTrustpoints-item {
    width: 100%;
  }
  .HeadTrustpoints-item:nth-child(2) {
    display: none;
  }
}

.HeadTrustpoints-item img {
  margin-right: 10px;
  height: 1.7rem;
}

@media (max-width: 64rem) {
  .HeadTrustpoints-item img {
    height: 1.3rem;
    width: auto;
  }
}

/*# sourceMappingURL=head-trustpoints.min.css.map */
.HeaderBar {
  border-bottom: 1px solid var(--colorOutlines);
  z-index: calc(var(--layerHeaderZIndex) + 1);
}

@media (max-width: 64rem) {
  .HeaderBar {
    height: 0;
    border: 0;
  }
}

.HeaderBar > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spaceSm) var(--spaceMd);
  font-size: var(--textSm);
}

/*# sourceMappingURL=header-bar.min.css.map */
@media (max-width: 64rem) {
  .AppNavigation {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 320px;
    max-width: calc(100vw - 2rem);
    background: var(--colorThemeAccent);
    box-shadow: 0 0 32px #0000005c;
    padding: 0;
    z-index: var(--layerDropdownZIndex);
    overflow: auto;
    transition: var(--animationBase);
    transform: translateX(100%);
    opacity: 0;
  }
  .AppNavigation.is-opened {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 64rem) {
  .AppNavigation-frame {
    padding: 0;
  }
}

.AppNavigation-closer {
  position: absolute;
  top: 0;
  right: 0;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--colorBrand);
  color: hsl(0, 0%, calc((var(--colorBrand-l) - 60) * -100%));
  transition: var(--animationBase);
}

.AppNavigation-closer:hover,
.AppNavigation-closer:active,
.AppNavigation-closer:focus {
  background: hsl(
    var(--colorBrand-h),
    calc(var(--colorBrand-s) * 1%),
    calc(var(--colorBrand-l) * 0.8 * 1%)
  );
}

@media (min-width: 64.01rem) {
  .AppNavigation-closer {
    display: none;
  }
}

.AppNavigation-list {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 64rem) {
  .AppNavigation-list {
    flex-direction: column;
    padding: var(--spaceLg);
  }
}

/*# sourceMappingURL=navigation.min.css.map */
.AppNavigationItem {
  position: relative;
  font-size: var(--textSm);
}

@media (max-width: 64rem) {
  .AppNavigationItem {
    margin: 0;
    font-size: 0.8rem;
    border-bottom: 1px solid var(--colorOutlines);
    display: flex;
    flex-wrap: wrap;
    color: var(--colorText);
  }
  .AppNavigationItem:last-child {
    border-bottom: none;
  }
}

.AppNavigationItem:last-child {
  margin-right: 0;
}

.AppNavigationItem-frame {
  display: flex;
  align-items: center;
}

.AppNavigationItem-opener {
  display: none;
}

@media (max-width: 64rem) {
  .AppNavigationItem-opener {
    display: flex;
    margin-left: 0.5em;
  }
  .AppNavigationItem-opener svg {
    width: 12px;
    height: auto;
    transition: var(--animationBase);
  }
  .AppNavigationItem-opener.is-opened svg {
    transform: rotate(-180deg);
  }
}

.AppNavigationItem-link {
  color: black;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  padding: 0 var(--spaceMd);
  display: block;
}

.AppNavigationItem-link:first-child {
  padding-left: 0;
}

@media (max-width: 64rem) {
  .AppNavigationItem-link {
    padding: 0.8em 0;
    flex: 1;
  }
}

@media (max-width: 64rem) {
  .AppNavigationItem-link.is-active,
  .AppNavigationItem-link:hover,
  .AppNavigationItem-link:focus {
    color: var(--colorBrand);
    background: transparent;
    padding: 0.8em 0;
    flex: 1;
  }
}

.AppNavigationItem-submenu {
  position: absolute;
  left: 0;
  top: calc(100% + 0.8rem);
  transition: var(--animationBase);
  transform-origin: top left;
  transform: scale(0);
  opacity: 0;
  box-shadow: 0 0 20px #0000003b;
  width: 230px;
  z-index: var(--layerDropdownZIndex);
  border-top: 2px solid var(--colorBrand);
}

@media (max-width: 64rem) {
  .AppNavigationItem-submenu {
    position: static;
    box-shadow: none;
    opacity: 0;
    max-height: 0;
    transform: rotateX(90deg);
    overflow: hidden;
    width: 100%;
    border-top: 1px dashed var(--colorOutlines);
  }
}

.AppNavigationItem-submenu:before {
  content: "▲";
  display: block;
  position: absolute;
  bottom: 100%;
  width: 100%;
  text-align: left;
  padding-left: 1em;
  color: var(--colorBrand);
  line-height: 1;
  padding-top: 0.4em;
}

@media (min-width: 64.01rem) {
  .AppNavigationItem:hover .AppNavigationItem-submenu {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 64rem) {
  .AppNavigationItem-submenu.is-opened {
    opacity: 1;
    max-height: 1000px;
    transform: rotateX(0deg);
  }
}

.AppNavigationItem-submenu .AppNavigationItem {
  background: #fff;
  width: 100%;
  border-bottom: 1px solid var(--colorOutlines);
  margin: 0;
}

.AppNavigationItem-submenu .AppNavigationItem:last-child {
  border-bottom: none;
}

.AppNavigationItem-submenu .AppNavigationItem-link {
  display: block;
  padding: 10px;
  font-size: var(--textMd);
  color: var(--colorText);
}

.AppNavigationItem-submenu .AppNavigationItem-link.is-active,
.AppNavigationItem-submenu .AppNavigationItem-link:hover,
.AppNavigationItem-submenu .AppNavigationItem-link:focus {
  background: transparent;
  color: var(--colorBrand);
  text-decoration: none;
}

@media (max-width: 64rem) {
  .AppNavigationItem-submenu .AppNavigationItem-link {
    padding: 1em 0 1em 1.5em;
    font-weight: 400;
    font-size: 0.9em;
  }
}

@media (max-width: 1025px) {
  .AppNavigationItem-link::before {
    display: none;
  }
}

/*# sourceMappingURL=navigation-item.min.css.map */
.QuickSearchItem {
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.8rem 1rem;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 0.75em;
  transition: var(--animationBase);
}

.QuickSearchItem:hover,
.QuickSearchItem:active,
.QuickSearchItem:focus {
  text-decoration: none;
  background: #0000000a;
}

.QuickSearchItem-image {
  margin-right: var(--spaceSm);
  width: 4em;
}

.QuickSearchItem-image:empty {
  display: none;
}

.QuickSearchItem-content {
  flex: 1;
  font-size: var(--textMd);
}

.QuickSearchItem-name {
  transition: var(--animationBase);
}

.QuickSearchItem:hover .QuickSearchItem-name {
  color: var(--colorBrand);
}

.QuickSearchItem-subText {
  font-size: 0.85em;
  font-weight: 400;
  color: var(--colorTextSubtle);
}

/*# sourceMappingURL=quick-search-item.min.css.map */
.QuickSearch {
  color: var(--colorText);
  font-size: var(--textXs);
}

@media (max-width: 64rem) {
  .QuickSearch {
    font-size: 1em;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--layerModalZIndex);
    background: var(--colorShadeBg);
    pointer-events: none;
    transition: var(--animationBase);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    opacity: 0;
    padding: var(--spaceSm);
    perspective: 250px;
  }
  .QuickSearch.is-active {
    pointer-events: auto;
    opacity: 1;
  }
}

.QuickSearch-content {
  position: relative;
  z-index: var(--layerPageSecondaryZIndex);
}

@media (max-width: 64rem) {
  .QuickSearch-content {
    transform: translateY(80%) rotateX(-110deg) translateZ(-200px) scale(0.8);
    transform-origin: top center;
    transition: all 0.4s cubic-bezier(0.64, -0.19, 0.23, 1.33);
    background: var(--colorThemeAccent);
    position: relative;
    max-width: 100%;
    margin: auto;
    opacity: 0;
    width: 50rem;
  }
}

@media (max-width: 64rem) {
  .QuickSearch.is-active .QuickSearch-content {
    transform: translateY(0) rotateX(0) translateZ(0) scale(1);
    opacity: 1;
  }
}

.QuickSearch-search {
  position: relative;
  display: flex;
  align-items: center;
}

.QuickSearch-icon {
  position: absolute;
  top: 50%;
  left: 1.2em;
  width: 1.1em;
  height: auto;
  color: var(--colorBrand);
  transform: translateY(-50%);
}

.QuickSearch-input {
  flex: 1;
  line-height: 1.8;
  outline: none;
  font-size: 1em;
  min-width: 0;
  color: var(--colorText);
  background: transparent;
  padding: 0.6em 1em 0.6em calc(var(--spaceSm) + 2.4em);
  border: 0.125rem solid transparent;
  background: var(--colorBrandBg);
  border-radius: 0.25em;
  transition: var(--animationBase);
}

@media (max-width: 64rem) {
  .QuickSearch-input {
    padding: 1.2em 1.5em;
  }
}

.QuickSearch-input::-webkit-search-decoration,
.QuickSearch-input::-webkit-search-cancel-button,
.QuickSearch-input::-webkit-search-results-button,
.QuickSearch-input::-webkit-search-results-decoration {
  display: none;
}

.QuickSearch-input::placeholder {
  color: #999;
}

.QuickSearch-input:focus {
  border-color: var(--colorBrand);
}

.QuickSearch-input:focus + .QuickSearch-icon {
  stroke: currentColor;
  stroke-width: 20px;
}

.QuickSearch-cancel {
  cursor: pointer;
  transition: var(--animationBase);
  display: none;
  margin-left: var(--spaceSm);
}

@media (max-width: 64rem) {
  .QuickSearch-cancel {
    display: block;
  }
}

.QuickSearch-cancel svg {
  display: block;
  width: 1.2em;
  height: auto;
}

.QuickSearch-cancel:hover {
  color: var(--colorBrand);
}

.QuickSearch-results {
  overflow: auto;
  max-height: calc(100vh - 200px);
  position: absolute;
  left: 0;
  width: 100%;
  top: 100%;
  background: var(--colorThemeAccent);
  box-shadow: 0 0 20px #0000004d;
}

@media (max-width: 64rem) {
  .QuickSearch-results {
    max-height: calc(100vh - 120px);
    position: static;
    box-shadow: none;
    border-top: 1px solid #ededed;
  }
}

.QuickSearch-noResults {
  padding: 1em 1.8em;
  font-size: var(--textSm);
  font-weight: 600;
  color: var(--colorErrorsDefault);
}

.QuickSearch-title {
  font-weight: 700;
  padding: 0.8rem 1rem 0.2rem;
}

.QuickSearch-title:after {
  content: " ";
  display: block;
  width: 1.7em;
  height: 2px;
  background: var(--colorBrand);
  margin-top: 0.15em;
}

.Search-btn {
  padding: var(--spaceXs);
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: none;
}

@media (max-width: 64rem) {
  .Search-btn {
    display: block;
  }
}

.Search-btn svg {
  color: #dbdbdb;
}

@media (max-width: 48rem) {
  .Search-btn svg {
    color: #0095ff;
  }
}

/*# sourceMappingURL=quick-search.min.css.map */
.HeaderUser {
  position: relative;
  margin-left: var(--spaceLg);
}

@media (max-width: 64rem) {
  .HeaderUser {
    margin-left: 0;
  }
}

.HeaderUser-opener {
  display: flex;
  align-items: center;
  font-size: var(--textXs);
  font-weight: 600;
  color: #6e6e6e;
  padding: var(--spaceXs) var(--spaceSm);
  transition: var(--animationBase);
  white-space: nowrap;
  border-radius: 0.25rem;
}

.HeaderUser-opener:hover,
.HeaderUser-opener:active,
.HeaderUser-opener:focus {
  background: var(--colorBrandBg);
  text-decoration: none;
}

.HeaderUser-opener svg {
  color: #d9d9d9;
}

@media (max-width: 48rem) {
  .HeaderUser-opener svg {
    color: #0095ff;
  }
}

.HeaderUser-opener span {
  margin-left: var(--spaceXs);
}

@media (max-width: 48rem) {
  .HeaderUser-opener span {
    display: none;
  }
}

.HeaderUser-dropdown {
  position: absolute;
  top: calc(100% + 0.8rem);
  right: 0;
  z-index: var(--layerDropdownZIndex);
  transform-origin: top right;
  transition: var(--animationBase);
  transform: scale(0);
  opacity: 0;
}

.HeaderUser-dropdown.is-opened {
  transform: scale(1);
  opacity: 1;
}

/*# sourceMappingURL=header-user.min.css.map */
.CartHolder {
  box-shadow: 0 0 20px #00000030;
  color: var(--colorText);
  width: 23em;
}

@media (max-width: 32rem) {
  .CartHolder {
    width: calc(100vw - 2.5rem);
  }
}

.CartHolder-wrapper {
  display: flex;
  overflow: hidden;
}

.CartHolder-alert {
  font-size: var(--textXs);
}

.CartHolder-section {
  background: var(--colorThemeAccent);
  flex-shrink: 0;
  width: 100%;
  padding: var(--spaceSm);
}

.CartHolder-confHolder {
  transition: var(--animationBase);
}

.CartHolder-confHolder.is-active {
  transform: translateX(-100%);
  box-shadow: 0 0 20px #00000030;
}

.CartHolder-switcher {
  font-size: var(--textXs);
  display: flex;
  align-items: center;
  padding-bottom: var(--spaceSm);
  margin-bottom: var(--spaceSm);
  border-bottom: 1px solid var(--colorOutlines);
  cursor: pointer;
  transition: var(--animationBase);
}

.CartHolder-switcher.is-highlited {
  color: var(--colorErrorsDefault);
}

.CartHolder-switcher svg {
  margin-right: var(--spaceXs);
}

.CartHolder-switcher:hover,
.CartHolder-switcher:active,
.CartHolder-switcher:focus {
  text-decoration: underline;
}

.CartHolder-sum {
  display: flex;
  justify-content: space-between;
  font-size: var(--textSm);
  margin-bottom: var(--spaceSm);
}

.CartHolder-toCart {
  display: table;
  margin-left: auto;
}

/*# sourceMappingURL=cart-holder.min.css.map */
.HeaderCart {
  position: relative;
  margin-left: var(--spaceMd);
}

@media (max-width: 32rem) {
  .HeaderCart {
    margin: 0 var(--spaceXs) 0 0;
  }
}

.HeaderCart-opener {
  position: relative;
  border-radius: 0.25rem;
  padding: var(--spaceXs) var(--spaceSm);
  display: flex;
  align-items: center;
  font-size: var(--textXs);
  color: hsl(0, 0%, calc((var(--colorBrand-l) - 60) * -100%));
  cursor: pointer;
  transition: var(--animationBase);
}

.HeaderCart-opener svg {
  color: #d9d9d9;
}

@media (max-width: 48rem) {
  .HeaderCart-opener svg {
    color: #0095ff;
  }
}

.HeaderCart-opener:hover,
.HeaderCart-opener:active,
.HeaderCart-opener:focus {
  text-decoration: none;
  color: inherit;
  background: var(--colorBrandBg);
}

.HeaderCart-opener:hover-number,
.HeaderCart-opener:active-number,
.HeaderCart-opener:focus-number {
  color: white;
}

.HeaderCart-info {
  margin-left: var(--spaceXs);
}

.HeaderCart-number {
  color: var(--colorBrand);
  font-size: var(--textSm);
  display: block;
  text-align: left;
  margin-left: var(--spaceRg);
}

@media (max-width: 48rem) {
  .HeaderCart-number {
    display: none;
  }
}

.HeaderCart-plus {
  position: absolute;
  left: 23px;
  top: 5px;
  background-color: #fff;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 48rem) {
  .HeaderCart-plus {
    display: none;
  }
}

.HeaderCart-label {
  margin-left: var(--spaceXs);
}

@media (max-width: 32rem) {
  .HeaderCart-label {
    display: none;
  }
}

.HeaderCart-price {
  color: black;
  font-weight: bold;
  display: block;
  font-size: 1rem;
  margin-top: -5px;
}

@media (max-width: 48rem) {
  .HeaderCart-price {
    display: none;
  }
}

.HeaderCart-dropdown {
  position: absolute;
  z-index: var(--layerDropdownZIndex);
  top: calc(100% + 0.8rem);
  right: 0;
  transition: var(--animationBase);
  transform-origin: top right;
  transform: scale(0);
  opacity: 0;
}

@media (max-width: 64rem) {
  .HeaderCart-dropdown {
    right: -3em;
  }
}

.HeaderCart-dropdown.is-opened {
  transform: scale(1);
  opacity: 1;
}

/*# sourceMappingURL=header-cart.min.css.map */
.AppHeader-categories {
  border-top: 1px solid #ebebff;
  border-bottom: 1px solid #ebebff;
}

@media (max-width: 64rem) {
  .AppHeader-categories {
    display: none;
  }
}

.AppHeader-categoriesList {
  display: flex;
  flex-wrap: wrap;
}

.AppHeader-category {
  position: relative;
  font-size: var(--textSm);
  flex: 1 0 auto;
  max-width: calc(100% / 3);
}

.AppHeader-category:not(:last-child)::after {
  content: "";
  position: absolute;
  top: var(--spaceRg);
  bottom: var(--spaceRg);
  right: 0;
  width: 1px;
  background: var(--colorOutlines);
}

.AppHeader-categoryLink {
  color: inherit;
  text-decoration: none;
  padding: 1.2em var(--spaceMd);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--textSm);
  transition: var(--animationBase);
}

.AppHeader-categoryLink svg {
  margin-right: var(--spaceXs);
}

.AppHeader-categoryLink.is-active,
.AppHeader-categoryLink:hover,
.AppHeader-categoryLink:focus {
  background: transparent;
  color: var(--colorBrand);
  text-decoration: none;
}

/*# sourceMappingURL=header-categories.min.css.map */
.HeadTrustpoints {
  display: none;
}

.AppHeader {
  position: sticky;
  top: 0;
  color: #6e6e6e;
  background: var(--colorBodyBg);
  transition: var(--animationBase);
  z-index: var(--layerHeaderZIndex);
}

.AppHeader.is-sticked {
  box-shadow: 0 0 2em rgba(0, 0, 0, 0.12);
}

.AppHeader.is-up {
  transform: translateY(-100%);
  box-shadow: 0 0 2em rgba(0, 0, 0, 0);
}

.AppHeader-language {
  display: flex;
  align-items: center;
  border-left: 1px solid #6e6e6e;
  padding-left: var(--spaceRg);
}

.AppHeader-languageBtn {
  padding: 0;
  background: none;
  border: none;
  position: relative;
  margin-left: var(--spaceXxs);
  color: #6e6e6e;
  cursor: pointer;
  font-size: var(--textSm);
}

.AppHeader-languageBtn::after {
  content: "";
  position: absolute;
  height: 18px;
  width: 18px;
}

.AppHeader-holder {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "headerLeft headerTop" "headerLeft headerBottom";
  padding-top: var(--spaceSm);
  padding-bottom: var(--spaceSm);
}

@media (max-width: 64rem) {
  .AppHeader-holder {
    grid-template-areas: "headerLeft headerBottom";
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
}

.AppHeader-left {
  grid-area: headerLeft;
  display: flex;
  align-items: center;
}

.AppHeader-top {
  display: flex;
  align-items: center;
  grid-area: headerTop;
  margin-left: var(--spaceXl);
}

@media (max-width: 64rem) {
  .AppHeader-top {
    margin: 0;
  }
}

@media (max-width: 64rem) {
  .AppHeader-top .AppHeader-tel {
    display: none;
  }
}

.AppHeader-claim {
  color: hsl(0, 0%, calc((var(--colorContrastBg-l) - 60) * -100%));
  font-size: var(--textSm);
  margin: 0 var(--spaceXl) 0 0;
  max-width: 13em;
  font-weight: 600;
  display: none;
  line-height: var(--bodyLineHeight);
}

@media (max-width: 64rem) {
  .AppHeader-claim {
    display: none;
  }
}

.AppHeader-searchBar {
  flex: 1;
}

.AppHeader-contact {
  font-size: var(--textXs);
  white-space: nowrap;
}

@media (max-width: 64rem) {
  .AppHeader-contact {
    display: none;
  }
}

.AppHeader-contact a {
  display: block;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  margin-left: var(--spaceXs);
  color: #6e6e6e;
}

.AppHeader-contact a svg,
.AppHeader-contact a strong {
  color: black;
}

.AppHeader-contact a svg {
  margin-right: var(--spaceSm);
}

.AppHeader-contact a:hover,
.AppHeader-contact a:focus {
  color: var(--colorBrand);
}

.AppHeader-contact > span {
  margin-left: var(--spaceSm);
}

@media (max-width: 80rem) {
  .AppHeader-contact > span {
    display: none;
  }
}

.AppHeader-bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: headerBottom;
}

@media (max-width: 32rem) {
  .AppHeader-bottom {
    align-items: center;
  }
}

@media (min-width: 64.01rem) {
  .AppHeader-phoneBox,
  .AppHeader-searchOpener {
    display: none;
  }
}

.AppHeader-boxes {
  display: flex;
}

.AppHeader-logo {
  margin-right: var(--spaceXl);
}

@media (max-width: 32rem) {
  .AppHeader-logo {
    max-width: 7.5rem;
    margin-right: auto;
  }
}

@media (max-width: 64rem) {
  .AppHeader-logo img {
    max-height: 75px;
    width: auto;
  }
}

@media (max-width: 32rem) {
  .AppHeader-logo img {
    max-height: 58px;
  }
}

.AppHeader-hmb {
  display: flex;
  flex-direction: column;
  font-size: 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-left: var(--spaceLg);
}

.AppHeader-hmb svg {
  width: 1.6rem;
  height: auto;
  color: #d9d9d9;
}

@media (max-width: 48rem) {
  .AppHeader-hmb svg {
    color: var(--colorBrand);
  }
}

@media (max-width: 32rem) {
  .AppHeader-hmb {
    margin-left: var(--spaceMd);
  }
}

@media (min-width: 64.01rem) {
  .AppHeader-hmb {
    display: none;
  }
}

/*# sourceMappingURL=header.min.css.map */
.FooterNav-item {
  margin-bottom: var(--spaceXs);
}

.FooterNav-item a {
  color: inherit;
}

.FooterNav-item a:hover,
.FooterNav-item a:active,
.FooterNav-item a:focus {
  text-decoration: none;
}

/*# sourceMappingURL=footer-nav.min.css.map */
.AppFooter {
  color: #fff;
  background-color: #020f18;
}

.AppFooter-main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--spaceSm);
  padding-top: var(--spaceXl);
  padding-bottom: var(--spaceLg);
}

@media (max-width: 48rem) {
  .AppFooter-main {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 25rem) {
  .AppFooter-main {
    grid-template-columns: 1fr;
  }
}

.AppFooter-col {
  font-size: var(--textSm);
}

@media (max-width: 48rem) {
  .AppFooter-col {
    font-size: var(--textSm);
  }
}

@media (max-width: 48rem) {
  .AppFooter-col {
    width: 50%;
  }
  .AppFooter-col:first-child {
    width: 100%;
  }
  .AppFooter-col:not(:first-child) {
    margin-top: var(--spaceLg);
  }
}

.AppFooter-colInner {
  display: grid;
  grid-template-columns: 7em auto;
  grid-gap: var(--spaceMd) 0;
  align-items: flex-start;
}

.AppFooter-colInner svg {
  color: var(--colorBrand);
  margin-right: var(--spaceSm);
}

.AppFooter-colInner .label {
  display: flex;
  align-items: center;
}

.AppFooter a {
  color: inherit;
  text-decoration: none;
}

.AppFooter a:hover,
.AppFooter a:active,
.AppFooter a:focus {
  text-decoration: underline;
}

.AppFooter-title {
  font-size: var(--textMd);
  font-weight: 600;
  color: var(--colorBrand);
  margin: 0 0 var(--spaceLg);
}

.AppFooter-socials {
  color: var(--colorBrand);
}

.AppFooter-socials > a {
  display: flex;
  margin-bottom: 20px;
}

.AppFooter-socials > a .Social-desc span {
  padding-left: 18px;
  font-size: 1em;
  color: white;
}

.AppFooter-copy {
  font-size: var(--textXs);
  color: rgba(255, 255, 255, 0.8);
}

.AppFooter-copyInner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: var(--spaceLg) 0;
  border-top: 1px solid
    hsla(
      var(--colorBrand-h),
      calc(var(--colorBrand-s) * 1%),
      calc(var(--colorBrand-l) * 1%),
      0.4
    );
}

.AppFooter-copy p {
  display: flex;
  align-items: center;
  margin: 0;
}

@media (max-width: 25rem) {
  .AppFooter-copy p:first-child {
    width: 100%;
    margin-bottom: var(--spaceXs);
  }
}

.AppFooter-copy svg {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}

@media (max-width: 25rem) {
  .AppFooter-copy svg {
    width: 1.4em;
  }
}

/*# sourceMappingURL=footer.min.css.map */
.AppForm form,
.AppForm-holder {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 32rem) {
  .AppForm form,
  .AppForm-holder {
    grid-template-columns: 1fr;
  }
}

.AppForm-subTitle {
  border-top: 1px dashed var(--colorOutlines);
  padding-top: var(--spaceSm);
}

.AppForm-perex {
  margin-bottom: var(--spaceMd);
}

.AppForm-col {
  position: relative;
}

.AppForm-col.is-inline {
  display: flex;
  flex-wrap: wrap;
}

.AppForm-col.is-right {
  justify-self: flex-end;
}

.AppForm-label {
  font-size: var(--textSm);
  font-weight: 700;
  margin: 0 0 0.2em;
  display: block;
}

.AppForm-label.is-danger {
  color: var(--colorErrorsDefault);
}

.AppForm-label.is-required:after {
  content: "*";
  color: var(--colorErrorsDefault);
  margin-left: 0.15em;
}

.AppForm-label.is-inline {
  flex: 1;
  margin-left: var(--spaceSm);
}

.AppForm-label + .FormBubble {
  top: 0.25rem;
  transform: none;
}

.AppForm-element {
  position: relative;
}

.AppForm-bubble {
  position: absolute;
  top: var(--sizeInputPaddingHorizontal);
  right: 0.5em;
  transform: translateY(-50%);
}

.AppForm-bubble.is-inline {
  position: relative;
  top: 0;
  right: 0;
  transform: none;
  margin: 0.15em 0 0 var(--spaceSm);
}

select + .AppForm-bubble {
  right: 1.9em;
}

.AppForm-gdpr {
  font-size: var(--textXs);
  padding-bottom: 0.4em;
}

.AppForm-underNotes {
  font-size: var(--textXs);
}

.AppForm-underNotes span {
  color: var(--colorErrorsDefault);
}

/*# sourceMappingURL=form.min.css.map */
.UserLoginActions {
  display: flex;
  margin-top: var(--spaceMd);
}

.UserLoginActions-link {
  font-size: var(--textSm);
  transition: var(--animationBase);
  font-weight: 200;
}

.UserLoginActions-link svg {
  width: 1em;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -0.16em;
  margin-right: 0.4em;
}

.UserLoginActions-link:first-child {
  border-right: 1px solid var(--colorOutlines);
  padding-right: var(--spaceSm);
  margin-right: var(--spaceSm);
}

.UserLoginActions-link:hover,
.UserLoginActions-link:active,
.UserLoginActions-link:focus {
  text-decoration: none;
}

/*# sourceMappingURL=user-login-actions.min.css.map */
.ButtonSocial {
  display: flex;
  align-items: center;
  background: #365899;
  color: #fff;
  padding: 7px 24px 7px 12px;
  min-width: 13rem;
  margin-bottom: 10px;
  cursor: pointer;
  transition: var(--animationBase);
  font-size: var(--textSm);
  text-align: center;
}

.ButtonSocial:hover,
.ButtonSocial:active,
.ButtonSocial:focus {
  background: #2b477b;
  color: #fff;
  text-decoration: none;
}

.ButtonSocial span {
  flex: 1;
}

.ButtonSocial.is-google {
  background: #dc4a38;
}

.ButtonSocial.is-google:hover,
.ButtonSocial.is-google:active,
.ButtonSocial.is-google:focus {
  background: #c83523;
}

/*# sourceMappingURL=button.min.css.map */
.UserLoginSocials {
  border-left: 1px solid var(--colorOutlines);
  margin-left: var(--spaceLg);
  padding: 0 var(--spaceMd) var(--spaceSm) var(--spaceLg);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 48rem) {
  .UserLoginSocials {
    width: 100%;
    padding: var(--spaceMd) 0 0 0;
    margin: var(--spaceMd) 0 0 0;
    border: none;
    border-top: 1px solid var(--colorOutlines);
  }
}

.UserLoginSocials-title {
  font-size: var(--textMd);
  font-weight: 400;
  margin-bottom: var(--spaceSm);
}

.UserLoginSocials-buttons {
  display: flex;
  flex-direction: column;
}

/*# sourceMappingURL=user-login-socials.min.css.map */
.AppPopup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--layerModalZIndex);
  background: var(--colorShadeBg);
  pointer-events: none;
  transition: var(--animationBase);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  padding: var(--spaceSm);
  perspective: 250px;
}

.is-active.AppPopup {
  pointer-events: auto;
  opacity: 1;
  visibility: visible;
}

.AppPopup-inner {
  transform: translateY(80%) rotateX(-110deg) translateZ(-200px) scale(0.8);
  transform-origin: top center;
  transition: all 0.4s cubic-bezier(0.64, -0.19, 0.23, 1.33);
  background: var(--colorThemeAccent);
  padding: var(--spaceMd);
  position: relative;
  max-width: 100%;
  margin: auto;
  opacity: 0;
}

.AppPopup.is-active .AppPopup-inner {
  transform: translateY(0) rotateX(0) translateZ(0) scale(1);
  opacity: 1;
}

.AppPopup-close {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--colorBrand);
  color: hsl(0, 0%, calc((var(--colorBrand-l) - 60) * -100%));
  width: 3.2em;
  height: 3.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: var(--animationBase);
}

.AppPopup-close:hover,
.AppPopup-close:active,
.AppPopup-close:focus {
  background: hsl(
    var(--colorBrand-h),
    calc(var(--colorBrand-s) * 1%),
    calc(var(--colorBrand-l) * 0.7 * 1%)
  );
}

.AppPopup--1,
.AppPopup--4,
.AppPopup--7,
.AppPopup--14 {
  justify-content: flex-start;
}

.AppPopup--3,
.AppPopup--6,
.AppPopup--9,
.AppPopup--16 {
  justify-content: flex-end;
}

.AppPopup--1,
.AppPopup--2,
.AppPopup--3 {
  align-items: flex-start;
}

.AppPopup--7,
.AppPopup--8,
.AppPopup--9 {
  align-items: flex-end;
}

.AppPopup--14,
.AppPopup--16 {
  align-items: stretch;
}

.AppPopup-inner {
  margin: 0;
}

.AppPopup--5 .AppPopup-inner {
  margin: auto;
}

.AppPopup-inner.is-simple {
  padding: 0;
  background: transparent;
}

.AppPopup-close.is-small {
  width: 2em;
  height: 2em;
}

.AppPopup-title {
  font-size: var(--textMd);
  margin: -1em -1em 1em;
  padding: 0.7em 1em;
  padding-right: 3em;
  border-bottom: 1px solid var(--colorOutlines);
}

/*# sourceMappingURL=popup.min.css.map */
.UserLoginPopup {
  display: flex;
  flex-wrap: wrap;
  max-width: 41rem;
}

.UserLoginPopup-form {
  flex: 1;
  max-width: 17em;
}

@media (max-width: 48rem) {
  .UserLoginPopup-form {
    max-width: 100%;
  }
}

.UserLoginPopup-messages {
  font-size: var(--textXs);
  width: 100%;
}

/*# sourceMappingURL=user-login-popup.min.css.map */
.SpinnerGlobal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--colorShadeBg);
  pointer-events: none;
  opacity: 0;
  z-index: var(--layerSpinnerZIndex);
  transition: var(--animationBase);
}

.SpinnerGlobal.is-active {
  pointer-events: auto;
  opacity: 1;
}

.SpinnerGlobal-spinner {
  margin: auto;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border-radius: 50%;
  display: block;
  animation: spinner 2s linear infinite;
}

.SpinnerGlobal-spinner::before,
.SpinnerGlobal-spinner::after {
  display: block;
  border-radius: 50%;
  content: "";
  width: 25px;
  height: 25px;
  background-color: var(--colorBrand);
  animation: pulse 1s alternate linear infinite;
}

.SpinnerGlobal-spinner::before {
  margin-left: 25px;
}

.SpinnerGlobal-spinner::after {
  margin-top: -25px;
  margin-left: -25px;
}

@keyframes spinner {
  0% {
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
  }
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
}

/*# sourceMappingURL=spinner-global.min.css.map */
</style>
