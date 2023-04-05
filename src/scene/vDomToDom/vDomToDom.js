//dom virtual para dom real
const vnode = {
  tag: 'div',
  attrs: {
    id: 'app',
  },
  children: [{
    tag: 'span',
    children: [{
      tag: 'a',
      children: [],
    }],
  },
  {
    tag: 'span',
    children: [{
      tag: 'a',
      children: [],
    },
    {
      tag: 'a',
      children: [],
    },
    ],
  },
  ],
}
render(vnode, document.querySelector('#root'))

function render(vnode, container) {

}
