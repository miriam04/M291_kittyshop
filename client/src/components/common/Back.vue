<template>
    <div class="backButton" @click="goBack()">
        <p>Back</p>
    </div>
</template>

<script>
export default {
    name: 'Back',
    methods: {
        goBack() {
            console.log('back');
            this.$router.go(-1);
        },
    },
};
</script>
