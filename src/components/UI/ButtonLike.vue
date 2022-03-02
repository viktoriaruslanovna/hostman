<template>
  <button>
    <img src="@/media/icons/like.svg" />
  </button>
</template>

<script>
export default {
  name: 'ButtonLike',
};
</script>

<style scoped>
img {
  width: 25px;
  height: 25px;
  align-items: center;
}

button:hover {
  background-color: rgba(179, 111, 102, 0.7);
}
</style>
