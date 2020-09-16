<template>
  <div>
    <Container class="small">
      <paginate
        v-model="pageNum"
        :page-count="20"
        :page-range="3"
        :margin-pages="1"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'pageItem'"
        :active-class="'activeC'"
      >
      </paginate>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container";
export default {
  name: "Pagination",
  components: {
    Container
  },
  props: ['pageNumber'],
  data() {
    return {
      pageNum: parseInt(this.pageNumber)
    };
  },
  methods: {
    clickCallback(pageNum) {
      this.$emit("changeRoute", pageNum);
    }
  }
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(202, 196, 206, 0.4);
  color: white;
  margin-top: 15px;
  list-style-type: none;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
}

.pageItem {
  margin-left: 20px;
  padding: 10px;
  opacity: 1;
}

.pageItem:hover {
  background-color: white;
  color: black;
  border-radius: 3px;
}

.activeC {
  border: 1px black solid;
  background-color: white;
  color: black;
}

@media only screen and (max-width: 820px) {
  .pageItem {
    margin-left: 1px;
  }
}
</style>
