import Vue from "vue";
import { App } from "./app";
import VueKeyCloak from "@dsb-norge/vue-keycloak-js";
import axios from "axios";

function tokenInterceptor() {
  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
}

Vue.use(VueKeyCloak, {
  init: {
    onLoad: "login-required",
    checkLoginIframe: false
  },
  config: {
    realm: "OrionConnect",
    clientId: "orion-connect-client",
    url: "http://localhost:8080/auth",
    "auth-server-url": "http://localhost:8080/auth",
    resource: "orion-connect-client",
    "verify-token-audience": true,
    credentials: {
      secret: "4b721293-46b7-447b-913f-1edff4582991"
    },
    "use-resource-role-mappings": false
  },
  onReady: keycloak => {
    console.log(`I wonder what Keycloak returns: ${keycloak}`);
    tokenInterceptor();
    new Vue({
      el: "#app",
      template: "<App/>",
      render: h => h(App)
    });
  }
});
