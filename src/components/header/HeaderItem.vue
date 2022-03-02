<template>
  <li @click="$router.push(headerItem.link)" class="header__item">
    {{ headerItem.title }}
  </li>
</template>

<script>
export default {
  props: {
    headerItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.header__item {
  color: rgb(48, 48, 48);
  list-style: none;
}
</style>
