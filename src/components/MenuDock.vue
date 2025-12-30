<script setup lang="ts">
import { Dock } from "primevue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const position = ref("bottom");
const isActive = (to: string) => {
  return route.path === to;
};

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    to: "/",
  },
  {
    label: "Menu",
    icon: "pi pi-th-large",
    to: "/menu",
  },
  {
    label: "Car",
    icon: "pi pi-car",
    to: "/test",
  },
  {
    label: "Settings",
    icon: "pi pi-cog",
    to: "/settings",
  },
]);
</script>

<template>
  <Dock
    :model="items"
    :position="position"
    :pt="{
      listContainer: {
        class: 'bg-gray-300',
      },
    }"
  >
    <template #itemicon="{ item }">
      <RouterLink :to="item.to">
        <span
          :class="{
            'bg-gray-500 p-2': isActive(item.to),
          }"
          style="font-size: 2rem"
        >
          <i
            v-tooltip.top="item.label"
            :class="item.icon"
            style="font-size: 2rem"
          />
        </span>
      </RouterLink>
    </template>
  </Dock>
</template>

<style scoped></style>
