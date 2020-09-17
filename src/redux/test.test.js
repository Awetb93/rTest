import { fetch } from "./index";

describe("Fetch posts", () => {
  const posts = { name: "Awet" };
  it("should return array of posts", () => {
    const post = fetch.fulfilled();
    expect(post.payload).toEqual(undefined);
  });
});
