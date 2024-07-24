<script setup lang="ts">

const { greeting, fetchGreeting } = useGreeting();
onMounted(() => {
  fetchGreeting('xjh');
});

</script>


<template>
  <div>
    <a> {{ greeting }}</a>
  </div>
</template>