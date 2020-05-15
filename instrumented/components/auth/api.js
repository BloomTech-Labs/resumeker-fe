function cov_2ilb7bsva4() {
  var path = "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\components\\auth\\api.js";
  var hash = "1fa7b389ca9f6334e2c50acdb7799643cae4a029";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\components\\auth\\api.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 14
        },
        end: {
          line: 1,
          column: 30
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 9,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 16
          }
        },
        loc: {
          start: {
            line: 3,
            column: 27
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 3
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
    hash: "1fa7b389ca9f6334e2c50acdb7799643cae4a029"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ilb7bsva4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ilb7bsva4();
const axios = (cov_2ilb7bsva4().s[0]++, require("axios"));
export default function () {
  cov_2ilb7bsva4().f[0]++;
  cov_2ilb7bsva4().s[1]++;
  return axios.create({
    baseURL: `"http://localhost:5000"`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosTUFBTUEsS0FBSyw2QkFBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBVixDQUFYO0FBRUEsZUFBZSxZQUFZO0FBQUE7QUFBQTtBQUN6QixTQUFPRCxLQUFLLENBQUNFLE1BQU4sQ0FBYTtBQUNsQkMsSUFBQUEsT0FBTyxFQUFHLHlCQURRO0FBRWxCQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsYUFBYSxFQUFHLFVBQVNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUE4QjtBQURoRDtBQUZTLEdBQWIsQ0FBUDtBQU1EIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBgXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcImAsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpfWAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiJdfQ==