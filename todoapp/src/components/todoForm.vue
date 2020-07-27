
<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="row mt-3">
        <div class="col-12">
          <label>Title</label>
          <input type="text" name="title" class="w-100" v-model="title" />
        </div>
      </div>
        <div class="row mt-3">
          <div class="col-12">
            <label>Detail</label>
            <input type="text" name="detail" class="w-100" v-model="detail" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <label>Status</label>
            <select class="w-100 px-1 py-1" v-model="status">
              <template v-for="status in Object.keys(STATUSSES)">
                    <option :key="status" :value="STATUSSES[status].VALUE">{{ STATUSSES[status].TEXT }}</option>
            </template>
            </select>
          </div>
        </div>
        <div class="row mt-4">
            <div class="col-12">
                <button type="submit" class="w-100 btn btn-success text-white" :class="isUpdate ? 'bg-danger' : 'bg-success'">
                    {{isUpdate ? 'UPDATE' : 'Add New'}}
                </button>
            </div>
        </div>
    </form>
  </div>
  
</template>

<script>
import { STATUSSES } from "../statusses";
export default {
  name: "todoForm",
  props: {
    msg: String
  },
  data() {
    return {
      title: "",
      detail: "",
      status: "",
      isUpdate: false,
      STATUSSES
    };
  },
  methods: {
    submitForm() {
      const formData = {
        title: this.title,
        detail: this.detail,
        status: this.status
        };
        this.$emit('onSubmit', formData);
        this.clearForm();
    },
    clearForm() {
      this.title = "";
      this.detail = "";
      this.status= "";
      this.isUpdate= false;
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

