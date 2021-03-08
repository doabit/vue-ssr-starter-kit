import Vue from 'vue'
import About from 'views/About.vue'

describe('About.vue', () => {
  it('should render correct about contents', () => {
    const vm = new Vue(About).$mount()
    expect(vm.$el.textContent).to.contain('About')
  })
})
