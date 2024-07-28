<template>
  <div class="services">
    <div class="main">
      <NavBar />
      <div class="container content">
        <div class="header mt-2">
          <h1 class="text-center">My <span> Services</span></h1>
        </div>
        <div class="services-content">
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/frontend.png"
              alt="frontend"
            />
            <div class="card-body">
              <h3 class="card-title text-light">
                frontend<span> development</span>
              </h3>
              <p class="card-text text-light">
                I can build a website by using HTML , CSS and Java script
              </p>
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/responsive.png"
              alt="responsive design"
            />
            <div class="card-body">
              <h3 class="card-title text-light">
                <span>Responsive </span> design
              </h3>
              <p class="card-text text-light">
                your web site will be 100% responsive for all devices tablets
                and smart phones
              </p>
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/design.png"
              alt="createve design"
            />
            <div class="card-body">
              <h3 class="card-title text-light">
                <span>Createve </span> design
              </h3>
              <p class="card-text text-light">
                I can edit your current website by adding a new content to make
                it much better
              </p>
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/idea.png"
              alt="web idea"
            />
            <div class="card-body">
              <h3 class="card-title text-light"><span>Web</span> ideas</h3>
              <p class="card-text text-light">
                i could turn your ideas into a real projects with high quality
              </p>
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/retuch.png"
              alt="retuch"
            />
            <div class="card-body">
              <h3 class="card-title text-light">Re<span>tuch</span></h3>
              <p class="card-text text-light">
                I can help you by redesign your current website to looks much
                better
              </p>
            </div>
          </div>
          <div class="card item">
            <img
              class="card-img-top"
              src="../assets/images/portfolio/support.png"
              alt="support"
            />
            <div class="card-body">
              <h3 class="card-title text-light">Support <span> you</span></h3>
              <p class="card-text text-light">
                support is available if you wanna make any changes for your
                website after design it
              </p>
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

export default {
  name: "ServicesView",
  components: { NavBar, FooTer },
};
</script>

<style scoped>
.services {
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
.services-content {
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
  height: 10rem;
  object-fit: contain;
}
.card-body {
  background-color: rgba(0, 0, 0, 0.7);
  border-top: 1px solid #b7a0a0eb;
}
</style>
