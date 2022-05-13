const config = {};

config.project = {
  name: "minimal-search"
};

config.path = "/PATH/TO/minimal-search/"; // include trailing "/"

config.auth = {
  user: 'USERNAME',
  pass: 'PASSWORD',
  sendImmediately: false
};

config.host = "localhost";

config.databases = {
  content: {
    name: config.project.name + "-content"
  },
  modules: {
    name: config.project.name + "-modules"
  },
};

config.rest = {
  "rest-api": {
    name: config.project.name + "-rest",
    database: config.databases.content.name,
    "modules-database": config.databases.modules.name,
    port: 8099,
    "error-format": "json"
  }
};

config.xdbc = {
  "server-name": config.project.name + "-xdbc",
  "server-type": "xdbc",
  "group-name": "Default",
  "content-database": config.databases.content.name,
  root: "/",
  port: 8006
};

config.user = {
  "user-name": "minimal-search-user", 
  "password": "password",
  "role": [ "application-user-role", "hadoop-user-all" ] 
}

config.entityType = "person";

config.entityLabel = "Person";

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = config;
}
