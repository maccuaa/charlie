import test from "ava";
import { getLatestPostURL } from "../src/lib/instagram-posts";

test("it should fetch the latest post", async (t) => {
  await getLatestPostURL();
  t.pass();
});
