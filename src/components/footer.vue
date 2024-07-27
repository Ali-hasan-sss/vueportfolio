<template>
  <div class="footer container">
    <SoCial />
    <div class="copy-right">
      <p>&copy; 2024 Ali Hasan all right reserved.</p>
    </div>
  </div>
</template>

<script>
import SoCial from "./social.vue";

export default {
  name: "FooTer",
  components: { SoCial },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  color: #fff;
  border: 2px solid #fff;
  box-shadow: 0 0 15px #111;
}
</style>
