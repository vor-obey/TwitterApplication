This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Application start

To start the app, you need to run a number of commands:

### `npm install`

### `npm run proxy:server`

The command needed to access resources located on a different domain

### `npm run json:server`

Needed for data storage

### `npm start`

## How to use the app?

The application allows you to log in through the Git Hub page.<br />
There are four pages. Login page. Your profile page - Profile, the page of registered users - All users,<br />
channel page and post creation - feed.
The profile displays your Git Hub data and your tweets, sorted by creation date.<br />
If there are no tweets, a message about their absence will appear with a link to the post creation page.
All Users - displays all registered users with the date of their last visit.<br />
By clicking on a user's avatar, you will find yourself in his profile and can see his posts.
Feed - displays the tweets of all users ever created.<br />
If they are absent, you will see a corresponding message.<br />
By clicking on the user's avatar, you will also go to the page of the selected user.
