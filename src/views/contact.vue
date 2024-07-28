<template>
  <div class="contact">
    <div class="main">
      <NavBar />
      <div class="container content">
        <div class="header mt-2">
          <h1 class="text-center">Contact <span>Me</span></h1>
        </div>
        <div class="contact-content">
          <div class="contact-form">
            <form @submit.prevent="sendEmail">
              <div class="form-group">
                <label for="name">Name</label>
                <input v-model="form.name" type="text" id="name" required />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input v-model="form.email" type="email" id="email" required />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  v-model="form.message"
                  id="message"
                  required
                ></textarea>
              </div>

              <button class="btn btn-outline-light w-100" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <FooTer />
  </div>
</template>

<script>
import FooTer from "../components/footer.vue";
import NavBar from "../components/navbar.vue";

export default {
  name: "ContactView",
  components: { NavBar, FooTer },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    /* async sendEmail() {
      try {
        const response = await fetch("http://localhost:3000/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        });
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Failed to send message.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error sending message.");
      }
    },*/
  },
};
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  min-height: 97vh;
}
.main {
  flex: 1;
}
.header {
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid #fff;
  box-shadow: 0 0 15px #111;
  color: #fff;
  padding: 10px;
}
span {
  color: #cd0c0c;
}
.contact-content {
  background-color: rgba(0, 0, 0, 0.4);
  border: 2px solid #fff;
  box-shadow: 0 0 15px #111;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
}
.contact-form {
  color: #fff;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #fff;
  box-shadow: 0 0 15px #111;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
