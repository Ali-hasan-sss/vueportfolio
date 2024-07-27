<template>
  <div>
    <div class="home">
      <div class="main">
        <NavBar />
        <div class="text-content container">
          <h3>hello!<span> my name </span>is</h3>
          <h1 class="my-3">ALI HASAN</h1>
          <h2>Front-End<span> Developer</span></h2>
          <a
            class="btn btn-outline-light"
            href="https://drive.google.com/file/d/1xkoNgMBFTssn-3cBkARan3Tli3YPYjb5/view?usp=drivesdk"
          >
            Dowenload CV
          </a>
        </div>
        <div class="container nav">
          <RouterLink to="/about"> <div class="item">About</div> </RouterLink>
          <RouterLink to="/skills"> <div class="item">Skills</div> </RouterLink>
          <RouterLink to="/services">
            <div class="item">Services</div>
          </RouterLink>
          <RouterLink to="/portfollio">
            <div class="item">Portfollio</div>
          </RouterLink>
          <RouterLink to="/contact">
            <div class="item">Contact Me</div>
          </RouterLink>
        </div>
      </div>
    </div>
    <FooTer />
  </div>
</template>

<script>
import NavBar from "../components/navbar.vue";
import FooTer from "../components/footer.vue";

export default {
  name: "HomeView",
  components: { NavBar, FooTer },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
}
.main {
  flex: 1;
}
.text-content {
  margin-top: 30px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid #fff;
  box-shadow: 0 0 15px #111;
  color: #fff;
  padding: 20px;
}
span {
  color: #cd0c0c;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
a {
  text-decoration: none;
}
.item {
  color: #fff;
  width: 150px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid #fff;
  box-shadow: 0 0 15px #111;
  padding-top: 35%;
  text-align: center;
  transition: 0.3s;
}
.item:hover {
  scale: 1.1;
}
</style>
