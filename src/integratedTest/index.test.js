import Moxios from "moxios";
import { store, fetch } from "../redux/index";
describe("Tests Fetch ", () => {
  beforeEach(() => Moxios.install());
  afterEach(() => Moxios.uninstall());
  test("Store is updated correctly", () => {
    const expectdeState = {
      posts: [
        { title: "AWet1", body: "this is awsame" },
        { title: "AWet2", body: "this is awsame" },

        { title: "AWet3", body: "this is awsame" },
      ],
    };
    Moxios.wait(() => {
      const req = Moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: expectdeState,
      });
    });
    return store.dispatch(fetch()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toEqual(expectdeState);
    });
  });
});
