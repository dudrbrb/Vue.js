var vm1 = new Vue({
  el: '#example1',
  data: {
    message: '가나다라마바사'
  },
  computed: {
    // 계산된 getter
    reversedMessage: function () {
      // `this` 는 vm 인스턴스를 가리킴.
      return this.message.split('').reverse().join('')
    },
  },
  methods: {
    changeText: function(){
      var newMessage = document.querySelector('#messageInput');
      this.message  = newMessage.value;
      newMessage.value = "";
    }
  }
});

var vm2 = new Vue({
  el: '#example2',
  data: {
    firstName: 'Harry',
    lastName: 'Porter',
    fullName: 'Harry Porter'
  },
  watch: {
    // 각각의 값이 바뀌었을 때만 실행됨
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName;
      console.log('first name이 바뀌었다!')
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val;
      console.log('last name이 바뀌었다!')
    }
  },
  methods : {
    changeName: function(){
      var newFirstName = document.querySelector('#firstName1');
      var newLastName = document.querySelector('#lastName1');

      this.firstName  = newFirstName.value;
      this.lastName  = newLastName.value;
    }
  }
});

var vm3 = new Vue({
  el: '#example3',
  data: {
    firstName: 'Harry',
    lastName: 'Porter'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    changeName: function(){
      var newFirstName = document.querySelector('#firstName2');
      var newLastName = document.querySelector('#lastName2');

      this.firstName  = newFirstName.value;
      this.lastName  = newLastName.value;
    }
  }
});

