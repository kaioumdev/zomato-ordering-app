import './App.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png' alt='logo' />
      </div>
      <div>
        <div className='nav-items'>
          <ul className='nav-items'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData)
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.info?.cloudinaryImageId} alt="res-logo" />
      <h3>{resData?.info.name}</h3>
      <h4>{resData?.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
    </div>
  )
}

const resLists = [
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        "collectionId": "83639",
        "title": "Biryani",
        "description": "Taste these delectable classics, delectable biryanis to make your day.",
        "imageId": "COLLECTIONS/IMAGES/MERCH/2025/1/3/a956d6fd-5fa1-4ab7-b734-05424a92c0cb_Biriyani.png",
        "aspectRatio": "3.44",
        "cta": {
          "link": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
          "type": "collectionv2"
        },
        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        "count": "2 restaurants"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        "sortConfigs": [
          {
            "key": "relevance",
            "title": "Relevance (Default)",
            "selected": true,
            "defaultSelection": true
          },
          {
            "key": "deliveryTimeAsc",
            "title": "Delivery Time"
          },
          {
            "key": "modelBasedRatingDesc",
            "title": "Rating"
          },
          {
            "key": "costForTwoAsc",
            "title": "Cost: Low to High"
          },
          {
            "key": "costForTwoDesc",
            "title": "Cost: High to Low"
          }
        ],
        "restaurantCount": 2,
        "facetList": [
          {
            "label": "10 Mins Delivery",
            "id": "isRestaurantBolt",
            "selection": "SELECT_TYPE_SINGLESELECT",
            "facetInfo": [
              {
                "label": "10 Mins Delivery",
                "id": "isRestaurantBoltfacetquery0",
                "analytics": {},
                "openFilter": true
              }
            ],
            "viewType": "VIEW_TYPE_FLATTENED",
            "subLabel": "Filterby",
            "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
            "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
          },
          {
            "label": "Veg/Non-Veg",
            "id": "isVeg",
            "selection": "SELECT_TYPE_MULTISELECT",
            "facetInfo": [
              {
                "label": "Non Veg",
                "id": "isVegfacetquery0",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Pure Veg",
                "id": "isVegfacetquery1",
                "analytics": {},
                "openFilter": true
              }
            ],
            "viewType": "VIEW_TYPE_HALF_CARD",
            "subLabel": "Filterby",
            "openFilter": true
          },
          {
            "label": "Ratings",
            "id": "rating",
            "selection": "SELECT_TYPE_MULTISELECT",
            "facetInfo": [
              {
                "label": "Ratings",
                "id": "ratingfacetquery0",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Ratings 4.0+",
                "id": "ratingfacetquery1",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Ratings 4.5+",
                "id": "ratingfacetquery2",
                "analytics": {},
                "openFilter": true
              }
            ],
            "viewType": "VIEW_TYPE_HALF_CARD",
            "subLabel": "Filterby",
            "openFilter": true
          },
          {
            "label": "Delivery Time",
            "id": "deliveryTime",
            "selection": "SELECT_TYPE_MULTISELECT",
            "facetInfo": [
              {
                "label": "Less than 30 mins",
                "id": "deliveryTimefacetquery0",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Less than 45 mins",
                "id": "deliveryTimefacetquery1",
                "analytics": {},
                "openFilter": true
              }
            ],
            "viewType": "VIEW_TYPE_HALF_CARD",
            "subLabel": "Filterby",
            "openFilter": true
          },
          {
            "label": "Cost For Two",
            "id": "costForTwo",
            "selection": "SELECT_TYPE_MULTISELECT",
            "facetInfo": [
              {
                "label": "Less than Rs. 300",
                "id": "costForTwofacetquery0",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Rs.300 - Rs.600",
                "id": "costForTwofacetquery1",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Greater than Rs. 600",
                "id": "costForTwofacetquery2",
                "analytics": {},
                "openFilter": true
              }
            ],
            "viewType": "VIEW_TYPE_HALF_CARD",
            "subLabel": "Filterby",
            "openFilter": true
          }
        ]
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "layout": {
          "rows": 1,
          "widgetPadding": {
            "left": 16,
            "right": 16
          },
          "scrollBar": {},
          "widgetTheme": {
            "defaultMode": {
              "backgroundColour": "#FFFFFF",
              "theme": "THEME_TYPE_LIGHT"
            },
            "darkMode": {
              "backgroundColour": "#1B3028",
              "theme": "THEME_TYPE_DARK"
            }
          }
        },
        "id": "restaurantCountWidget",
        "gridElements": {
          "infoWithStyle": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            "text": "Restaurants to explore",
            "headerStyling": {
              "textSize": 15,
              "textColor": "text_color_highest_emphasis",
              "textFontName": "FONT_NAME_HEADER_H5",
              "maxLines": 1
            }
          }
        }
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "391098",
          "name": "ZAZA Mughal Biryani",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/a4fb77f7-64dd-4b9f-bf42-52af997f8a54_391098.jpg",
          "locality": "Sector 7",
          "areaName": "Rohini",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Awadhi"
          ],
          "avgRating": 4.4,
          "parentId": "22473",
          "avgRatingString": "4.4",
          "totalRatingsString": "915",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": "",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=391098&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "354630",
          "name": "Itminaan Matka Biryani - Slow Cooked",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/f9de8d99-1f7c-424c-867a-89fec2056af8_354630.JPG",
          "locality": "Sector 7",
          "areaName": "Rohini",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Mughlai"
          ],
          "avgRating": 4.2,
          "parentId": "107673",
          "avgRatingString": "4.2",
          "totalRatingsString": "448",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": "",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹399",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=354630&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }
]

