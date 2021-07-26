# Weekend Challenge: Sagas Movies Application

## Description
Movie management application that allows users to browse movies, access movie details, and add new movies to the database. This project utilizes React, Redux, Sagas, Node.js, Express, PostgreSQL, Material-UI, HTML, and CSS. This project implements server and client side functionality to create, read, and update items on the server, client and database. This project was created by [Steve Savstrom](https://www.linkedin.com/in/stevesavstrom/) during Week 12 of the [Full Stack Software Engineering program](https://www.primeacademy.io/courses/engineering#curriculum) at [Prime Digital Academy](https://www.primeacademy.io/).

- Users can browse movies and details including title, description, poster, and genres.
- Users navigate from movie list to details page for each movie.
- Users can add new movies and details to the database.

## Screen Shot
![Screen Shot](public/images/screenshot.gif)

## Technologies Used and Prerequisites
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/)
- [Material-UI](https://material-ui.com/)

## Installation
1. Create a SQL database named `saga_movies_weekend` (see `database.sql` for setup instructions.)
2. Open your text editor and run `npm install` in Terminal.
3. Run `npm run server` in Terminal.
4. Run `npm run client` in another Terminal to view React application.

## Usage
Users can browse movies and details in the library. Users can also add movies and details to the database.

## Project Requirements
- [x] Create a database named `saga_movies_weekend`
- [x] Run the queries from `database.sql` on the `saga_movies_weekend` database.
- [x] `npm install`
- [x] `npm run server`
- [x] `npm run client`
- [x] When a movie poster is clicked, a user should be brought to the `/details` view for that movie.
- [x] Navigation to get to the Add Movie Page 
- [x] Details page should show all details **including ALL genres** for the selected movie. 
- [x] Details page should have a `Back to List` button, which should bring the user to the Home/List Page.
- [x] an input field to add the movie title
- [x] an input field to add the movie poster image URL.
- [x] a textarea to add the movie description.
- [x] a dropdown menu for the genres.
- [x] `Cancel` button on Add Movie page, which should bring the user to the Home/List Page.
- [x] `Save` button, which should save these inputs in the database and bring the user to the Home/List Page (which now has the new movie).

## Stretch Goals
- [ ] Allow the app to maintain on refresh our details page.
- [ ] Add to the detail page an edit button that brings the user to the edit page.
- [ ] an input field (for changing the movie title), for the selected movie.
- [ ] a textarea (for changing the movie description)
- [ ]`Cancel` button, which should bring the user to the Details Page
- [ ] `Save` button, which should update the title and description in the database and bring the user to the Details Page

### Other Ideas
- [ ] Display the current values in the input (title) and textarea (description) on the Edit Page
- [ ] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.
- [ ] Allow the user to select many genres as they add
    - You'll have to change the INSERT statement
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [ ] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.

### Considerations
- [ ] Invest some time in styling it up!
    - [ ] Research cards for your movie posters on the list page
    - [ ] Research grids for your movie posters on the Movie List page
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.









