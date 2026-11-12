// This question was asked in Atlassian's frontend machine coding round.

// Implement a middleware router for our web service, which based on the path returns different strings (these would represent “functions to invoke” in a real application)

// Example
// router.addRoute("/bar", "result")
// router.callRoute("/bar") -> "result"

// Follow up - search using wildcard
// Example
// router.addRoute("/foo", "foo")
// router.addRoute("/bar/*/baz", "bar")
// router.callRoute("/bar/a/baz") -> "bar"

// if input is this -
// router.addRoute("/foo/baz", "foo")
// router.addRoute("/foo/*", "bar")

// Give two different solutions to priortize
// - Absolute path over wildcard path
// - Return the result in the order the paths are added

// Related Link - https://leetcode.com/discuss/post/5994275/atalassian-sde2-reject-by-anonymous_user-zv6c/

class Router {
  constructor() {
    this.routes = new Map();
  }

  addRoute(route, result) {
    this.routes.set(route, result);
  }

  callRoute(route) {
    const valueOnPath = this.routes.get(route) ?? null;
    if (valueOnPath) return valueOnPath;

    const keys = this.routes.keys();
    for (let key of keys) {
      if (this.wildcardMatch(key, route)) {
        return this.routes.get(key);
      }
    }
  }

  wildcardMatch(text, pattern) {
    const regexPattern = new RegExp(
      "^" + pattern.replace(/\\?/g, ".").replace(/\\*/g, ".*") + "$",
    );
    return regexPattern.test(text);
  }
}

const router = new Router();

router.addRoute("/bar", "result");
router.addRoute("/bar/*/baz", "result");
router.addRoute("/foo/baz", "foo");
router.addRoute("/foo/*", "bar");
console.log(router.callRoute("/bar"));
// result
console.log(router.callRoute("/foo/baz"));
// foo