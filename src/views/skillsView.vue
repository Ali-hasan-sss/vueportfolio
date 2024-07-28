<template>
  <div class="skills">
    <div class="main">
      <NavBar />
      <div class="container content">
        <div class="header mt-2">
          <h1 class="text-center">My <span> Skills</span></h1>
        </div>
        <div class="skills-content">
          <div class="item">
            <img src="../assets/images/skills/html.png" alt="html" />
          </div>
          <div class="item">
            <img src="../assets/images/skills/css.png" alt="css" />
          </div>
          <div class="item">
            <img src="../assets/images/skills/js.png" alt="javascript" />
          </div>
          <div class="item">
            <img src="../assets/images/skills/react.png" alt="react js" />
          </div>
          <div class="item">
            <img src="../assets/images/skills/vue.png" alt="vue js" />
          </div>
          <div class="item">
            <img src="../assets/images/skills/wp.png" alt="wordpress" />
          </div>
          <div class="item">
            <img src="../assets/images/skills/bootstrap.png" alt="bootstrap" />
          </div>
          <div class="item">
            <img src="../assets/images/skills/ps.png" alt="photo shop" />
          </div>
          <div class="item">
            <img src="../assets/images/skills/office.png" alt="ms office" />
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
  name: "SkillsView",
  components: { NavBar, FooTer },
};
</script>

<style scoped>
.skills {
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
.skills-content {
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
.item {
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #fff;
  box-shadow: 0 0 15px #111;
  width: 100px;
  height: 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}
.item:hover {
  scale: 1.1;
  background-color: rgba(0, 0, 0, 0.67);
}
.item img {
  width: 80%;
  object-fit: cover;
}
</style>
