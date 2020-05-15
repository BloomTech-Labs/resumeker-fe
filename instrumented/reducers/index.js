function cov_1osckvp24f() {
  var path = "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\reducers\\index.js";
  var hash = "605262e824ddf61876a63e51f2b61f6b96793500";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\reducers\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 26
        },
        end: {
          line: 11,
          column: 2
        }
      },
      "1": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 11,
          column: 2
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 26
          },
          end: {
            line: 6,
            column: 27
          }
        },
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 11,
            column: 2
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "605262e824ddf61876a63e51f2b61f6b96793500"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1osckvp24f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1osckvp24f();
import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import { userReducer } from './user.js';
import { resumeFormReducer } from './resumeForm.js';
cov_1osckvp24f().s[0]++;

const createRootReducer = history => {
  cov_1osckvp24f().f[0]++;
  cov_1osckvp24f().s[1]++;
  return combineReducers({
    router: connectRouter(history),
    userReducer,
    resumeFormReducer
  });
};

export default createRootReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImNvbm5lY3RSb3V0ZXIiLCJ1c2VyUmVkdWNlciIsInJlc3VtZUZvcm1SZWR1Y2VyIiwiY3JlYXRlUm9vdFJlZHVjZXIiLCJoaXN0b3J5Iiwicm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsZUFBVCxRQUFnQyxPQUFoQztBQUNBLFNBQVNDLGFBQVQsUUFBOEIsd0JBQTlCO0FBQ0EsU0FBVUMsV0FBVixRQUE2QixXQUE3QjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLGlCQUFsQzs7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUlDLE9BQUQsSUFDeEI7QUFBQTtBQUFBO0FBQUEsU0FBQUwsZUFBZSxDQUFDO0FBQ2RNLElBQUFBLE1BQU0sRUFBRUwsYUFBYSxDQUFDSSxPQUFELENBRFA7QUFFZEgsSUFBQUEsV0FGYztBQUdkQyxJQUFBQTtBQUhjLEdBQUQsQ0FBZjtBQUlBLENBTEY7O0FBT0EsZUFBZUMsaUJBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3RSb3V0ZXIgfSBmcm9tIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgIHsgdXNlclJlZHVjZXIgfSBmcm9tICcuL3VzZXIuanMnXHJcbmltcG9ydCB7IHJlc3VtZUZvcm1SZWR1Y2VyIH0gZnJvbSAnLi9yZXN1bWVGb3JtLmpzJ1xyXG5cclxuY29uc3QgY3JlYXRlUm9vdFJlZHVjZXIgPSAoaGlzdG9yeSkgPT5cclxuICBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpLFxyXG4gICAgdXNlclJlZHVjZXIsXHJcbiAgICByZXN1bWVGb3JtUmVkdWNlclxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvb3RSZWR1Y2VyIl19