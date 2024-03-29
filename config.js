System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.1",
    "angular-animate": "github:angular/bower-angular-animate@1.4.1",
    "angular-aria": "github:angular/bower-angular-aria@1.4.1",
    "angular-material": "github:angular/bower-material@0.10.0",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "babel": "npm:babel-core@5.6.15",
    "babel-runtime": "npm:babel-runtime@5.6.15",
    "brandly/angular-youtube-embed": "github:brandly/angular-youtube-embed@1.0.2",
    "core-js": "npm:core-js@0.9.18",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:angular/bower-angular-animate@1.4.1": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:angular/bower-angular-aria@1.4.1": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:angular/bower-material@0.10.0": {
      "angular": "github:angular/bower-angular@1.4.1",
      "angular-animate": "github:angular/bower-angular-animate@1.4.1",
      "angular-aria": "github:angular/bower-angular-aria@1.4.1",
      "css": "github:systemjs/plugin-css@0.1.13"
    },
    "github:brandly/angular-youtube-embed@1.0.2": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

