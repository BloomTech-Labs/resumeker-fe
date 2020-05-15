function cov_1lyhbaqcfe() {
  var path = "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\actions\\actions.js";
  var hash = "b075373619be4e3d1da579dce96f37dbbd112c53";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\actions\\actions.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 23
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 29
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "2": {
        start: {
          line: 7,
          column: 18
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "3": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 53
        }
      },
      "4": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 37,
          column: 7
        }
      },
      "5": {
        start: {
          line: 29,
          column: 22
        },
        end: {
          line: 29,
          column: 64
        }
      },
      "6": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 75
        }
      },
      "7": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 26
        }
      },
      "8": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 71
        }
      },
      "9": {
        start: {
          line: 40,
          column: 26
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "10": {
        start: {
          line: 40,
          column: 40
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "11": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 23
          },
          end: {
            line: 5,
            column: 24
          }
        },
        loc: {
          start: {
            line: 5,
            column: 29
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 5,
            column: 29
          },
          end: {
            line: 5,
            column: 30
          }
        },
        loc: {
          start: {
            line: 5,
            column: 43
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 5
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 28,
            column: 10
          },
          end: {
            line: 28,
            column: 11
          }
        },
        loc: {
          start: {
            line: 28,
            column: 19
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 28
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 33,
            column: 11
          },
          end: {
            line: 33,
            column: 12
          }
        },
        loc: {
          start: {
            line: 33,
            column: 20
          },
          end: {
            line: 37,
            column: 5
          }
        },
        line: 33
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 40,
            column: 26
          },
          end: {
            line: 40,
            column: 27
          }
        },
        loc: {
          start: {
            line: 40,
            column: 40
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 40
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 40,
            column: 40
          },
          end: {
            line: 40,
            column: 41
          }
        },
        loc: {
          start: {
            line: 40,
            column: 54
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 40
      }
    },
    branchMap: {},
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
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b075373619be4e3d1da579dce96f37dbbd112c53"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1lyhbaqcfe = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1lyhbaqcfe();
import axios from "axios";
import { push } from "connected-react-router";
import { userConstants } from "./types.js";
cov_1lyhbaqcfe().s[0]++;
export const getUser = () => {
  cov_1lyhbaqcfe().f[0]++;
  cov_1lyhbaqcfe().s[1]++;
  return dispatch => {
    cov_1lyhbaqcfe().f[1]++;
    //Defining call information
    const options = (cov_1lyhbaqcfe().s[2]++, {
      url: "https://resumeker-pt-staging.herokuapp.com/graphql",
      method: "post",
      //GraphQL query structure
      data: {
        query: `
                query {    
                    getUser {
                        userInfo
                    }
                }
            `
      },
      //Building token from localStorage token.
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    cov_1lyhbaqcfe().s[3]++;
    dispatch({
      type: userConstants.GET_USER_REQUEST
    }); // Making a call to the backend for user information

    cov_1lyhbaqcfe().s[4]++;
    axios(options).then(res => {
      cov_1lyhbaqcfe().f[2]++;
      const userObj = (cov_1lyhbaqcfe().s[5]++, JSON.parse(res.data.data.getUser.userInfo));
      cov_1lyhbaqcfe().s[6]++;
      dispatch({
        type: userConstants.GET_USER_SUCCESS,
        payload: userObj
      });
      cov_1lyhbaqcfe().s[7]++;
      dispatch(push("/"));
    }).catch(err => {
      cov_1lyhbaqcfe().f[3]++;
      cov_1lyhbaqcfe().s[8]++;
      // console.log(err);
      dispatch({
        type: userConstants.GET_USER_FAILURE,
        payload: err
      });
    });
  };
};
cov_1lyhbaqcfe().s[9]++;
export const updateUser = userData => {
  cov_1lyhbaqcfe().f[4]++;
  cov_1lyhbaqcfe().s[10]++;
  return dispatch => {
    cov_1lyhbaqcfe().f[5]++;
    cov_1lyhbaqcfe().s[11]++;
    dispatch({
      type: userConstants.UPDATE_USER_REQUEST
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJwdXNoIiwidXNlckNvbnN0YW50cyIsImdldFVzZXIiLCJkaXNwYXRjaCIsIm9wdGlvbnMiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwicXVlcnkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0eXBlIiwiR0VUX1VTRVJfUkVRVUVTVCIsInRoZW4iLCJyZXMiLCJ1c2VyT2JqIiwiSlNPTiIsInBhcnNlIiwidXNlckluZm8iLCJHRVRfVVNFUl9TVUNDRVNTIiwicGF5bG9hZCIsImNhdGNoIiwiZXJyIiwiR0VUX1VTRVJfRkFJTFVSRSIsInVwZGF0ZVVzZXIiLCJ1c2VyRGF0YSIsIlVQREFURV9VU0VSX1JFUVVFU1QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsd0JBQXJCO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixZQUE5Qjs7QUFFQSxPQUFPLE1BQU1DLE9BQU8sR0FBRyxNQUFNO0FBQUE7QUFBQTtBQUFBLFNBQUNDLFFBQUQsSUFBYztBQUFBO0FBQ3pDO0FBQ0EsVUFBTUMsT0FBTyw2QkFBRztBQUNkQyxNQUFBQSxHQUFHLEVBQUUsb0RBRFM7QUFFZEMsTUFBQUEsTUFBTSxFQUFFLE1BRk07QUFHZDtBQUNBQyxNQUFBQSxJQUFJLEVBQUU7QUFDSkMsUUFBQUEsS0FBSyxFQUFHOzs7Ozs7O0FBREosT0FKUTtBQWFkO0FBQ0FDLE1BQUFBLE9BQU8sRUFBRTtBQUFFQyxRQUFBQSxhQUFhLEVBQUcsVUFBU0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQThCO0FBQXpEO0FBZEssS0FBSCxDQUFiO0FBRnlDO0FBbUJ6Q1QsSUFBQUEsUUFBUSxDQUFDO0FBQUVVLE1BQUFBLElBQUksRUFBRVosYUFBYSxDQUFDYTtBQUF0QixLQUFELENBQVIsQ0FuQnlDLENBcUJ6Qzs7QUFyQnlDO0FBc0J6Q2YsSUFBQUEsS0FBSyxDQUFDSyxPQUFELENBQUwsQ0FDR1csSUFESCxDQUNTQyxHQUFELElBQVM7QUFBQTtBQUNiLFlBQU1DLE9BQU8sNkJBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxHQUFHLENBQUNULElBQUosQ0FBU0EsSUFBVCxDQUFjTCxPQUFkLENBQXNCa0IsUUFBakMsQ0FBSCxDQUFiO0FBRGE7QUFFYmpCLE1BQUFBLFFBQVEsQ0FBQztBQUFFVSxRQUFBQSxJQUFJLEVBQUVaLGFBQWEsQ0FBQ29CLGdCQUF0QjtBQUF3Q0MsUUFBQUEsT0FBTyxFQUFFTDtBQUFqRCxPQUFELENBQVI7QUFGYTtBQUdiZCxNQUFBQSxRQUFRLENBQUNILElBQUksQ0FBQyxHQUFELENBQUwsQ0FBUjtBQUNELEtBTEgsRUFNR3VCLEtBTkgsQ0FNVUMsR0FBRCxJQUFTO0FBQUE7QUFBQTtBQUNkO0FBRUFyQixNQUFBQSxRQUFRLENBQUM7QUFBRVUsUUFBQUEsSUFBSSxFQUFFWixhQUFhLENBQUN3QixnQkFBdEI7QUFBd0NILFFBQUFBLE9BQU8sRUFBRUU7QUFBakQsT0FBRCxDQUFSO0FBQ0QsS0FWSDtBQVdELEdBakM0QjtBQWlDNUIsQ0FqQ007O0FBbUNQLE9BQU8sTUFBTUUsVUFBVSxHQUFJQyxRQUFELElBQWM7QUFBQTtBQUFBO0FBQUEsU0FBQ3hCLFFBQUQsSUFBYztBQUFBO0FBQUE7QUFDcERBLElBQUFBLFFBQVEsQ0FBQztBQUFFVSxNQUFBQSxJQUFJLEVBQUVaLGFBQWEsQ0FBQzJCO0FBQXRCLEtBQUQsQ0FBUjtBQUNELEdBRnVDO0FBRXZDLENBRk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VyQ29uc3RhbnRzIH0gZnJvbSBcIi4vdHlwZXMuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgLy9EZWZpbmluZyBjYWxsIGluZm9ybWF0aW9uXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHVybDogXCJodHRwczovL3Jlc3VtZWtlci1wdC1zdGFnaW5nLmhlcm9rdWFwcC5jb20vZ3JhcGhxbFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIC8vR3JhcGhRTCBxdWVyeSBzdHJ1Y3R1cmVcclxuICAgIGRhdGE6IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgIHF1ZXJ5IHsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VXNlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgLFxyXG4gICAgfSxcclxuICAgIC8vQnVpbGRpbmcgdG9rZW4gZnJvbSBsb2NhbFN0b3JhZ2UgdG9rZW4uXHJcbiAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpfWAgfSxcclxuICB9O1xyXG5cclxuICBkaXNwYXRjaCh7IHR5cGU6IHVzZXJDb25zdGFudHMuR0VUX1VTRVJfUkVRVUVTVCB9KTtcclxuXHJcbiAgLy8gTWFraW5nIGEgY2FsbCB0byB0aGUgYmFja2VuZCBmb3IgdXNlciBpbmZvcm1hdGlvblxyXG4gIGF4aW9zKG9wdGlvbnMpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXJPYmogPSBKU09OLnBhcnNlKHJlcy5kYXRhLmRhdGEuZ2V0VXNlci51c2VySW5mbyk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdXNlckNvbnN0YW50cy5HRVRfVVNFUl9TVUNDRVNTLCBwYXlsb2FkOiB1c2VyT2JqIH0pO1xyXG4gICAgICBkaXNwYXRjaChwdXNoKFwiL1wiKSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdXNlckNvbnN0YW50cy5HRVRfVVNFUl9GQUlMVVJFLCBwYXlsb2FkOiBlcnIgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKHVzZXJEYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHVzZXJDb25zdGFudHMuVVBEQVRFX1VTRVJfUkVRVUVTVCB9KTtcclxufTtcclxuIl19