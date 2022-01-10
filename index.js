












    Vue.component('navi-link', {
        template: '<a v-bind:href="url"class="nav-link"></a><slot></slot>'
    })

    Vue.component ('blog-post-1', {
        props: [
            'postTitle',
        ],
        template: '<h3>{{ postTitle }}</h3>'
    })

    Vue.component('button-counter', {
        data: function () {
            return {
                count: 0
            }
        },

        template:  '<button @click="count++">ban da bam {{ count }} lan.</button>'
    })

    Vue.component('blog-post', {
        props: ['title'],
        template: '<h3>{{ title }}</h3>'
    })

    new Vue ({
        el: '#tp',
        data: {
            posts: [
                {
                    id: 1, title: 'gioi thieu ne'
                },
                {
                    id: 2, title: 'dang hoc'
                },
                {
                    id: 3, title: 'hoc xong'
                },
            ],
            post: {
                id: 1,
                title: 'my journey with vue'
            }
        },
        methods: {
            focus: function () {
                this.$refs.inputfocus()
            }
        }
    })

    Vue.component('blog-post', {
        props: ['post'],
        template: `
          <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text', 0.2)">
              Phóng to
            </button>
            <button v-on:click="$emit('ensmall-text', 0.2)">
              thu nho
            </button>
            <div v-html="post.content"></div>
          </div>
        `
      })

    new Vue({
        el: '#blog-posts-events-demo',
        data: {
          posts: [
            {
                id: 1, title: 'gioi thieu ne'
            },
            {
                id: 2, title: 'dang hoc'
            },
            {
                id: 3, title: 'hoc xong'
            },
          ],
          postFontSize: 1
        }
      })




















new Vue({
    el: '#model',
    data: {
      checked: ''
    }
  })



    Vue.config.keyCodes.f1 = 112

    new Vue ({
        el: '#example-3',
        methods: {
            say: function (message) {
                alert(message)
            },
            warn: function (message, event) {
                if (event) event.preventDefault();
                alert(message)
            } 
        }
    })

    var example2 = new Vue ({
        el: '#example-2',
        data: {
            name: 'Vue.js'
        },
        methods: {
            greet: function (event) {
                alert('xin chao' + this.name + '!')
                if(event) {
                    alert(event.target.tagName)
                }
            }
        }
    })


    var example1 = new Vue ({
        el: '#example-1',
        data: {
            counter: 0
        }
    })

    Vue.component('my-component', {
        template: '<p class="foo bar"></p>'
    })

    var app = new Vue ({
        el: '#app-test',
        data: {
            isActive: true,
            hasError: true,
            error: null,
            activeClass: 'active',
            errorClass: 'text-danger',
            activeColor: 'red',
            fontSize: 30,

            classObject: {
                active: true,
                'text-danger': true
            },

            styleObject: {
                color: 'blue',
                fontSize: '20px'
            },

            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

            items: [
                {
                    name: 'khong'
                },
                {
                    name: 'phai'
                },
                {
                    name: 'hoc'
                },
                {
                    name: 'nua'
                },
            ]

        },

        computed: {
            classObject2: function () {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal'
                }
            },
            evenNumbers: function () {
                return this.numbers.filter(function (number){
                    return number % 2 === 0
                })
            }
        },

        methods: {
            even: function (numbers) {
                return numbers.filter(function (number){
                    return number % 2 === 1
                })
            }
        }


    })




// dinh nghia mot component
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
        // template: '<li>cai gi ne </li>'
    })
    var app7 = new Vue({
        el: '#app-7',
        data: {
            items: [
                {
                    id: 0,
                    text: 'cai 1'
                },
                {
                    id: 1,
                    text: 'cai 2'
                },
                {
                    id: 2,
                    text: 'cai 3'
                },
            ]        
        }
    })

// khac
    var app = new Vue({
        el: '#app-6',
        data: {
            message: 'co the sua o day'
        }
    })

    var app = new Vue({
        el: '#app-5',
        data: {
            message: 'qua lai khach cho song lang song'
        },
        methods: {
            nut: function(){
                this.message = this.message.split(' ').reverse().join(' ')
            }
        },
    })

    var app = new Vue({
        el: '#app',
        data: {
            message: 'da dung vuejs'
        }
    })

    var app2 = new Vue({
        el : '#app-2',
        data: {
            message: 'ban da mo trang nay vao ' + new Date().toLocaleString()
        }
    })

    var app3 = new Vue({
        el: "#app-3",
        data: {
            seen: true
        }
    })

    var app4 = new Vue({
        el: "#app-4",
        data: {
            todos: [
                {
                    text: 'hoc js'
                },
                {
                    text: 'hoc html'
                },
                {
                    text: 'hoc css'
                },
                {
                    text: 'hoc haha'
                },
            ]
        }
    })

    var ten = new Vue ({
        data: {
            userProfile: {
                name: 'Thanh Dien'
            }
        }
    })


    Vue.component('todo-item', {
        template: '\
          <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">X</button>\
          </li>\
        ',
        props: ['title']
      })
      
      new Vue({
        el: '#todo-list-example',
        data: {
          newTodoText: '',
          todos: [
            {
              id: 1,
              title: 'luộc khoai',
            },
            {
              id: 2,
              title: 'cùng chị giã gạo',
            },
            {
              id: 3,
              title: 'thổi cơm'
            },
            {
              id: 4,
              title: 'nhổ cỏ vườn'
            }
          ],
          nextTodoId: 5
        },
        methods: {
          addNewTodo: function () {
            this.todos.push({
              id: this.nextTodoId++,
              title: this.newTodoText
            })
            this.newTodoText = ''
          }
        }
      })