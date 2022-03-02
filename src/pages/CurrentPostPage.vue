<template>
  <div class="current__post__page">
    <div class="post">
      <div class="user__information">
        <p class="username">
          {{ userInformation.username }}
        </p>
        <p class="name">{{ userInformation.name }}</p>
      </div>
      <div class="post__information">
        <p class="title">{{ post.title }}</p>
        <hr />
        <p class="body">{{ post.body }}</p>
      </div>

      <div class="btns">
        <ButtonLike />
      </div>
    </div>
    <Comments :postId="post.id" />
  </div>
</template>

<script>
import { usePosts } from '@/hooks/usePosts.js';
import { useUsers } from '@/hooks/useUsers.js';
import Comments from '@/components/comments/Comments';

export default {
  components: {
    Comments,
  },

  data() {
    return {};
  },

  computed: {
    post() {
      let post = '';
      this.posts.find(e => {
        e.id == this.$route.params.id ? (post = e) : console.log();
      });
      return post;
    },

    userInformation() {
      let userInformation = '';
      this.users.forEach(e => {
        e.id === this.post.userId ? (userInformation = e) : console.log();
      });
      return userInformation;
    },
  },
  setup() {
    const { posts } = usePosts();
    const { users } = useUsers();

    return {
      posts,
      users,
    };
  },
};
</script>

<style scoped>
hr {
  width: 60%;
  height: 1px;
  margin: 0 auto;
  border: 0px;
  background-color: rgb(140, 140, 140, 0.8);
}

.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 40%;
  margin: 60px auto;
  background-color: rgba(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.user__information {
  padding: 20px;
  background-color: rgb(245, 245, 245, 0.7);
}

.username {
  font-size: 30px;
}

.name {
  padding-top: 5px;
  font-size: 20px;
}

.post__information {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
}

.title {
  padding-bottom: 20px;
  font-size: 28px;
}

.body {
  padding-top: 20px;
}

.btns {
  display: flex;
  justify-content: center;
  padding: 10px;
}

@media screen and (max-width: 1124px) {
  .post {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  .post {
    width: 90%;
  }

  .username {
    font-size: 24px;
  }

  .name {
    font-size: 14px;
  }

  .title {
    font-size: 22px;
  }

  /* .body {
    font-size: 19px;
  } */
}
</style>
