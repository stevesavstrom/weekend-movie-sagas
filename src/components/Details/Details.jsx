import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Details() {
  const dispatch = useDispatch();
  const history = useHistory();

  const details = useSelector(store => store.details);


  useEffect(() => {
	dispatch({ type: 'FETCH_MOVIES' });
}, []);

//   const getDetails = (id) => {
// 	  console.log(`trying to get details by id`);
// 	  dispatch({type: 'FETCH_DETAILS', payload: id})
//   }

  return (
    <div>

		<h2>
			Genres: {details.title}
		</h2>
      <h3>This is the details page</h3>
      <h4>
        There will be a bunch of movie details displayed here based on the ID of
        the movie poster that was clicked. For example, 'Avatar' is ID 1 so when
        you click on that poster you will be routed to
        http://localhost:3000/#/details/1 and you will see info about Avatar
        such as title, description, poster, genres.
      </h4>
    </div>
  );
}

export default Details;

// - [ ] This should show all details **including ALL genres** for the selected movie. You will need to store this data in redux! Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?

// - [ ] TODO: The details page should have a `Back to List` button, which should bring the user to the Home/List Page. Base functionality does not require the movie details to load correctly after refresh of the browser.
