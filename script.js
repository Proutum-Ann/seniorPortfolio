const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('sophomore.json').then(response => response.json()).then(json => {
                  this.soph = json.projects || []
            })
            fetch('junior.json').then(response => response.json()).then(json => {
                  this.junior = json.projects || []
            })
            fetch('senior.json').then(response => response.json()).then(json => {
                  this.senior = json.projects || []
            })
            fetch('extras.json').then(response => response.json()).then(json => {
                  this.extras = json.files || []
            })
      },
      data() {
        return {
            soph: [],
            junior: [],
            senior: [],
            extras: [],

            activeModal: null,
            activeProject: null,
            activeProjects: [],
            activeAbout: null,
            activeWorks: [],
        }
    },
    methods: {
      async openMainModal(apps) {
            const response = await fetch(apps.destination);
            const data = await response.json();

            this.activeModal = apps;
            this.activeProject = null;
            this.activeProjects = [];
            this.activeAbout = null;
            this.activeWorks = [];

            if (apps.type === "year") {
                  this.activeProjects = data.projects || [];
            }

            if (apps.type === "about") {
                  this.activeAbout = data;
            }

            if (apps.type === "works") {
                  this.activeWorks = data.works || [];
            }
            },

            openProject(project) {
            this.activeProject = project;
            },

            closeMainModal() {
            this.activeModal = null;
            this.activeProject = null;
            },

            closeProjectModal() {
            this.activeProject = null;
      }
    }
})

vue_app.mount("#vue_app")