<script setup lang="ts">
import { ref } from 'vue';

const audioPlayer = ref<HTMLAudioElement | null>(null);
const currentTrack = ref('path/to/your/music/file.mp3'); // Replace with your track path
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);

const togglePlay = () => {
    if (!audioPlayer.value) return;
    if (isPlaying.value) {
        audioPlayer.value.pause();
    } else {
        audioPlayer.value.play();
    }
    isPlaying.value = !isPlaying.value;
};

const updateDuration = () => {
    if (audioPlayer.value) {
        duration.value = audioPlayer.value.duration;
    }
};

const updateCurrentTime = () => {
    if (audioPlayer.value) {
        currentTime.value = audioPlayer.value.currentTime;
    }
};
</script>

<template>
    <div class="player-bar">
        <audio ref="audioPlayer" :src="currentTrack" @loadedmetadata="updateDuration"
            @timeupdate="updateCurrentTime"></audio>
        <button @click="togglePlay">{{ isPlaying ? 'Pause' : 'Play' }}</button>
        <div>Current Time: {{ currentTime }}</div>
        <div>Duration: {{ duration }}</div>
    </div>
</template>