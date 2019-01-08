export const getRestaurantName = () => {
  const restaurantName = document
    .querySelector("h1.biz-page-title")
    .textContent.trim();

  const words = restaurantName.match(/[\d\w]+/);
  return words[0];
};

export const getAddressNumber = () => {
  const address = document
    .querySelector(".map-box-address address")
    .textContent.trim();
  const addressNumber = address.match(/^\d+/);
  return addressNumber[0];
};

export const isRestaurant = () => {
  // Check to see if this is a food establishment
  var scripts = document.querySelectorAll("script");

  const re = /"top_level_categories":.*?restaurants.*?\],/gi;
  let tlcArray = [];
  scripts.forEach(function(script) {
    tlcArray.push(script.text.match(re));
  });

  // Evaluates to true if item in Array is not null
  return tlcArray.some(text => text);
};

export const getYelpId = () => {
  // Get unique Yelp Id
  const urlArray = document.location.href.split("/");
  return urlArray[urlArray.length - 1].split("?")[0];
};

export const sortByOldestReview = () => {
  const url = document.location.href;
  const sort = "sort_by=date_asc";
  if (url.includes(sort)) {
    return;
  }
  const newUrl = url.includes("?")
    ? url.concat("&", sort)
    : url.concat("?", sort);
  document.location.href = newUrl;
};

export const getFirstReviewDate = () => {
  const reviewBox = document.querySelector(".reviews");
  const firstReviewDate = reviewBox
    .querySelector(".rating-qualifier")
    .textContent.trim();
  return firstReviewDate;
};
