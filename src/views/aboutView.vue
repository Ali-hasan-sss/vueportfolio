<template>
  <div>
    <div class="about">
      <div class="main">
        <NavBar />
        <div class="container content d-lg-flex d-block">
          <div class="text-content">
            <div class="header mt-2">
              <h1 class="text-center">About Me</h1>
              <h2 class="text-center">Front-end<span> developer</span></h2>
            </div>
            <div class="discrabtion mt-3">
              <p>
                I studied computer techniques Institute . I have the experience
                of the users interface and programming.
              </p>
              <p>
                I can offer solutions to overcome the code problems . And
                propose the best ways to get to the best performance of the site
                and without problems.
              </p>
              <p>
                You can see the web sites designed in the portfollio section.
              </p>
            </div>
          </div>
          <div class="image-content">
            <img src="../assets/images/ali.png" alt="my photo" />
          </div>
        </div>
      </div>
      <FooTer />
    </div>
  </div>
</template>

<script>
import FooTer from "../components/footer.vue";
import NavBar from "../components/navbar.vue";

export default {
  name: "AboutView",
  components: { NavBar, FooTer },
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  min-height: 97vh;
}
.main {
  flex: 1;
}
.header,
.discrabtion {
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid #fff;
  box-shadow: 0 0 15px #111;
  color: #fff;
  padding: 10px;
}
span {
  color: #cd0c0c;
}
.content {
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid #fff;
  box-shadow: 0 0 15px #111;
}
.text-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image-content {
  width: 50%;
  height: 100%;
  color: #fff;
  align-items: center;
  justify-content: center;
}
.image-content img {
  width: 90%;
}
@media screen and (max-width: 520px) {
  .image-content img {
    position: relative;
    transform: translateX(60%);
  }
}
@media screen and (min-width: 521px) and (max-width: 990px) {
  .image-content img {
    position: relative;
    transform: translateX(60%);
  }
}
</style>
