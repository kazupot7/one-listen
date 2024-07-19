<script setup lang="ts">

import { invoke } from '@tauri-apps/api'

import { ref } from 'vue'

const greeting = ref('Hello, world!')

invoke('greet', { name: 'xjh' }).then((response) => {
  greeting.value = response as string
}) 

</script>


<template>
    <div>
        <a> {{ greeting }}</a>
    </div>
</template>