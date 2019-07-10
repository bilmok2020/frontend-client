<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <v-card
            style="border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .87);
  "
            class="mx-auto"
            width="100%"
          >
            <v-card-title>
              <span style="font-size:23px !important" class="title font-weight-bold">
                <slot name="header"></slot>
              </span>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <slot name="default"></slot>
            </v-card-text>
            <v-btn block @click="$emit('close')" dark color="#F46257">KAPAT</v-btn>
          </v-card>
        </div>
      </div>
    </div>
  </transition>
</template>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  position: absolute;
  bottom: 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
