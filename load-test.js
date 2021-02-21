import http from "k6/http";
import { sleep } from "k6";

const service = "http://127.0.0.1:52145";

export let options = {
  vus: 250,
  maxDuration: "30s",
  iterations: 7500
};

export default () => {
  sleep(1);
  http.get(`${service}/cookie`);
}

