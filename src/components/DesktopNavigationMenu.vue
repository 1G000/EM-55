<script setup>
defineProps({
  navItems: {
    type: Array,
    require: true,
  },
});

const downloadFile = (url) => {
  window.location.href = url;
};
</script>

<template>
  <nav class="navigation nav-text">
    <div v-for="item in navItems" :key="item">
      <template v-if="item.secondLevel">
        <q-btn-dropdown
          :menu-offset="[0, 8]"
          square
          :label="item.label"
          fab
          class="navigation__button"
        >
          <q-list dense separator>
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
                <q-menu anchor="top end" self="top start" class="shadow-3">
                  <q-list dense separator>
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
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
.navigation.nav-text {
  padding-left: 40px;
  padding-right: 40px;
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
.navigation__button::v-deep .q-btn-dropdown__arrow {
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
.submenu-item:hover,
.link:hover {
  color: var(--q-primary) !important;
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
