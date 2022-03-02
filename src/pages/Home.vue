<template>
  <div class="home">
    <div class="type__block">
      <Title>Главная</Title>
      <p>
        Здесь вы можете делиться информацией, а также обсуждать ее с другими
        пользователями
      </p>
      <MyButton class="btn" @click="$router.push('/post')"
        >Перейти к постам</MyButton
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home {
}

.title {
  width: fit-content;
}

.btn {
  margin: 10px 0;
}

.btn:hover {
  background-color: rgba(179, 111, 102, 0.7);
}
</style>
