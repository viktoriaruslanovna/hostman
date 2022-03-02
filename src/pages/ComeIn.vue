<template>
  <div class="come__in__page">
    <form class="type__block">
      <Title>{{ needData.title }}</Title>
      <input
        type="text"
        v-for="input in needData.inputs"
        :placeholder="input"
      />
      <a @click="$router.push(needData.link)">{{ needData.subtitle }}</a>
      <MyButton>{{ needData.title }}</MyButton>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      log: '',
      pageItem: {
        logIn: {
          title: 'Вход',
          subtitle: 'Заегистрироваться',
          link: '/signup',
          inputs: ['Логин', 'Пароль'],
          button: 'Вход',
          // handler: log,
        },
        signUp: {
          title: 'Регистрация',
          subtitle: 'У вас уже есть аккаунт?',
          link: '/login',
          inputs: ['Логин', 'Почта', 'Пароль'],
          button: 'Регистрация',
          // handler: sign,
        },
        home: {
          title: 'Главная',
          subtitle:
            'Здесь вы можете делиться информацией, а также обсуждать ее с другими пользователями',
          button: 'Попробовать создать пост',
          // handler: comeToPost,
        },
      },
    };
  },

  computed: {
    needData() {
      let data = '';
      this.$route.path === '/login'
        ? (data = this.pageItem.logIn)
        : (data = this.pageItem.signUp);
      return data;
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 10px;
}

a:hover {
  color: rgba(179, 111, 102, 0.7);
}

@media screen and (min-width: 1025px) {
  .type__block {
    margin: 90px 30%;
  }
}
</style>
