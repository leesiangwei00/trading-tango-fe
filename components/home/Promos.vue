<template>
  <div class="section">
    <div class="promo">
      <p class="promo-title">{{ $t("PromoSection1") }}</p>
      <div>
        <img
          src="~/assets/images/Promo_1B.png"
          alt=""
          class="m-auto md:absolute md:bottom-8 md:right-8 w-80"
        />
        <div>
          <div>
            <div class="bullet"><p>1</p></div>
            <div>
              <p class="point">{{ $t("Promo1") }}</p>
              <p class="desc">{{ $t("Promo1Desc") }}</p>
            </div>
          </div>
          <div>
            <div class="bullet"><p>2</p></div>
            <div>
              <p class="point">{{ $t("Promo2") }}</p>
              <p class="desc">{{ $t("Promo2Desc") }}</p>
            </div>
          </div>
          <div class="buttons">
            <Button label="CreateLiveAccount" />
            <Button label="DownloadMT4Platform" />
          </div>
        </div>
      </div>
    </div>
    <div class="promo">
      <p class="promo-title md:!ms-[50%]">
        {{ $t("PromoSection2") }}
      </p>
      <div>
        <img
          src="~/assets/images/Promo_2B.png"
          alt=""
          class="md:absolute md:bottom-8 md:left-0 w-[30rem] m-auto"
        />
        <div class="md:!ms-[50%]">
          <div>
            <div class="bullet"><p>3</p></div>
            <div>
              <p class="point">{{ $t("Promo3") }}</p>
              <p class="desc">{{ $t("Promo3Desc") }}</p>
              <div class="enjoy-items">
                <p class="desc">{{ $t("toenjoy") }}</p>
                <div class="bullet"><p>1</p></div>
              </div>
            </div>
          </div>
          <div>
            <div class="bullet"><p>4</p></div>
            <div>
              <p class="point">{{ $t("Promo4") }}</p>
              <p class="desc">{{ $t("Promo4Desc") }}</p>
              <div class="enjoy-items">
                <p class="desc">{{ $t("toenjoy") }}</p>
                <div class="bullet"><p>1</p></div>
                <div class="bullet"><p>2</p></div>
                <div class="bullet"><p>3</p></div>
              </div>
            </div>
          </div>
          <div class="buttons">
            <Button label="CreateLiveAccount" class="w-fit mx-2" />
            <Button label="DownloadMT4Platform" class="w-fit mx-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../base/Button.vue";
</script>
