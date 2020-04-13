<template>
  <div class="form">
    <h1>SingUp</h1>
    <div class="group">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="model.name" />
    </div>
    <div class="group">
      <label for="email">email</label>
      <input type="email" name="email" id="email" v-model="model.email" />
    </div>
    <div class="group">
      <label for="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="model.password"
      />
    </div>
    <div class="group">
      <label for="passwordConfirmation">Password Confirmation</label>
      <input
        type="password"
        name="passwordConfirmation"
        id="passwordConfirmation"
        v-model="model.passwordConfirmation"
      />
    </div>
    <button @click.stop="send" class="btn">ENVIAR</button>
    <p class="errorMessage">{{ responseError }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  data: () => ({
    model: {},
    responseError: "null"
  }),
  methods: {
    ...mapActions(["sendNewUser"]),
    async send() {
      this.responseError = null;
      try {
        await this.sendNewUser(this.model);
      } catch (error) {
        this.responseError = error;
      }
    }
  }
};
</script>

<style lang="scss">
body {
  background: hotpink;
}
.form {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  .group {
    display: block;
    position: relative;
    label {
      display: block;
      width: 100%;
      color: white;
      font-weight: bold;
      font-family: "Courier New", Courier, monospace;
      font-size: 1em;
      padding-top: 0.3em;
      text-transform: uppercase;
    }
    input {
      width: 100%;
    }
  }
  .btn {
    width: 100%;
    background: rgb(180, 0, 90);
    color: white;
    border: none;
    margin-top: 0.5em;
    padding: 0.5em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1em;
  }
  .errorMessage {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
  }
}
</style>
