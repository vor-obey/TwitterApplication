import React, {useEffect, useState} from "react";
import "./UsersList.sass";

export const UsersList = () => {
  const [user, setUser] = useState()

  useEffect(() => {
      fetch("http://localhost:3002/users")
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => setUser(data))
  })

    return (
      <div className="users-list">
        <div className="user-info">
          <img
            src="https://www.pinkvilla.com/files/styles/gallery-section/public/mouni_roys_these_stunning_photos_will_leave_you_spellbound_check_it_out.jpg?itok=h_J5SVj3"
            alt=""
          />
          <div>
            <span className="user-name">Victor Vorobiov</span>
            <span className="user-login">@Vorobiov199</span>
            <span className="hour">1h</span>
          </div>
        </div>

      </div>
      )
}