<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: 'MyButton',
};
</script>

<style>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 10px;
  font-size: 21px;
  color: rgb(48, 48, 48);
  border: 0;
  border-radius: 12px;
  background: rgb(245, 245, 245);
}

button:hover {
  background-color: rgb(245, 230, 220);
}

@media screen and (max-width: 768px) {
  button {
    font-size: 17px;
  }
}
</style>
