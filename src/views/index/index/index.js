import Vue from 'vue';
import contain from './index.vue';
new Vue({
    el: '#app',
    render: h => {
        return h(contain)
    }
})