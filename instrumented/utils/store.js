function cov_1a0tue98zm() {
  var path = "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\utils\\store.js";
  var hash = "a602732d27a348bb32a77dd93d2ed589b65d2510";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\utils\\store.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 23
        },
        end: {
          line: 9,
          column: 45
        }
      },
      "1": {
        start: {
          line: 12,
          column: 16
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "2": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "store",
        decl: {
          start: {
            line: 11,
            column: 24
          },
          end: {
            line: 11,
            column: 29
          }
        },
        loc: {
          start: {
            line: 11,
            column: 46
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a602732d27a348bb32a77dd93d2ed589b65d2510"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1a0tue98zm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1a0tue98zm();
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "../reducers";
export const history = (cov_1a0tue98zm().s[0]++, createBrowserHistory());
export default function store(preloadedState) {
  cov_1a0tue98zm().f[0]++;
  const store = (cov_1a0tue98zm().s[1]++, createStore(rootReducer(history), preloadedState, applyMiddleware(routerMiddleware(history), thunk, logger)));
  cov_1a0tue98zm().s[2]++;
  return store;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyb3V0ZXJNaWRkbGV3YXJlIiwidGh1bmsiLCJsb2dnZXIiLCJyb290UmVkdWNlciIsImhpc3RvcnkiLCJzdG9yZSIsInByZWxvYWRlZFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxvQkFBVCxRQUFxQyxTQUFyQztBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLFdBQTFCLFFBQTZDLE9BQTdDO0FBRUEsU0FBU0MsZ0JBQVQsUUFBaUMsd0JBQWpDO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixhQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsY0FBbkI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGFBQXhCO0FBRUEsT0FBTyxNQUFNQyxPQUFPLDZCQUFHUCxvQkFBb0IsRUFBdkIsQ0FBYjtBQUVQLGVBQWUsU0FBU1EsS0FBVCxDQUFlQyxjQUFmLEVBQStCO0FBQUE7QUFDNUMsUUFBTUQsS0FBSyw2QkFBR04sV0FBVyxDQUN2QkksV0FBVyxDQUFDQyxPQUFELENBRFksRUFFdkJFLGNBRnVCLEVBR3ZCUixlQUFlLENBQUNFLGdCQUFnQixDQUFDSSxPQUFELENBQWpCLEVBQTRCSCxLQUE1QixFQUFtQ0MsTUFBbkMsQ0FIUSxDQUFkLENBQVg7QUFENEM7QUFPNUMsU0FBT0csS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmUocHJlbG9hZGVkU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gICAgcm9vdFJlZHVjZXIoaGlzdG9yeSksXHJcbiAgICBwcmVsb2FkZWRTdGF0ZSxcclxuICAgIGFwcGx5TWlkZGxld2FyZShyb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpLCB0aHVuaywgbG9nZ2VyKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBzdG9yZTtcclxufSJdfQ==