/**
 * Basic state menangment.
 */
import Vue from 'vue'
export const eventBus = new Vue();

export const dataBus = new Vue({
    data: {
        user: {},
        token: ""
    }
});