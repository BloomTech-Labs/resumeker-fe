function cov_248ase3q60() {
  var path = "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\queries\\queries.js";
  var hash = "cf2334b189d0dcbd7ba1c39271af82247aff6fcb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Chase\\github\\Resumeker\\resumeker-fe\\src\\queries\\queries.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "2": {
        start: {
          line: 25,
          column: 27
        },
        end: {
          line: 52,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cf2334b189d0dcbd7ba1c39271af82247aff6fcb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_248ase3q60 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_248ase3q60();
import { gql } from 'apollo-boost'; // User Queries 

const getUserQuery = (cov_248ase3q60().s[0]++, gql`
    query($id: ID){
        getUser(id: $id){
            id
            firstName
        }
    }
`);
const allUsersQuery = (cov_248ase3q60().s[1]++, gql`
    query{
        allUsers{
            id
            firstName
        }
    }
`); // User Mutations 

const createUserMutation = (cov_248ase3q60().s[2]++, gql`
    mutation($email:String, 
            $userId:String,
            $userImageURL:String,
            $userName:String,
            $firstName:String,
            $lastName:String
            
        ){
        createUser(
            email:$email,
            userId:$userId,
            userImageURL:$userImageURL,
            userName:$userName,
            firstName:$firstName,
            lastName:$lastName
        )
            {
                id
                email
                userId
                userImageURL
                userName
                firstName
                lastName
            }
}
`); // Resume Queries
// Resume Mutations 

export { createUserMutation, getUserQuery, allUsersQuery };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJpZXMuanMiXSwibmFtZXMiOlsiZ3FsIiwiZ2V0VXNlclF1ZXJ5IiwiYWxsVXNlcnNRdWVyeSIsImNyZWF0ZVVzZXJNdXRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsR0FBVCxRQUFvQixjQUFwQixDLENBRUE7O0FBQ0EsTUFBTUMsWUFBWSw2QkFBQ0QsR0FBSTs7Ozs7OztDQUFMLENBQWxCO0FBU0EsTUFBTUUsYUFBYSw2QkFBQ0YsR0FBSTs7Ozs7OztDQUFMLENBQW5CLEMsQ0FVQTs7QUFFQSxNQUFNRyxrQkFBa0IsNkJBQUdILEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFQLENBQXhCLEMsQ0E2QkE7QUFFQTs7QUFFQSxTQUNJRyxrQkFESixFQUVJRixZQUZKLEVBR0lDLGFBSEoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xyXG5cclxuLy8gVXNlciBRdWVyaWVzIFxyXG5jb25zdCBnZXRVc2VyUXVlcnk9Z3FsYFxyXG4gICAgcXVlcnkoJGlkOiBJRCl7XHJcbiAgICAgICAgZ2V0VXNlcihpZDogJGlkKXtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZmlyc3ROYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBhbGxVc2Vyc1F1ZXJ5PWdxbGBcclxuICAgIHF1ZXJ5e1xyXG4gICAgICAgIGFsbFVzZXJze1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcblxyXG4vLyBVc2VyIE11dGF0aW9ucyBcclxuXHJcbmNvbnN0IGNyZWF0ZVVzZXJNdXRhdGlvbiA9IGdxbGBcclxuICAgIG11dGF0aW9uKCRlbWFpbDpTdHJpbmcsIFxyXG4gICAgICAgICAgICAkdXNlcklkOlN0cmluZyxcclxuICAgICAgICAgICAgJHVzZXJJbWFnZVVSTDpTdHJpbmcsXHJcbiAgICAgICAgICAgICR1c2VyTmFtZTpTdHJpbmcsXHJcbiAgICAgICAgICAgICRmaXJzdE5hbWU6U3RyaW5nLFxyXG4gICAgICAgICAgICAkbGFzdE5hbWU6U3RyaW5nXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICl7XHJcbiAgICAgICAgY3JlYXRlVXNlcihcclxuICAgICAgICAgICAgZW1haWw6JGVtYWlsLFxyXG4gICAgICAgICAgICB1c2VySWQ6JHVzZXJJZCxcclxuICAgICAgICAgICAgdXNlckltYWdlVVJMOiR1c2VySW1hZ2VVUkwsXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiR1c2VyTmFtZSxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiRmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiRsYXN0TmFtZVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgICAgICAgIHVzZXJJbWFnZVVSTFxyXG4gICAgICAgICAgICAgICAgdXNlck5hbWVcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgICAgfVxyXG59XHJcbmBcclxuXHJcbi8vIFJlc3VtZSBRdWVyaWVzXHJcblxyXG4vLyBSZXN1bWUgTXV0YXRpb25zIFxyXG5cclxuZXhwb3J0e1xyXG4gICAgY3JlYXRlVXNlck11dGF0aW9uLFxyXG4gICAgZ2V0VXNlclF1ZXJ5LFxyXG4gICAgYWxsVXNlcnNRdWVyeVxyXG59Il19