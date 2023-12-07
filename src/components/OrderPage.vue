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
    <v-btn class="order" @click="order" rounded border>Order</v-btn>
    <v-btn
      class="order-failed-at-create-order"
      @click="order(`create-order`)"
      rounded
      border
    >
      Order: failed at create order service
    </v-btn>
    <v-btn
      class="order-failed-at-process-payment"
      @click="order(`process-payment`)"
      rounded
      border
    >
      Order: failed at process-payment service
    </v-btn>
    <v-btn
      class="order-failed-at-update-inventory"
      @click="order(`update-inventory`)"
      rounded
      border
    >
      Order: failed at update inventory service
    </v-btn>
    <v-btn
      class="order-failed-at-delivery-order"
      @click="order(`delivery-order`)"
      rounded
      border
    >
      Order: failed at delivery order service
    </v-btn>
  </div>
</template>

<script>
import WhoAreYou from "@/components/WhoAreYou.vue";
export default {
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    this.username = this.$route.params.username;
  },
  methods: {
    logout() {
      this.$router.replace({ path: "/" });
    },
    // TODO: change the function to call appropriate API calls
    async order(text) {
      const username = this.$route.params.username;
      const itemName = "Token";
      const amount = 1;
      const price = 10;
      if (text === "create-order") {
        try {
          const messageFlag = "order";

          const urlWithParams = `/api/order/create?username=${username}&product=${itemName}&amount=${amount}&price=${price}&message_flag=${messageFlag}`;

          const response = await fetch(urlWithParams, {
            method: "POST",
          });

          if (response.ok) {
            const responseData = await response.text();
            console.log("Response:", responseData);
          } else {
            console.error("Error:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      } else if (text === "process-payment") {
        try {
          const messageFlag = "payment";

          const urlWithParams = `/api/order/create?username=${username}&product=${itemName}&amount=${amount}&price=${price}&message_flag=${messageFlag}`;

          const response = await fetch(urlWithParams, {
            method: "POST",
          });

          if (response.ok) {
            const responseData = await response.text();
            console.log("Response:", responseData);
          } else {
            console.error("Error:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      } else if (text === "update-inventory") {
        try {
          const messageFlag = "inventory";

          const urlWithParams = `/api/order/create?username=${username}&product=${itemName}&amount=${amount}&price=${price}&message_flag=${messageFlag}`;

          const response = await fetch(urlWithParams, {
            method: "POST",
          });

          if (response.ok) {
            const responseData = await response.text();
            console.log("Response:", responseData);
          } else {
            console.error("Error:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      } else if (text === "delivery-order") {
        try {
          const messageFlag = "delivery";

          const urlWithParams = `/api/order/create?username=${username}&product=${itemName}&amount=${amount}&price=${price}&message_flag=${messageFlag}`;

          const response = await fetch(urlWithParams, {
            method: "POST",
          });

          if (response.ok) {
            const responseData = await response.text();
            console.log("Response:", responseData);
          } else {
            console.error("Error:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        try {
          const messageFlag = "SUCCESS";

          const urlWithParams = `/api/order/create?username=${username}&product=${itemName}&amount=${amount}&price=${price}&message_flag=${messageFlag}`;

          const response = await fetch(urlWithParams, {
            method: "POST",
          });

          if (response.ok) {
            const responseData = await response.text();
            console.log("Response:", responseData);
          } else {
            console.error("Error:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    },
  },
};
</script>

<style scoped>
#order-user {
  display: flex;
  place-items: center;
  margin-top: 200px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 500px;
  max-height: 400px;
}

.custom-icon {
  padding-left: 20px;
  padding-right: 10px;
}

.logout-button {
  flex-grow: 1;
  max-width: 150px;
  background-color: #673ab7;
  margin: 10px;
}

.order {
  flex-basis: 100%;
  background-color: #4caf50;
}

.order-failed-at-create-order {
  flex-basis: 100%;
  background-color: #b00020;
}

.order-failed-at-process-payment {
  flex-basis: 100%;
  background-color: #b00020;
}

.order-failed-at-update-inventory {
  flex-basis: 100%;
  background-color: #b00020;
}

.order-failed-at-delivery-order {
  flex-basis: 100%;
  background-color: #b00020;
}
@media (min-width: 1024px) {
  #order-user {
    display: flex;
    place-items: center;
  }
}
</style>
