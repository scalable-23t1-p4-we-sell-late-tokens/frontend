<template>
  <v-app>
    <v-app-bar color="indigo">
      <v-icon class="custom-icon" icon="$account" />
      {{ username }}
      <v-spacer />
      <v-btn class="logout-button" @click="logout" rounded border>Logout</v-btn>
    </v-app-bar>
  </v-app>

  <div id="order-user">
    <h1>
      Welcome {{ username }}
    </h1>
  </div>

</template>

<script>
import WhoAreYou from "@/components/WhoAreYou.vue";
export default {
  data() {
    return {
      username: ''
    }
  },
  mounted() {
    this.username = this.$route.params.username
  },
  methods: {
    logout() {
      this.$router.replace({ path: "/" })
    }
  }
}
</script>

<style scoped>
#order-user {
  display: flex;
  place-items: center;
}

.custom-icon {
  padding-left: 20px;
  padding-right: 10px;
}


.logout-button {
  flex-grow: 1;
  max-width: 150px;
  background-color: #673AB7;
  margin: 10px;
}

@media (min-width: 1024px) {
  #order-user {
    display: flex;
    place-items: center;
  }
}
</style>
