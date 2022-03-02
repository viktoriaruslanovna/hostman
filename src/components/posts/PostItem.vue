<template>
  <div class="post">
    <div class="post__username">
      <p>{{ userInformation.username }}</p>
    </div>
    <div class="post__information">
      <p class="title">{{ post.title }}</p>
      <p class="body">{{ previewBody }}</p>
    </div>
    <div class="post__btns">
      <ButtonLike />
      <ButtonComment />
      <ButtonOpen @click="$router.push(`/post/${post.id}`)" />
    </div>
  </div>
</template>

<script>
import MyButton from '../UI/MyButton.vue';
export default {
  components: { MyButton },
  props: {
    post: {
      type: Object,
    },
    users: {
      type: Object,
    },
  },

  data() {
    return {};
  },

  computed: {
    userInformation() {
      let userInformation = '';
      this.users.forEach(e => {
        e.id === this.post.userId ? (userInformation = e) : console.log();
      });
      return userInformation;
    },

    previewBody() {
      return this.post.body.substring(0, 100) + '...';
    },
  },
};
</script>

<style scoped>
.post {
  width: 60%;
  margin: 35px auto;
  padding: 10px;
}

.post__username {
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
}

.post__information {
  padding-top: 12px;
}

.title {
  padding-bottom: 5px;
  font-size: 28px;
}

.body {
  padding-bottom: 10px;
}

.post__btns {
  display: flex;
  justify-content: end;
  padding: 5px 0;
}

@media screen and (max-width: 768px) {
  .post {
    width: 90%;
  }

  .title {
    padding-bottom: 5px;
    font-size: 23px;
  }
}
</style>
