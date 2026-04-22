import { UserContext, CourseContext } from "../App";
export default function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <CourseContext.Consumer>
              {(course) => {
                return (
                  <div>
                    USER NAME IS {user} course name is {course}
                  </div>
                );
              }}
            </CourseContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
