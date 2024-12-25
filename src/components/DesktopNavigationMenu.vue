<script setup>
defineProps({
  navItems: {
    type: Array,
    require: true,
  },
});
</script>

<template>
  <div class="navigation nav-text">
    <div v-for="item in navItems" :key="item">
      <template v-if="item.secondLevel">
        <q-btn-dropdown
          :menu-offset="[0, 8]"
          square
          :label="item.label"
          fab
          dropdown-icon="keyboard_arrow_down"
          class="navigation__button"
        >
          <q-list dense separator>
            <q-item
              class="bg-primary text-white submenu-item"
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
                  <q-icon name="keyboard_arrow_right" color="white" />
                </q-item-section>
                <q-menu anchor="top end" self="top start">
                  <q-list dense separator>
                    <q-item
                      v-for="level in subitem.thirdLevelItems"
                      :key="level"
                      dense
                      clickable
                      class="bg-primary text-white q-px-auto q-py-md submenu-item"
                    >
                      <q-item-section>{{ level.title }}</q-item-section>
                      <q-item-section side>
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
                      </q-menu>
                    </q-item>
                  </q-list>
                </q-menu>
              </template>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </template>
      <template v-else>
        <q-btn square fab class="navigation__button" :label="item.label" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
}

.navigation__button,
.nav-text,
.link {
  color: white;
  font-size: clamp(0.9rem, 1.7vw, 1rem);
  font-family: Montserrat-regular, serif;
  font-weight: 500;
  line-height: 17.07px;
  text-transform: none;
  padding: 4px 5px 4px 5px;
  transition: 0.3s linear;
}
.navigation__button:hover {
  color: var(--q-secondary);
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
.submenu-item:hover,
.link:hover {
  color: var(--q-secondary) !important;
}

@media (max-width: 1280px) {
  .navigation {
    width: 100%;
  }
  .nav-text {
    padding-left: 5px;
  }
}
</style>
