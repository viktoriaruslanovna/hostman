<template>
  <button>
    <img src="@/media/icons/plus.svg" />
  </button>
</template>

<script>
export default {
  name: 'ButtonPlus',
};
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;
  align-items: center;
}
button {
  padding: 7px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

button:hover {
  background-color: rgb(245, 230, 220);
}

@media screen and (max-width: 768px) {
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
