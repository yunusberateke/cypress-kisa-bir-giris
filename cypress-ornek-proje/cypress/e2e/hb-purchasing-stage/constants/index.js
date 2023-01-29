import COMPONENTS_PATHS from "./componentsPaths";
import * as URLS from "./urls";

const DEFAULT_HEADER = {
  headers: {
    accept: "application/json, text/plain, */*",
    "user-agent": "axios/0.27.2",
  },
};

export default {
  COMPONENTS_PATHS,
  URLS,
  DEFAULT_HEADER,
};
