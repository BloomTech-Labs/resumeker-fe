function cov_dts8nst51() {
  var path = "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\utils\\cache.js";
  var hash = "35d2eb890284288ea8d996406cf39b39c0488280";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\utils\\cache.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 3,
          column: 40
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "35d2eb890284288ea8d996406cf39b39c0488280"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_dts8nst51 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_dts8nst51();
import { InMemoryCache } from 'apollo-cache-inmemory';
export const cache = (cov_dts8nst51().s[0]++, new InMemoryCache());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhY2hlLmpzIl0sIm5hbWVzIjpbIkluTWVtb3J5Q2FjaGUiLCJjYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxhQUFULFFBQThCLHVCQUE5QjtBQUVBLE9BQU8sTUFBTUMsS0FBSyw0QkFBRyxJQUFJRCxhQUFKLEVBQUgsQ0FBWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKTsiXX0=