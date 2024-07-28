<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/images/portfolio/createv.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5>Creative <span> Navbar</span></h5>
            <a
              class="btn btn-outline-light"
              href="https://ali-hasan-sss.github.io/Cruds/"
              target="_blank"
              >Vizit Website</a
            >
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/portfolio/cruds.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5>CRUDS <span> Project</span></h5>
            <a
              class="btn btn-outline-light"
              href="https://ali-hasan-sss.github.io/Cruds/"
              target="_blank"
              >Vizit Website</a
            >
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/portfolio/dashpoard.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5>personal <span> website</span></h5>
            <a
              class="btn btn-outline-light"
              href="https://ali-hasan-sss.github.io/Alkhal-restaurant/"
              target="_blank"
              >Vizit Website</a
            >
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/portfolio/aliwebsite.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5>Personal <span> WebSite</span></h5>
            <a
              class="btn btn-outline-light"
              href="https://ali-hasan-sss.github.io/Portfollio/"
              target="_blank"
              >Vizit Website</a
            >
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/portfolio/personal.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5>personal <span> WebSite</span></h5>
            <a
              class="btn btn-outline-light"
              href="https://ali-hasan-sss.github.io/Ali-hasan/"
              target="_blank"
              >Vizit Website</a
            >
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/portfolio/rolling.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5>Rolling <span> Game</span></h5>
            <a
              class="btn btn-outline-light"
              href="https://ali-hasan-sss.github.io/Game/"
              target="_blank"
              >Play Game</a
            >
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/portfolio/subway.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5>Subway <span> Game</span></h5>
            <a
              class="btn btn-outline-light"
              href="https://ali-hasan-sss.github.io/Subway-Game/"
              target="_blank"
              >Play Game</a
            >
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/portfolio/xo.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5>X O <span> Game</span></h5>
            <a
              class="btn btn-outline-light"
              href="https://ali-hasan-sss.github.io/X-O-game//"
              target="_blank"
              >Play Game</a
            >
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "sliderView",
};
</script>

<style coped>
.carousel-inner {
  height: 500px;
  overflow: hidden;
}
.carousel-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 500px;
  display: block;
  margin: 0 auto;
}
.carousel-caption {
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid #fff;
  box-shadow: 0 0 15px #111;
}
span {
  color: #cd0c0c;
}
</style>
