const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('sophomore.json').then(response => response.json()).then(json => {
                  this.soph = json
            })
            fetch('junior.json').then(response => response.json()).then(json => {
                  this.junior = json
            })
            fetch('senior.json').then(response => response.json()).then(json => {
                  this.senior = json
            })
            fetch('extras.json').then(response => response.json()).then(json => {
                  this.extras = json.projects || []
            })
      },
      data() {
        return {
            soph: [],
            junior: [],
            senior: [],
            extras: []
        }
    },
    methods: {
      
    }
})

vue_app.mount("#vue_app")