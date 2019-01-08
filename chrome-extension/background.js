// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

const hanks = [
  {
    address: {
      type: "Point",
      coordinates: [-97.692966915917, 30.312373958475]
    },
    address_address: "5811 BERKMAN DR",
    address_city: "AUSTIN",
    address_state: "TX",
    address_zip: "78723",
    facility_id: "11871666",
    inspection_date: "2018-09-30T19:00:00.000",
    process_description: "1st Follow Up to Routine of 50 - 69",
    restaurant_name: "Swoon Hospitality (Hanks)",
    score: "84",
    zip_code: "78723"
  },
  {
    address: {
      type: "Point",
      coordinates: [-97.692966915917, 30.312373958475]
    },
    address_address: "5811 BERKMAN DR",
    address_city: "AUSTIN",
    address_state: "TX",
    address_zip: "78723",
    facility_id: "11871666",
    inspection_date: "2018-09-13T19:00:00.000",
    process_description: "Routine Inspection",
    restaurant_name: "Swoon Hospitality (Hanks)",
    score: "59",
    zip_code: "78723"
  }
];

chrome.runtime.onInstalled.addListener(function() {
  // fetch(
  //   "https://data.austintexas.gov/resource/nguv-n54k.json?facility_id=11871666"
  // )
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(myJson) {
  //     console.log(JSON.stringify(myJson));
  //   });

  chrome.storage.sync.set({ color: "#3aa757" }, function() {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "www.yelp.com" }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
