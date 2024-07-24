import { ref } from 'vue';
import { invoke } from '@tauri-apps/api';

export function useGreeting() {
    const greeting = ref('Hello, world!');

    const fetchGreeting = (name: string) => {
        invoke('greet', { name }).then((response) => {
            greeting.value = response as string;
        }).catch((error) => {
            console.error('Error fetching greeting:', error);
            greeting.value = 'Error fetching greeting';
        });
    };

    return { greeting, fetchGreeting };
}