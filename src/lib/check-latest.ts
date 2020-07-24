import axios from "axios";
import { getLatestPostURL } from "./instagram-posts";
import { exit } from "process";

(async () => {
  const response = await axios.get("https://howoldischarlie.ca/latest.json");

  const latest = response.data;

  const { shortcode } = await getLatestPostURL();

  console.log("Deployed shortcode", latest.shortcode);
  console.log("Latest shortcode", shortcode);

  // exit code 0 to abort the deploy
  if (latest.shortcode === shortcode) {
    exit(0);
  }

  // exit code 1 to proceed with the deploy
  exit(1);
})();
