<template>
  <div class="header">
    <ul class="header__menu">
      <HeaderItem
        v-for="headerItem in headerItems"
        :headerItem="headerItem"
        :key="headerItem.link"
      />
    </ul>
  </div>
</template>

<script>
import HeaderItem from '@/components/header/HeaderItem';
export default {
  components: {
    HeaderItem,
  },

  data() {
    return {
      headerItems: [
        { title: 'Главная', link: '/home' },
        { title: 'Посты', link: '/post' },
        { title: 'Личный кабинет', link: '/login' },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  text-align: center;
  background-color: rgba(179, 111, 102, 0.7);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.header__menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 23%;
  font-size: 25px;
}

@media screen and (max-width: 1124px) {
  .header__menu {
    margin: 0 8%;
  }
}

@media screen and (max-width: 768px) {
  .header__menu {
    margin: 0;
    font-size: 18px;
  }
}
</style>
