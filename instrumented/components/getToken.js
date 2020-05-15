function cov_qhihi1hxo() {
  var path = "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\components\\getToken.js";
  var hash = "9a828fb8649e7d8644873cb6d595e8833d43a72b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\components\\getToken.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 27
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 28
        },
        end: {
          line: 5,
          column: 42
        }
      },
      "2": {
        start: {
          line: 6,
          column: 48
        },
        end: {
          line: 6,
          column: 58
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 18,
          column: 42
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "5": {
        start: {
          line: 10,
          column: 25
        },
        end: {
          line: 13,
          column: 7
        }
      },
      "6": {
        start: {
          line: 11,
          column: 23
        },
        end: {
          line: 11,
          column: 47
        }
      },
      "7": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 25
        }
      },
      "8": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 19
        }
      },
      "9": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 21
        }
      },
      "10": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 27
          },
          end: {
            line: 4,
            column: 28
          }
        },
        loc: {
          start: {
            line: 4,
            column: 33
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 12
          },
          end: {
            line: 8,
            column: 13
          }
        },
        loc: {
          start: {
            line: 8,
            column: 18
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 10,
            column: 25
          },
          end: {
            line: 10,
            column: 26
          }
        },
        loc: {
          start: {
            line: 10,
            column: 37
          },
          end: {
            line: 13,
            column: 7
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        }, {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        }],
        line: 9
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
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9a828fb8649e7d8644873cb6d595e8833d43a72b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_qhihi1hxo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_qhihi1hxo();
import { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa.js";
cov_qhihi1hxo().s[0]++;
export const useGetToken = () => {
  cov_qhihi1hxo().f[0]++;
  const [token, setToken] = (cov_qhihi1hxo().s[1]++, useState(null));
  const {
    isAuthenticated,
    getTokenSilently
  } = (cov_qhihi1hxo().s[2]++, useAuth0());
  cov_qhihi1hxo().s[3]++;
  useEffect(() => {
    cov_qhihi1hxo().f[1]++;
    cov_qhihi1hxo().s[4]++;

    if (isAuthenticated) {
      cov_qhihi1hxo().b[0][0]++;
      cov_qhihi1hxo().s[5]++;

      const fetchToken = async () => {
        cov_qhihi1hxo().f[2]++;
        const result = (cov_qhihi1hxo().s[6]++, await getTokenSilently());
        cov_qhihi1hxo().s[7]++;
        setToken(result);
      };

      cov_qhihi1hxo().s[8]++;
      fetchToken();
    } else {
      cov_qhihi1hxo().b[0][1]++;
      cov_qhihi1hxo().s[9]++;
      setToken(null);
    }
  }, [isAuthenticated, getTokenSilently]);
  cov_qhihi1hxo().s[10]++;
  return token;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFRva2VuLmpzIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQXV0aDAiLCJ1c2VHZXRUb2tlbiIsInRva2VuIiwic2V0VG9rZW4iLCJpc0F1dGhlbnRpY2F0ZWQiLCJnZXRUb2tlblNpbGVudGx5IiwiZmV0Y2hUb2tlbiIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsUUFBVCxFQUFtQkMsU0FBbkIsUUFBb0MsT0FBcEM7QUFDQSxTQUFTQyxRQUFULFFBQXlCLHVCQUF6Qjs7QUFFQSxPQUFPLE1BQU1DLFdBQVcsR0FBRyxNQUFNO0FBQUE7QUFDL0IsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsNkJBQW9CTCxRQUFRLENBQUMsSUFBRCxDQUE1QixDQUFOO0FBQ0EsUUFBTTtBQUFFTSxJQUFBQSxlQUFGO0FBQW1CQyxJQUFBQTtBQUFuQiwrQkFBd0NMLFFBQVEsRUFBaEQsQ0FBTjtBQUYrQjtBQUkvQkQsRUFBQUEsU0FBUyxDQUFDLE1BQU07QUFBQTtBQUFBOztBQUNkLFFBQUlLLGVBQUosRUFBcUI7QUFBQTtBQUFBOztBQUNuQixZQUFNRSxVQUFVLEdBQUcsWUFBWTtBQUFBO0FBQzdCLGNBQU1DLE1BQU0sNEJBQUcsTUFBTUYsZ0JBQWdCLEVBQXpCLENBQVo7QUFENkI7QUFFN0JGLFFBQUFBLFFBQVEsQ0FBQ0ksTUFBRCxDQUFSO0FBQ0QsT0FIRDs7QUFEbUI7QUFLbkJELE1BQUFBLFVBQVU7QUFDWCxLQU5ELE1BTU87QUFBQTtBQUFBO0FBQ0xILE1BQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGLEdBVlEsRUFVTixDQUFDQyxlQUFELEVBQWtCQyxnQkFBbEIsQ0FWTSxDQUFUO0FBSitCO0FBZ0IvQixTQUFPSCxLQUFQO0FBQ0QsQ0FqQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGgwIH0gZnJvbSBcIi4uL3JlYWN0LWF1dGgwLXNwYS5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdldFRva2VuID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGdldFRva2VuU2lsZW50bHkgfSA9IHVzZUF1dGgwKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgIGNvbnN0IGZldGNoVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VG9rZW5TaWxlbnRseSgpO1xyXG4gICAgICAgIHNldFRva2VuKHJlc3VsdCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoVG9rZW4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRva2VuKG51bGwpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0F1dGhlbnRpY2F0ZWQsIGdldFRva2VuU2lsZW50bHldKTtcclxuXHJcbiAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG4iXX0=