// const resObj = {
//   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//   "info": {
//     "id": "391098",
//     "name": "ZAZA Mughal Biryani",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/a4fb77f7-64dd-4b9f-bf42-52af997f8a54_391098.jpg",
//     "locality": "Sector 7",
//     "areaName": "Rohini",
//     "costForTwo": "₹250 for two",
//     "cuisines": [
//       "Biryani",
//       "North Indian",
//       "Awadhi"
//     ],
//     "avgRating": 4.4,
//     "parentId": "22473",
//     "avgRatingString": "4.4",
//     "totalRatingsString": "915",
//     "sla": {
//       "deliveryTime": 25,
//       "lastMileTravel": 2.8,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-30 mins",
//       "lastMileTravelString": "2.8 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-03-07 02:00:00",
//       "opened": true
//     },
//     "badges": {
//       "textExtendedBadges": [
//         {
//           "iconId": "guiltfree/GF_Logo_android_3x",
//           "shortDescription": "options available",
//           "fontColor": "#7E808C"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "textBased": {},
//         "imageBased": {},
//         "textExtendedBadges": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "iconId": "guiltfree/GF_Logo_android_3x",
//                 "description": "",
//                 "shortDescription": "options available",
//                 "fontColor": "#7E808C"
//               }
//             }
//           ]
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "₹100 OFF",
//       "subHeader": "ABOVE ₹299",
//       "discountTag": "FLAT DEAL",
//       "logoCtx": {
//         "text": "BENEFITS"
//       }
//     },
//     "orderabilityCommunication": {
//       "title": {},
//       "subTitle": {},
//       "message": {},
//       "customIcon": {},
//       "commsStyling": {}
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {},
//         "video": {}
//       }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {},
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {},
//   "cta": {
//     "link": "swiggy://menu?restaurant_id=391098&source=collection&query=Biryani",
//     "text": "RESTAURANT_MENU",
//     "type": "DEEPLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
// }
// "relevance": {
//   "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
//     "sectionId": "MENU_RETURN_FOOD"
// }


const Body = () => {
  const filteredRestaurants = resLists
    .map((item) => item.card?.card)
    .filter((card) => card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");

  return (
    <div className='body'>
      <div className="search">
        Search
      </div>
      <div className="res-container">
        {
          filteredRestaurants?.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  )
}

function App() {

  return (
    <div className='app'>
      <Header></Header>
      <Body></Body>
    </div>
  )
}

export default App
