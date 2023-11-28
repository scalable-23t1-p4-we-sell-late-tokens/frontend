<template>
  <main>
    <h1>
      Who are you?
    </h1>
    <div>
      <v-sheet max-width="300" class="mx-auto" color="grey-darken-3">
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-text-field
              v-model="userName"
              :rules="rules"
              label="User name"
          ></v-text-field>
          <div class="d-flex flex-column">
            <v-btn
                :loading="loading"
                color="success"
                type="submit"
                class="mt-4"
                block
            >
              Submit
            </v-btn>
          </div>
        </v-form>
      </v-sheet>
    </div>
  </main>
</template>

<script>
  import OrderPage from "@/components/OrderPage.vue";

  export default {
    data: vm => ({
      loading: false,
      rules: [value => vm.checkApi(value)],
      timeout: null,
      userName: '',
    }),

    methods: {
      async submit (event) {
        this.loading = true

        const results = await event

        this.loading = false

        if(results.valid) {
          this.$router.replace({ name: OrderPage, params: { username: this.userName } });
        }
        // alert(JSON.stringify(results, null, 2))
      },
      async checkApi (userName) {
        return new Promise(resolve => {
          clearTimeout(this.timeout)

          this.timeout = setTimeout(() => {
            if (!userName) return resolve('Please enter a user name.')

            return resolve(true)
          }, 1000)
        })
      },
    },
  }
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>