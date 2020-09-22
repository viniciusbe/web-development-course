<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        label="Selecione as legendas"
        prepend-icon="mdi-message-text"
        outlined
        append-outer-icon="mdi-send"
        multiple
        chips
        v-model="files"
        @click:append-outer="processSubtitles"
      ></v-file-input>
    </v-form>
    <div class="pills">
      <Pill v-for="word in groupedwords" :key="word.name" :name="word.name" :amount="word.amount"></Pill>
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from "electron";
import Pill from "./Pill";
export default {
  components: { Pill },
  data: function () {
    return {
      files: [],
      groupedwords: [],
    };
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map((f) => f.path);
      ipcRenderer.send("process-subtitles", paths);
      ipcRenderer.on("process-subtitles", (event, resp) => {
        this.groupedwords = resp;
      });
    },
  },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>