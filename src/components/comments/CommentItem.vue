<template>
  <div class="comment">
    <div class="comment__information">
      <p class="email">{{ comment.email }}</p>
      <p class="title">{{ comment.name }}</p>
    </div>
    <p class="comment__body">{{ comment.body }}</p>
  </div>
  <hr />
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
    },
  },
};
</script>

<style scoped>
hr {
  width: 92%;
  height: 1px;
  margin: 0 auto;
  border: 0px;
  background-color: rgb(140, 140, 140, 0.6);
}

.comment {
  width: 92%;
  margin: 20px auto;
  text-align: start;
}

.comment__information {
  padding: 5px;
}

.email {
  font-size: 20px;
  color: rgb(130, 130, 130);
}

.title {
  font-size: 27px;
}

.comment__body {
  padding: 10px 10px 0;
  text-align: start;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 14px;
  }

  .email {
    font-size: 21px;
  }

  .comment__body {
    font-size: 19px;
  }
}
</style>
