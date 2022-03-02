<template>
  <div class="app">
    <Header />
    <div class="page__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  color: rgba(0, 0, 0, 0.8);
}

h2 {
  padding-bottom: 10px;
  font-size: 28px;
  font-weight: normal;
  text-align: center;
  color: rgb(48, 48, 48);
}

a {
  font-size: 20px;
}

p {
  font-size: 25px;
}

.app {
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgb(245, 245, 245);
}

.page__content {
  margin-top: 70px;
  padding: 10px 0;
}

.type__block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  margin: 130px 22%;
  padding: 40px 20px;
  text-align: center;
  color: rgb(48, 48, 48);
  border-radius: 5px;
  background-color: rgb(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

@media screen and (max-width: 768px) {
  a {
    font-size: 17px;
  }

  p {
    font-size: 19px;
  }

  .type__block {
    margin: 90px 6%;
    padding: 30px 10px;
  }
}

@font-face {
  font-family: 'Roboto';
  src: url('./media/fonts/Roboto/Roboto-Light.ttf') format('truetype');
}
</style>
