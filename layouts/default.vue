<script setup lang="ts">

</script>


<template>
    <div class="flex flex-col h-screen">
        <TitleBar class="flex-shrink-0" />
        <div class="flex flex-1 overflow-hidden">
            <div class="bg-blue-600 w-64 flex-shrink-0"> <!-- Adjust width as needed -->
                side menu
            </div>
            <div class="flex-1 overflow-auto">
                <slot />
            </div>
        </div>
        <div class="bg-stone-600 flex-shrink-0">
            <PlayerBar />
        </div>
    </div>
</template>