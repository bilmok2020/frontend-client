<template>
  <v-layout>
    <v-list style="width:100%" two-line>
      <template v-for="(item, index) in items">
        <v-list-tile :key="item.title" avatar ripple @click="modal = index">
          <v-list-tile-content>
            <v-list-tile-title class="text--primary">{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
        <SimpleModal @close="modal = -1" v-if="modal == index" :key="index">
          <template v-slot:header>{{item.title}}</template>
          <slot>{{item.subtitle}}</slot>
        </SimpleModal>
      </template>
    </v-list>
  </v-layout>
</template>

<script>
import SimpleModal from "../SimpleModal";
export default {
  components: {
    SimpleModal
  },
  data: () => ({
    selected: [2],
    modal: -1,
    items: [
      {
        action: "15 min",
        title: "Görev",
        subtitle:
          "Oyunun heyecanını arttırmak için qr kodların konumları değiştirildi. Aramaya devam..."
      },
      {
        action: "2 hr",
        title: "Etkinlik",
        subtitle:
          "Bugün'ün ikinci konuşması Fatih Akın'ın reactive javascript konuşması, teknik sebeblerden ötürü 25dakika geç başlyacaktır"
      },
      {
        action: "6 hr",
        title: "Sistem",
        subtitle:
          "Chat sunucularında oluşan teknik bir sorundan dolayı chat sistemi kısa süreliğine devre dışı bırakılmıştır. anlayışınız için teşkekür ederim"
      }
    ]
  }),
  methods: {
    toggle(index) {
      const i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    }
  }
};
</script>

