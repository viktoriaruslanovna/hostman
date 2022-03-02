import { ref, onMounted } from 'vue';
import axios from 'axios';

export function usePosts() {
  const posts = ref([]);

  const fetching = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {},
      );
      posts.value = response.data;
    } catch {
      alert('Ошибка');
    }
  };

  onMounted(fetching);

  return { posts };
}
