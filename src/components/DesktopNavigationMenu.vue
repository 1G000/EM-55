<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";

const q = useQuasar();

const props = defineProps({
  navItems: {
    type: Array,
    require: true,
    default: () => [],
  },
});

const updatedNavItems = computed(() => {
  if (q.screen.width < 1060) {
    return props.navItems?.slice(0, -4);
  } else if (q.screen.width <= 1230) {
    return props.navItems?.slice(0, -2);
  }
  return props.navItems;
});
const downloadFile = (url) => {
  window.location.href = url;
};
</script>

<template>
  <nav class="navigation nav-text">
    <div v-for="item in updatedNavItems" :key="item">
      <template v-if="item.secondLevel">
        <q-btn-dropdown
          :menu-offset="[0, 5]"
          square
          :label="item.label"
          fab
          class="navigation__button"
        >
          <q-list dense separator class="q-pl-sm q-pr-xl list-shadow">
            <q-item
              class="text-black submenu-item"
              v-for="subitem in item.secondLevelItems"
              :key="subitem"
              clickable
              :to="subitem.href"
            >
              <template v-if="!subitem.thirdLevel">
                <q-item-section>{{ subitem.title }}</q-item-section>
              </template>
              <template v-else>
                <q-item-section>{{ subitem.title }}</q-item-section>
                <q-item-section side>
                  <q-icon name="mdi-menu-right" color="primary" />
                </q-item-section>
                <q-menu
                  anchor="top right"
                  self="top left"
                  :offset="[6, 0]"
                  class="list-shadow"
                >
                  <q-list dense separator class="q-px-sm list-shadow">
                    <q-item
                      v-for="level in subitem.thirdLevelItems"
                      :key="level"
                      dense
                      clickable
                      class="text-black q-px-auto q-py-md submenu-item"
                      @click="downloadFile(level.href)"
                    >
                      <q-item-section>{{ level.title }}</q-item-section>
                      <!-- <q-item-section side>
                        <q-icon name="keyboard_arrow_right" color="white" />
                      </q-item-section>
                      <q-menu auto-close anchor="top end" self="top start">
                        <q-list dense separator>
                          <q-item
                            v-for="n in 3"
                            :key="n"
                            dense
                            clickable
                            class="bg-primary text-white q-px-auto q-py-md submenu-item"
                          >
                            <q-item-section>Четвертый уровень</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu> -->
                    </q-item>
                  </q-list>
                </q-menu>
              </template>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </template>
      <template v-else>
        <q-btn
          square
          fab
          class="navigation__button"
          :label="item.label"
          :to="item.href"
        />
      </template>
    </div>
  </nav>
</template>

<style scoped>
.navigation.nav-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 1280px;
}
.navigation__button,
.nav-text,
.link {
  color: var(--color-black);
  font-size: clamp(0.9rem, 1.7vw, 1rem);
  font-family: Montserrat-regular, serif;
  font-weight: 500;
  line-height: 17.07px;
  text-transform: none;
  padding: 4px 5px 4px 5px;
  transition: 0.3s linear;
}
.nav-text {
  padding: 0 0 4px 0;
}
.navigation__button :deep(q-btn-dropdown__arrow) {
  color: var(--q-primary);
}
.navigation__button:hover {
  color: var(--q-primary);
}
.q-btn:before {
  box-shadow: none !important;
}
.q-toolbar {
  min-height: 55px;
}
.submenu-item {
  font-family: Montserrat-regular, serif;
  font-size: clamp(0.9rem, 1.7vw, 1rem);
  font-weight: 500;
  padding: 10px 12px !important;
}
.list-shadow {
  box-shadow: 0px -4px 10px 0px #d4ab6d14;
}
.submenu-item:hover,
.link:hover {
  color: var(--q-primary) !important;
}

@media (max-width: 1370px) {
  .navigation.nav-text {
    gap: 20px;
  }
}
@media (max-width: 1230px) {
}
</style>
