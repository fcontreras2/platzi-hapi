"use strict";

const Hapi = require("@hapi/hapi");
const path = require("path");
const inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const hbs = require("handlebars");
require('./app/config/db');
import { routes } from "./app/routes";

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "localhost",
    routes: {
      files: {
        relativeTo: path.join(__dirname, "public")
      }
    }
  });

  await server.register(inert);
  await server.register(Vision);

  server.route({
    method: "GET",
    path: "/images/{p*}",
    handler: {
      directory: {
        path: path.join(__dirname, "public/images")
      }
    }
  });

  server.route({
    method: "GET",
    path: "/",
    handler: {
      file : 'doc/index.html'
    }
  })

  server.route({
    method: "GET",
    path: "/{file*}",
    handler: {
      directory: {
        path: path.join(__dirname, "public/doc")
      }
    }
  })

  server.route(routes);

  await server.start();

  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
