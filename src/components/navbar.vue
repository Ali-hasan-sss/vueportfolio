<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-lg nav">
      <div class="container-fluid">
        <a class="navbar-brand text-light logo" href="#">Ali Hasan</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-lg-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-link" aria-current="page" href="/">Home</a>
            <a class="nav-link" href="/about">About</a>
            <a class="nav-link" href="/skills">Skills</a>
            <a class="nav-link" href="/services">Services</a>
            <a class="nav-link" href="/portfollio">Portfollio</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav {
  border-bottom: 2px solid rgba(216, 35, 35, 0.937);
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom: 2px solid #fff;
  box-shadow: 0 0 15px #111;
}
a {
  color: #fff;
}

.logo {
  font-size: 25px;
  font-weight: 600;
}
</style>
