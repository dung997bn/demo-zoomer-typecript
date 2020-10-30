<template>
  <v-zoomer style="width: 700px; height: 500px; border: solid 1px silver;">
    <canvas
      id="myCanvas"
      width="700"
      height="500"
      style="border:1px solid #c3c3c3;"
    >
      Trình duyệt này không hỗ trợ phần tử canvas.
    </canvas>
  </v-zoomer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async mounted() {
    await this.drawImage();
  },
  methods: {
    async drawImage() {
      const c = document.getElementById("myCanvas") as HTMLCanvasElement;
      const ctx = c.getContext("2d");
      const img = new Image(700, 500);
      img.src =
        "https://ofaas-nws-storage.oss-ap-northeast-1.aliyuncs.com/ofaas/floor/screen-1.jpg";

      img.onload = async () => {
        setTimeout(() => {
          ctx!.drawImage(img, 0, 0, 700, 500);
          this.drawRectangle1(ctx!);
          this.drawRectangle2(ctx!);
        }, 10);
      };
    },

    drawRectangle1(ctx: CanvasRenderingContext2D) {
      ctx!.fillStyle = "#d62215";
      ctx!.fillRect(
        74.87411883182274,
        149.9294000602404,
        99.99999999999999,
        50.0
      );

    },
    drawRectangle2(ctx: CanvasRenderingContext2D) {
      ctx!.fillStyle = "#d62215";
      ctx!.fillRect(
        58.26699326393141,
        59.783129941286745,
        99.99999999999999,
        50.0
      );
    },
  },
});
</script>

<style scoped></style>
