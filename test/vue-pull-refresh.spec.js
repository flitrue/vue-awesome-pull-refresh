/* global describe, it, expect */
import Vue from 'vue';
import vuePullRefresh from '../src/vue-pull-refresh.vue';

describe('vue-pull-refresh.vue', () => {
    it('should have correct text', () => {
        expect(vuePullRefresh.data().canPull).toBe(false);
    });

    it('should render correct text', () => {
        const vm = new Vue({
            template: '<div><vue-pull-refresh></vue-pull-refresh></div>',
            components: {
                'vue-pull-refresh': vuePullRefresh
            }
        }).$mount();
        expect(1+1).toBe(2);
    });
});

describe('测试套件', () => {
    it('测试1', () => {
        expect('hello').not.toBe('world');
    });
});