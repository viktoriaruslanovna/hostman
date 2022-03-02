import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useUsers() {
  const users = ref([]);

  const fetch = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      users.value = response.data;
    } catch {
      alert('Ошибка');
    }
  };

  onMounted(fetch);

  return { users };
}
