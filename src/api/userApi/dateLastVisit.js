import {dateNow} from "../../DateNow/Date";

export const dateLastVisit = async () => {
  const userId = +localStorage.getItem("user-id");
  await fetch(`http://localhost:3002/users/${userId}`,{
    method: "PATCH",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body:  JSON.stringify({
      Test_date: dateNow()
    })
  });
}