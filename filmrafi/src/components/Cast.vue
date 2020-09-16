<template>
  <div class="cast">
    <div class="top">
      <h1>ACTORS</h1>
      <div class="right">
        <p class="showAll">Show All</p>
        <label class="switch">
          <input type="checkbox" v-model="showAll" @click="change" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <div class="actors">
      <div v-for="(actor, id) in myCast" :key="id" class="actorCard">
        <img
          class="actorImg"
          :src="`${API.IMAGE_URL}${actor.profile_path}`"
        />
        <p style="text-align: center">{{ actor.name }}</p>
        <p style="font-style: italic; text-align: center">
          {{ actor.character }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../../api";
export default {
  name: "Cast",
  props: {
    cast: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showAll: false,
      API
    };
  },
  methods: {
    change() {
      this.showAll = !this.showAll
    }
  },
  computed: {
    myCast() {
      if (this.showAll === true) {
        return this.cast
      } else {
        return this.cast.filter((item) => item.order < 7)
      }
    }
  }
};
</script>

<style scoped>
.cast {
  text-align: center;
  margin: 120px auto 0 auto;
  color: white;
  width: 90%;
  background-color: rgba(202, 196, 206, 0.4);

}

.top {
  display: flex;
  justify-content: space-between;
  padding: 1em;
}

.right {
  display: flex;
  justify-content: center;
}
.right p {
  margin-top: 4px;
  margin-right: 10px;
  font-size: 20px;
}
.actors {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.actorCard {
  width: 200px;
  padding-top: 10px;
  margin-bottom: 10px;
  color: white;
}

.noPhoto {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  color: black;
}

.actors img {
  margin-left: 15px;
}

.actorImg {
  width: 175px;
  height: auto;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
