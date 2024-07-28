<template>
  <div class="portfollio">
    <div class="main">
      <NavBar />
      <div class="container portfolio-content">
        <div class="header mt-2">
          <h1 class="text-center">My <span> works</span></h1>
        </div>
        <sliderView class="d-lg-none" />
        <div class="content d-none d-lg-flex">
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/aliwebsite.jpg"
              alt="frontend"
            />
            <div class="card-body">
              <h3 class="card-title text-light">
                personal<span> website</span>
              </h3>
              <a
                class="btn btn-outline-light"
                href="https://ali-hasan-sss.github.io/Portfollio/"
                target="_blank"
                >Vizit Website</a
              >
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/createv.jpg"
              alt="frontend"
            />
            <div class="card-body">
              <h3 class="card-title text-light">Createv<span> Navbar</span></h3>
              <a
                class="btn btn-outline-light"
                href="https://ali-hasan-sss.github.io/Portfollio/"
                target="_blank"
                >Vizit Website</a
              >
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/cruds.jpg"
              alt="responsive design"
            />
            <div class="card-body">
              <h3 class="card-title text-light"><span>CRUDS </span> project</h3>
              <a
                class="btn btn-outline-light"
                href="https://ali-hasan-sss.github.io/Cruds/"
                target="_blank"
                >Vizit Website</a
              >
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/dashpoard.jpg"
              alt="createve design"
            />
            <div class="card-body">
              <h3 class="card-title text-light">
                <span>Createve </span> design
              </h3>
              <a
                class="btn btn-outline-light"
                href="https://ali-hasan-sss.github.io/Alkhal-restaurant/"
                target="_blank"
                >Vizit Website</a
              >
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/personal.jpg"
              alt="web idea"
            />
            <div class="card-body">
              <h3 class="card-title text-light">
                <span>personal</span> website
              </h3>
              <a
                class="btn btn-outline-light"
                href="https://ali-hasan-sss.github.io/Ali-hasan/"
                target="_blank"
                >Vizit Website</a
              >
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/rolling.jpg"
              alt="retuch"
            />
            <div class="card-body">
              <h3 class="card-title text-light">Rolling <span> Game</span></h3>
              <a
                class="btn btn-outline-light"
                href="https://ali-hasan-sss.github.io/Game/"
                target="_blank"
                >Play Game</a
              >
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/subway.jpg"
              alt="support"
            />
            <div class="card-body">
              <h3 class="card-title text-light">Subway <span> Game</span></h3>
              <a
                class="btn btn-outline-light"
                href="https://ali-hasan-sss.github.io/Subway-Game/"
                target="_blank"
                >Play Game</a
              >
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/xo.jpg"
              alt="support"
            />
            <div class="card-body">
              <h3 class="card-title text-light">X O <span> Game</span></h3>
              <a
                class="btn btn-outline-light"
                href="https://ali-hasan-sss.github.io/X-O-game//"
                target="_blank"
                >Play Game</a
              >
            </div>
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
import sliderView from "../components/slider.vue";
export default {
  name: "portoFllio",
  components: { NavBar, FooTer, sliderView },
};
</script>

<style scoped>
.portfollio {
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
.content {
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
  width: 18rem;
  height: 22rem;
}
.item img {
  width: 100%;
  height: 15rem;
  object-fit: contain;
}
.card-body {
  background-color: rgba(0, 0, 0, 0.7);
  border-top: 1px solid #b7a0a0eb;
}
</style>
