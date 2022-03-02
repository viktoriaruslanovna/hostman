<template>
  <h1><slot></slot></h1>
</template>

<script>
export default {
  name: 'Title',
};
</script>

<style>
h1 {
  margin: 25px;
  font-size: 45px;
  font-weight: normal;
  text-align: center;
  color: rgb(48, 48, 48);
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 35px;
  }
}
</style>
