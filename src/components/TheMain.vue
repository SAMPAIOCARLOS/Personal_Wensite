<script>
import Projects from './Projects.vue';
import Skills from './Skills.vue';

export default {
    name: 'TheMain',
    components: { Skills, Projects }
}
</script>

<template>
    <main>
        <Skills />

        <Projects />
    </main>
</template>

<style scoped>
main {
    width: 100vw;
    min-height: 100vh;
    /* border: 4px solid red; */
}
</style>
