import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useComments() {
  const comments = ref([]);

  const fetching = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/comments?_limit=100',
        {},
      );
      comments.value = response.data;
    } catch {
      alert('Ошибка');
    }
  };

  onMounted(fetching);

  return { comments };
}
