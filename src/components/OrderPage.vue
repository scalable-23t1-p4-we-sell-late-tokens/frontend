<template>
  <div id="order-user">
    <h1>
      Welcome {{ username }}
    </h1>
  </div>
<!--  <div>-->
<!--    <v-sheet max-width="300" class="mx-auto" color="grey-darken-3">-->
<!--      <v-form validate-on="submit lazy" @submit.prevent="submit">-->
<!--        <v-text-field-->
<!--            v-model="userName"-->
<!--            :rules="rules"-->
<!--            label="User name"-->
<!--        ></v-text-field>-->
<!--        <div class="d-flex flex-column">-->
<!--          <v-btn-->
<!--              :loading="loading"-->
<!--              color="success"-->
<!--              type="submit"-->
<!--              class="mt-4"-->
<!--              block-->
<!--          >-->
<!--            Submit-->
<!--          </v-btn>-->
<!--        </div>-->
<!--      </v-form>-->
<!--    </v-sheet>-->
<!--  </div>-->
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      username: ''
    }
  },

  mounted() {
    this.username = this.$route.params.username
  },
}
</script>

<!--<style>-->
<!--  -->
<!--</style>-->