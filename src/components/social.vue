<template>
  <div class="social">
    <a href="https://www.facebook.com/eliano.hasan"
      ><img src="../assets/images/social/fb.png" alt="facebook"
    /></a>

    <a href="https://www.instagram.com/ali.e.hasan.92?igsh=cWtjaXRheHFtanA2:"
      ><img src="../assets/images/social/insta.png" alt="instagram"
    /></a>

    <a href="https://www.linkedin.com/in/ali-hasan-536312297"
      ><img src="../assets/images/social/in.png" alt="linkdin"
    /></a>

    <a href="https://github.com/Ali-hasan-sss"
      ><img src="../assets/images/social/git.png" alt="gitgub"
    /></a>

    <a href="https://api.whatsapp.com/send/?phone=+963994488858"
      ><img src="../assets/images/social/wa.png" alt="whatsapp"
    /></a>
  </div>
</template>

<script>
export default {
  name: "SoCial",
};
</script>

<style scoped>
.social {
  display: flex;
  gap: 20px;
}
.social a {
  text-decoration: none;
}
.social img {
  width: 40px;
  transition: 0.3s;
}
.social img:hover {
  scale: 1.1;
}
</style>
