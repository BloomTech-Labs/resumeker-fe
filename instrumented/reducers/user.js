function cov_2rfbdyax9q() {
  var path = "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\reducers\\user.js";
  var hash = "2405bad38c4675b5f59129ebd22bb9c446affa5c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\reducers\\user.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 27
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "2": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "3": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 45
        }
      },
      "4": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 51
        }
      },
      "5": {
        start: {
          line: 18,
          column: 12
        },
        end: {
          line: 18,
          column: 52
        }
      },
      "6": {
        start: {
          line: 21,
          column: 12
        },
        end: {
          line: 21,
          column: 45
        }
      },
      "7": {
        start: {
          line: 24,
          column: 12
        },
        end: {
          line: 24,
          column: 52
        }
      },
      "8": {
        start: {
          line: 27,
          column: 12
        },
        end: {
          line: 27,
          column: 54
        }
      },
      "9": {
        start: {
          line: 30,
          column: 12
        },
        end: {
          line: 30,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 27
          },
          end: {
            line: 9,
            column: 28
          }
        },
        loc: {
          start: {
            line: 9,
            column: 61
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 28
          },
          end: {
            line: 9,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 9,
            column: 36
          },
          end: {
            line: 9,
            column: 48
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 12,
            column: 45
          }
        }, {
          start: {
            line: 14,
            column: 8
          },
          end: {
            line: 15,
            column: 51
          }
        }, {
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 18,
            column: 52
          }
        }, {
          start: {
            line: 20,
            column: 8
          },
          end: {
            line: 21,
            column: 45
          }
        }, {
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 24,
            column: 52
          }
        }, {
          start: {
            line: 26,
            column: 8
          },
          end: {
            line: 27,
            column: 54
          }
        }, {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 30,
            column: 25
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2405bad38c4675b5f59129ebd22bb9c446affa5c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2rfbdyax9q = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2rfbdyax9q();
import { userConstants } from '../actions/types';
const initialState = (cov_2rfbdyax9q().s[0]++, {
  user: {},
  loading: false,
  error: null
});
cov_2rfbdyax9q().s[1]++;
export const userReducer = (state = (cov_2rfbdyax9q().b[0][0]++, initialState), action) => {
  cov_2rfbdyax9q().f[0]++;
  cov_2rfbdyax9q().s[2]++;

  switch (action.type) {
    case userConstants.GET_USER_REQUEST:
      cov_2rfbdyax9q().b[1][0]++;
      cov_2rfbdyax9q().s[3]++;
      return { ...state,
        loading: true
      };

    case userConstants.GET_USER_SUCCESS:
      cov_2rfbdyax9q().b[1][1]++;
      cov_2rfbdyax9q().s[4]++;
      return { ...state,
        user: action.payload
      };

    case userConstants.GET_USER_FAILURE:
      cov_2rfbdyax9q().b[1][2]++;
      cov_2rfbdyax9q().s[5]++;
      return { ...state,
        error: action.payload
      };

    case userConstants.UPDATE_USER_REQUEST:
      cov_2rfbdyax9q().b[1][3]++;
      cov_2rfbdyax9q().s[6]++;
      return { ...state,
        loading: true
      };

    case userConstants.UPDATE_USER_SUCCESS:
      cov_2rfbdyax9q().b[1][4]++;
      cov_2rfbdyax9q().s[7]++;
      return { ...state,
        user: action.payload
      };

    case userConstants.UPDATE_USER_FAILURE:
      cov_2rfbdyax9q().b[1][5]++;
      cov_2rfbdyax9q().s[8]++;
      return { ...state,
        error: action.payload
      };

    default:
      cov_2rfbdyax9q().b[1][6]++;
      cov_2rfbdyax9q().s[9]++;
      return state;
  }
}; // export function getUserReducer(state = initialState, action) {
//     switch(action.type) {
//         case userConstants.GET_USER_REQUEST:
//             return {
//                 loading: true,
//             }
//         default:
//             return state;
//     }
// }
// export function updateUserReducer(state = {}, action) {
//     switch(action.type) {
//         case userConstants.UPDATE_USER_REQUEST:
//             return {
//                 loading: true,
//             }
//         default:
//             return state;
//     }
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsidXNlckNvbnN0YW50cyIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkdFVF9VU0VSX1JFUVVFU1QiLCJHRVRfVVNFUl9TVUNDRVNTIiwicGF5bG9hZCIsIkdFVF9VU0VSX0ZBSUxVUkUiLCJVUERBVEVfVVNFUl9SRVFVRVNUIiwiVVBEQVRFX1VTRVJfU1VDQ0VTUyIsIlVQREFURV9VU0VSX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLGFBQVQsUUFBOEIsa0JBQTlCO0FBRUEsTUFBTUMsWUFBWSw2QkFBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLEVBRFc7QUFFakJDLEVBQUFBLE9BQU8sRUFBRSxLQUZRO0FBR2pCQyxFQUFBQSxLQUFLLEVBQUU7QUFIVSxDQUFILENBQWxCOztBQU1BLE9BQU8sTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUssZ0NBQUdMLFlBQUgsQ0FBTixFQUF1Qk0sTUFBdkIsS0FBa0M7QUFBQTtBQUFBOztBQUN6RCxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLUixhQUFhLENBQUNTLGdCQUFuQjtBQUFBO0FBQUE7QUFDSSxhQUFPLEVBQUMsR0FBR0gsS0FBSjtBQUFXSCxRQUFBQSxPQUFPLEVBQUU7QUFBcEIsT0FBUDs7QUFFSixTQUFLSCxhQUFhLENBQUNVLGdCQUFuQjtBQUFBO0FBQUE7QUFDSSxhQUFPLEVBQUMsR0FBR0osS0FBSjtBQUFXSixRQUFBQSxJQUFJLEVBQUVLLE1BQU0sQ0FBQ0k7QUFBeEIsT0FBUDs7QUFFSixTQUFLWCxhQUFhLENBQUNZLGdCQUFuQjtBQUFBO0FBQUE7QUFDSSxhQUFPLEVBQUMsR0FBR04sS0FBSjtBQUFXRixRQUFBQSxLQUFLLEVBQUVHLE1BQU0sQ0FBQ0k7QUFBekIsT0FBUDs7QUFFSixTQUFLWCxhQUFhLENBQUNhLG1CQUFuQjtBQUFBO0FBQUE7QUFDSSxhQUFPLEVBQUMsR0FBR1AsS0FBSjtBQUFXSCxRQUFBQSxPQUFPLEVBQUU7QUFBcEIsT0FBUDs7QUFFSixTQUFLSCxhQUFhLENBQUNjLG1CQUFuQjtBQUFBO0FBQUE7QUFDSSxhQUFPLEVBQUMsR0FBR1IsS0FBSjtBQUFXSixRQUFBQSxJQUFJLEVBQUVLLE1BQU0sQ0FBQ0k7QUFBeEIsT0FBUDs7QUFFSixTQUFLWCxhQUFhLENBQUNlLG1CQUFuQjtBQUFBO0FBQUE7QUFDSSxhQUFPLEVBQUUsR0FBR1QsS0FBTDtBQUFZRixRQUFBQSxLQUFLLEVBQUVHLE1BQU0sQ0FBQ0k7QUFBMUIsT0FBUDs7QUFFSjtBQUFBO0FBQUE7QUFDSSxhQUFPTCxLQUFQO0FBcEJSO0FBc0JILENBdkJNLEMsQ0F5QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXJDb25zdGFudHMgfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXI6IHt9LFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSB1c2VyQ29uc3RhbnRzLkdFVF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxyXG5cclxuICAgICAgICBjYXNlIHVzZXJDb25zdGFudHMuR0VUX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWR9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSB1c2VyQ29uc3RhbnRzLkdFVF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24ucGF5bG9hZH1cclxuXHJcbiAgICAgICAgY2FzZSB1c2VyQ29uc3RhbnRzLlVQREFURV9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxyXG5cclxuICAgICAgICBjYXNlIHVzZXJDb25zdGFudHMuVVBEQVRFX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfVxyXG5cclxuICAgICAgICBjYXNlIHVzZXJDb25zdGFudHMuVVBEQVRFX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuLy8gICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4vLyAgICAgICAgIGNhc2UgdXNlckNvbnN0YW50cy5HRVRfVVNFUl9SRVFVRVNUOlxyXG4vLyAgICAgICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVVzZXJSZWR1Y2VyKHN0YXRlID0ge30sIGFjdGlvbikge1xyXG4vLyAgICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbi8vICAgICAgICAgY2FzZSB1c2VyQ29uc3RhbnRzLlVQREFURV9VU0VSX1JFUVVFU1Q6XHJcbi8vICAgICAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4vLyAgICAgfVxyXG4vLyB9Il19