<template>
  <div>
    <div class="zoom">
      <v-zoomer
        style="border: solid 1px silver; text-align: center; position: relative"
        :style="{
          width: widthZoom,
          height: heightZoom,
          border: 'solid 1px silver',
        }"
      >
        <canvas
          id="myCanvas"
          :width="widthZoom"
          :height="heightZoom"
          style="border: 1px solid #c3c3c3"
        >
          Trình duyệt này không hỗ trợ phần tử canvas.
        </canvas>
      </v-zoomer>
      <div>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      currentWidth: window.innerWidth,
      ratio: 5 / 7,
    };
  },
  computed: {
    widthZoom(): number {
      if (this.currentWidth > 992) return (this.currentWidth * 70) / 100;
      return (this.currentWidth * 90) / 100;
    },
    heightZoom(): number {
      if (this.currentWidth > 992)
        return ((this.currentWidth * 70) / 100) * this.ratio;
      return ((this.currentWidth * 90) / 100) * this.ratio;
    },
  },
  async mounted() {
    this.ratio = 5 / 7;
    window.addEventListener("resize", async () => {
      this.currentWidth = window.innerWidth;
      await this.drawImage(this.widthZoom, this.heightZoom, 700, 500);
    });
    await this.drawImage(this.widthZoom, this.heightZoom, 700, 500);
  },
  methods: {
    async drawImage(
      width: number,
      height: number,
      widthImage: number,
      heightImage: number
    ) {
      console.log(width, height, widthImage, heightImage);

      const c = document.getElementById("myCanvas") as HTMLCanvasElement;
      const ctx = c.getContext("2d");
      const img = new Image(widthImage, heightImage);
      img.src =
        "https://ofaas-nws-storage.oss-ap-northeast-1.aliyuncs.com/ofaas/floor/screen-1.jpg";

      img.onload = async () => {
        setTimeout(() => {
          ctx!.drawImage(img, 0, 0, width, height);
          const ratioWidth = width / widthImage;
          const ratioHeight = height / heightImage;
          this.drawRectangle1(
            ctx!,
            widthImage,
            heightImage,
            ratioWidth,
            ratioHeight
          );
          // this.drawRectangle2(ctx!);
          // this.drawCircle(ctx!);
          // this.drawCircle2(ctx!);
        }, 10);
      };
    },

    drawRectangle1(
      ctx: CanvasRenderingContext2D,
      widthImage: number,
      heightImage: number,
      ratioWidth: number,
      ratioHeight: number
    ) {
      ctx!.fillStyle = "#d62215";
      ctx!.fillRect(
        ((60.71647274954073 * widthImage) / 800) * ratioWidth,
        ((56.825984158397134 * heightImage) / 600) * ratioHeight,
        100.00000000000001 * ratioWidth,
        50.0 * ratioHeight
      );
    },
    drawRectangle2(ctx: CanvasRenderingContext2D) {
      ctx!.fillStyle = "#d62216";
      ctx!.fillRect(
        (715.7072872014697 * 700) / 800,
        (72.01523870277028 * 500) / 600,
        100.0,
        50.0
      );
    },

    drawCircle(ctx: CanvasRenderingContext2D) {
      ctx!.fillStyle = "#d62216";
      ctx!.arc(
        (229.25597060624614 * 700) / 800 + (25 * 700) / 800,
        (100.45942927727981 * 500) / 600 + (25 * 700) / 800,
        (25 * 700) / 800,
        0,
        2 * Math.PI
      );
      ctx.fill();
    },
    drawCircle2(ctx: CanvasRenderingContext2D) {
      ctx!.fillStyle = "#d62216";
      ctx!.arc(
        (562.8750765462339 * 700) / 800 + (25 * 700) / 800,
        (123.98307226676977 * 500) / 600 + (25 * 700) / 800,
        (25 * 700) / 800,
        0,
        2 * Math.PI
      );
      ctx.fill();
    },
  },
});
</script>

<style scoped lang="css">
.zoom {
  text-align: center;
  position: relative;
  align-content: center;
  align-items: center;
  justify-items: center;
  padding-left: 15%;
  padding-right: 15%;
}

@media screen and (max-width: 992px) {
  .zoom {
    padding-left: 5%;
    padding-right: 5%;
  }
}

@media screen and (min-width: 992px) {
  .zoom {
    padding-left: 15%;
    padding-right: 15%;
  }
}
</style>
