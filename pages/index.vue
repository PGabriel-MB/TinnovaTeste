<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  beforeCreate() {
    const { token, user } = this.$store.state;

    if (!token || !user) {
        this.$router.push('/auth');
    }
  }
}
</script>
