import test from "ava";
import { getLatestPostURL } from "../src/lib/instagram-posts";

const INSTAGRAM_ACCOUNT = "the.charlie.dood";

test("it should fetch the latest post", async (t) => {
  await getLatestPostURL(INSTAGRAM_ACCOUNT);
  t.pass();
});
