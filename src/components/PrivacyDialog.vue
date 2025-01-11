<script setup>
import PrivacyContent from "./PrivacyContent.vue";
defineProps({
  modelValue: {
    type: Boolean,
    require: true,
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <q-card>
      <q-card-section>
        <div class="text-h6">Политика конфиденциальности</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll">
        <PrivacyContent />
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Закрыть" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>