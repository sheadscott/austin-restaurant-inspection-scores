import firebase from "./firebase";
import {
  isRestaurant,
  getAddressNumber,
  getRestaurantName,
  getYelpId,
  sortByOldestReview,
  getFirstReviewDate
} from "./yelpHelpers";

if (isRestaurant()) {
  console.log(getRestaurantName());
  console.log(getAddressNumber());
  const fetchUrl = `https://data.austintexas.gov/resource/nguv-n54k.json?$where=restaurant_name like '%25${getRestaurantName()}%25' AND starts_with(address_address, '${getAddressNumber()}')&$order=inspection_date ASC`;

  fetch(fetchUrl)
    .then(response => response.json())
    .then(function(data) {
      const found = Boolean(data.length);
      const facility_id = found ? parseInt(data[0].facility_id) : null;

      console.log(getYelpId());
      firebase(getYelpId(), facility_id, found);

      console.log(data);
      data.forEach(inspection => {
        const date = new Date(inspection.inspection_date).toLocaleDateString(
          "en-US"
        );
        console.log(date);
        const score = document.createElement("span");
        score.className = "score";
        score.setAttribute("title", date);
        score.appendChild(document.createTextNode(inspection.score));
        restInspectWrapper.appendChild(score);
      });
    });

  const headerLeft = document.querySelector(".biz-page-header-left");

  var restInspectWrapper = document.createElement("div");
  restInspectWrapper.className = "ri-wrapper";

  // create a new button element
  var newButton = document.createElement("button");
  // add a class to the button
  newButton.className = "ri-btn";

  // and give it some content
  var newContent = document.createTextNode("Health Scores");
  // add the text node to the newly created div
  newButton.appendChild(newContent);

  restInspectWrapper.appendChild(newButton);

  // add the newly created element and its content into the DOM

  headerLeft.appendChild(restInspectWrapper);
}
