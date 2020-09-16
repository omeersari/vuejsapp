<template>
  <div class="galery" v-if="galery.length > 0">
    <h1>GALERY</h1>
    <vueper-slides
      ref="vueperslides1"
      :touchable="false"
      fade
      :autoplay="false"
      :bullets="false"
      @slide="
        $refs.vueperslides2.goToSlide($event.currentSlide.index, {
          emit: false
        })
      "
      fixed-height="600px"
    >
      <vueper-slide v-for="(slide, i) in galery" :key="i" :image="`${API.IMAGE_URL}${slide}`">
      </vueper-slide>
    </vueper-slides>

    <vueper-slides
      class="no-shadow thumbnails"
      ref="vueperslides2"
      @slide="
        $refs.vueperslides1.goToSlide($event.currentSlide.index, {
          emit: false
        })
      "
      :visible-slides="galery.length"
      fixed-height="75px"
      :bullets="false"
      :touchable="false"
      :gap="2.5"
      :arrows="false"
    >
      <vueper-slide
        v-for="(slide, i) in galery"
        :key="i"
        :image="`${API.IMAGE_URL}${slide}`"
        @click.native="$refs.vueperslides2.goToSlide(i)"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import API from "../../api";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Galery",
  data() {
    return {
      API,
    };
  },
  components: { VueperSlides, VueperSlide },
  props: {
    galery: {
      type: Array,
      required: true
    }
  },
};
</script>

<style scoped>
.galery {
  width: 90%;
  margin: 10px auto 0 auto;
  background-color: rgba(202, 196, 206, 0.4);
  padding: 20px;
}

.galery h1 {
  color: white;
}

.thumbnails {
  margin: 10px auto 10px auto;
  max-width: 600px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}
</style>
