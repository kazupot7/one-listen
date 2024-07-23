<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window';

let appConfig = useAppConfig();
const title = appConfig.title;

const minimizeWindow = async () => {
    await appWindow.minimize();
};
const toggleMaximizeWindow = async () => {
    await appWindow.toggleMaximize();
};
const closeWindow = async () => {
    await appWindow.close();
};

</script>

<template>
    <div class="bg-slate-700 flex justify-between items-center p-2">
        <div data-tauri-drag-region class="flex-1 text-white font-semibold cursor-default select-none text-lg">
            {{ title }}
        </div>
        <div class="window-controls flex space-x-2">
            <button @click="minimizeWindow"
                class="bg-slate-600 hover:bg-slate-500 text-white font-bold py-1 px-3 rounded">
                _
            </button>
            <button @click="toggleMaximizeWindow"
                class="bg-slate-600 hover:bg-slate-500 text-white font-bold py-1 px-3 rounded">
                []
            </button>
            <button @click="closeWindow" class="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded">
                X
            </button>
        </div>
    </div>
</template>