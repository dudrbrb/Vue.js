var vm1 = new Vue({
  el: '#example1',
  data: {
    items: [
      { message: 'apple' },
      { message: 'banana' },
      { message: 'orange' }
    ]
  }
})

var vm2 = new Vue({
  el: '#example2',
  data: {
    parentMessage: '과일',
    items: [
      { message: 'apple' },
      { message: 'banana' },
      { message: 'orange' }
    ]
  }
})