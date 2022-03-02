<template>
  <div class="comments">
    <div class="comments__header">Комментарии</div>
    <CommentItem
      v-for="comment in postComment"
      :key="comment.id"
      :comment="comment"
      :postId="postId"
    />
  </div>
</template>

<script>
import { useComments } from '@/hooks/useComments.js';
import CommentItem from '@/components/comments/CommentItem';

export default {
  components: {
    CommentItem,
  },

  props: {
    postId: {
      type: Number,
    },
  },

  computed: {
    postComment() {
      return this.comments.filter(e => e.postId === this.postId);
    },
  },

  setup() {
    const { comments } = useComments();

    return {
      comments,
    };
  },
};
</script>

<style scoped>
.comments {
  width: 50%;
  margin: 0 auto 30px;
  text-align: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.comments__header {
  padding: 30px;
  font-size: 25px;
  background-color: rgba(179, 111, 102, 0.7);
}

@media screen and (max-width: 1124px) {
  .comments {
    width: 70%;
  }
}

@media screen and (max-width: 768px) {
  .comments {
    width: 95%;
  }
}
</style>
