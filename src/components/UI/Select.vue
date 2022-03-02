<template>
  <div class="wrapper">
    <select v-model="selectedSort" @change="changeSort">
      <!-- <option disabled value="">Выберите сортировку</option> -->
      <option v-for="option in options" :key="option.id" :value="option.sort">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    selectedSort: {
      type: String,
    },
    options: {
      type: Array,
    },
  },

  methods: {
    changeSort(event) {
      this.$emit('update:selectedSort', event.target.value);
    },
  },
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  background: url('../../media/icons/burger.png') no-repeat center
    rgb(245, 245, 245);
  background-size: 100%;
}

select {
  width: 60px;
  height: 60px;
  padding: 15px 20px;
  font-size: 19px;
  border: none;
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

@media screen and (max-width: 768px) {
  select {
    width: 40px;
    height: 40px;
  }
}
</style>
