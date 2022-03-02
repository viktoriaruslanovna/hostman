<template>
  <div v-if="visibleModal" @click="hideDialog" class="create__post">
    <form @click.stop class="form">
      <h2>Создать пост</h2>
      <input v-model="post.title" placeholder="Название" />
      <input v-model="post.body" placeholder="Описание" />
      <MyButton @click="createPost">Создать</MyButton>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePostModal',

  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },

  props: {
    visibleModal: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hideDialog() {
      this.$emit('update:visibleModal', false);
    },

    createPost(e) {
      e.preventDefault();
      this.post.id = Date.now();
      this.$emit('addPost', this.post);
      this.$emit('update:visibleModal', false);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style scoped>
.create__post {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  width: 40%;
  margin: 0 auto;
  padding: 30px 0;
  border-radius: 20px;
  background-color: rgb(245, 230, 220);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

@media screen and (max-width: 1124px) {
  .form {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  .form {
    width: 80%;
  }
}
</style>
