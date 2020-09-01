import React from "react";
import "./UserProfile.sass";
import Tweets from "../Tweets/Tweets";

export const UserProfile  = () => {
  return (
    <div className="user-profile">
      <h2>Victor</h2>

      <div className="background-user-logo">
        <img className="user-logotype" src="https://www.pinkvilla.com/files/styles/gallery-section/public/mouni_roys_these_stunning_photos_will_leave_you_spellbound_check_it_out.jpg?itok=h_J5SVj3" alt=""/>
      </div>

      <div className="user-profile-data">
        <h2 className="user-profile-data-name">Victor</h2>
        <p>@Vorobiov199</p>
        <p><i className="far fa-calendar-alt"/>Joined August 2020</p>
        <p>Repositories: 5</p>
      </div>

      <div className="users-tweets">
        <p>Tweets</p>
      </div>
      <Tweets/>
      <div>
        <div className="tweets-user-info">

          <img src="https://www.pinkvilla.com/files/styles/gallery-section/public/mouni_roys_these_stunning_photos_will_leave_you_spellbound_check_it_out.jpg?itok=h_J5SVj3" alt=""/>
          <div>
            <span className="user-name">Victor Vorobiov</span>
            <span className="user-login">@Vorobiov199</span>
            <span className="hour">1h</span>
            <p>Considered discovered ye sentiments projecting entreaties of
              melancholy is. In expression an solicitude principles in do.
              Hard do me sigh with west same lady. </p>
          </div>
        </div>

        <div className="tweets-user-info">

          <img src="https://www.pinkvilla.com/files/styles/gallery-section/public/mouni_roys_these_stunning_photos_will_leave_you_spellbound_check_it_out.jpg?itok=h_J5SVj3" alt=""/>
          <div>
            <span className="user-name">Victor Vorobiov</span>
            <span className="user-login">@Vorobiov199</span>
            <span className="hour">1h</span>
            <p>Considered discovered ye sentiments projecting entreaties of
              melancholy is. In expression an solicitude principles in do.
              Hard do me sigh with west same lady. </p>
          </div>
        </div>

      </div>

    </div>
  )
}