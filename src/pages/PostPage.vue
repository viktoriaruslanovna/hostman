<template>
  <div class="post__page">
    <div class="btns__wrapper">
      <!-- <ButtonPlus class="btn__plus" @click="showDialog" /> -->
      <Select v-model:selectedSort="selectedSort" :options="options" />
    </div>
    <Title>Посты</Title>
    <!-- <CreatePostModal @addPost="addPost" v-model:visibleModal="visibleModal" /> -->

    <PostItem
      v-for="post in sortedPosts"
      :key="post.id"
      :users="users"
      :post="post"
    />
  </div>
</template>

<script>
import { usePosts } from '@/hooks/usePosts.js';
import { useUsers } from '@/hooks/useUsers.js';
import { useSortedPosts } from '@/hooks/useSortedPosts.js';
import PostItem from '@/components/posts/PostItem';
import { mapMutations, mapState } from 'vuex';

export default {
  components: {
    PostItem,
  },

  data() {
    return {
      visibleModal: false,
      options: [
        { id: '1', name: 'По названию', sort: 'title' },
        { id: '1', name: 'По описанию', sort: 'body' },
      ],
    };
  },

  methods: {
    ...mapState({
      authorization: state => state.authorization,
    }),

    ...mapMutations({
      setAuthorization: 'setAuthorization',
    }),

    showDialog() {
      this.visibleModal = true;
    },

    // addPost(newPost) {
    //   fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title: newPost.title,
    //       body: newPost.body,
    //       userId: 1,
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   }).then(response => response.json());
    // },
  },

  setup() {
    const { posts } = usePosts();
    const { users } = useUsers();
    const { selectedSort, sortedPosts } = useSortedPosts(posts);

    return {
      posts,
      users,
      selectedSort,
      sortedPosts,
    };
  },
};
</script>

<style>
.btns__wrapper {
  position: fixed;
  left: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
}
</style>
