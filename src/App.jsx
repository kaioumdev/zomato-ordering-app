import './App.css'
import Body from './components/Body';
import Header from './components/Header';

const RestaurantCard = (props) => {
  const { resData } = props;
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
        "collectionId": "83633",
        "title": "North Indian",
        "description": "Indulge with the best of North Indian cuisines.",
        "imageId": "COLLECTIONS/IMAGES/MERCH/2025/1/24/820cca8e-ff06-4509-9855-2586384497f4_Northindian.png",
        "aspectRatio": "3.44",
        "cta": {
          "link": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian,north%20indian,layout_NorthIndian,ads_pc_north_indian",
          "type": "collectionv2"
        },
        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        "count": "500 restaurants"
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
        "restaurantCount": 500,
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
            "text": "500 Restaurants to explore",
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
          "id": "326440",
          "name": "Punjabi Angithi (Vegorama Group)",
          "cloudinaryImageId": "g2pklvjnapzfoc4ackou",
          "locality": "Paschim Vihar",
          "areaName": "Paschim Vihar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Tandoor"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "465050",
          "avgRatingString": "4.3",
          "totalRatingsString": "43K+",
          "promoted": true,
          "adTrackingId": "cid=25904899~p=1~adgrpid=25904899#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=326440~eid=00cde261-9ba3-4fb2-bf39-dbf41eb7dab4~srvts=1741335543179~collid=83633",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 23:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹249",
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
              "rating": "4.0",
              "ratingCount": "1.0K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "25904899"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=326440&source=collection&query=North%20Indian",
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
          "id": "10324",
          "name": "Jaiveer Naan & Chaap",
          "cloudinaryImageId": "03704a7e088a34643f5e72923d0d74ba",
          "locality": "Rohini",
          "areaName": "Rohini",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Snacks",
            "Punjabi"
          ],
          "avgRating": 4.4,
          "parentId": "109221",
          "avgRatingString": "4.4",
          "totalRatingsString": "29K+",
          "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textExtendedBadges": {},
              "textBased": {}
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
              "rating": "3.9",
              "ratingCount": "2.2K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=10324&source=collection&query=North%20Indian",
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
          "id": "417157",
          "name": "Dilli Tawa Parantha by Punjabi Angithi",
          "cloudinaryImageId": "y8q6pmicaxcauguy5kqt",
          "locality": "A3rd Block",
          "areaName": "Paschim Vihar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "231905",
          "avgRatingString": "4.3",
          "totalRatingsString": "3.7K+",
          "promoted": true,
          "adTrackingId": "cid=25904914~p=2~adgrpid=25904914#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=417157~eid=4b998843-3864-40c1-aa99-b7d93ef01893~srvts=1741335543179~collid=83633",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 23:30:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹49",
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
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "25904914"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=417157&source=collection&query=North%20Indian",
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
          "id": "36900",
          "name": "Wah Bhai Wah",
          "cloudinaryImageId": "ach30rz8ebyckifblioq",
          "locality": "Rohini",
          "areaName": "Rohini",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Tandoor",
            "Beverages"
          ],
          "avgRating": 3.9,
          "parentId": "14882",
          "avgRatingString": "3.9",
          "totalRatingsString": "11K+",
          "sla": {
            "deliveryTime": 14,
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE",
            "slaString": "10-15 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 23:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                "description": "bolt!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "bolt!",
                      "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textExtendedBadges": {},
              "textBased": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹111",
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
              "rating": "3.7",
              "ratingCount": "1.8K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=36900&source=collection&query=North%20Indian",
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
          "id": "346584",
          "name": "Food Of Dreams By Punjabi Angithi",
          "cloudinaryImageId": "qntudsfxpss0basctezr",
          "locality": "DDA Market",
          "areaName": "Paschim Vihar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Chinese"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "585190",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.7K+",
          "promoted": true,
          "adTrackingId": "cid=26154155~p=4~adgrpid=26154155#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=346584~eid=a9c0da91-4008-4c70-a942-226307499aa5~srvts=1741335543179~collid=83633",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 23:30:00",
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
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": "",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120",
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
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "26154155"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=346584&source=collection&query=North%20Indian",
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
          "id": "300087",
          "name": "Shree Gopal Ji Ke Chhole Bhature (Since 1996)",
          "cloudinaryImageId": "p4fn2esrcxfeeefllnjz",
          "locality": "Green Park",
          "areaName": "Rohini",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Snacks"
          ],
          "avgRating": 4.6,
          "parentId": "559265",
          "avgRatingString": "4.6",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 10,
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE",
            "slaString": "5-10 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 16:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                "description": "bolt!"
              },
              {
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                "description": "OnlyOnSwiggy"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {},
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "bolt!",
                      "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                    }
                  },
                  {
                    "attributes": {
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      "description": "OnlyOnSwiggy"
                    }
                  }
                ]
              }
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
              "rating": "4.3",
              "ratingCount": "7.1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=300087&source=collection&query=North%20Indian",
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
          "id": "791668",
          "name": "Pahalwan Ji Delhi 6 Chicken Restaurant",
          "cloudinaryImageId": "6328e08ba4d78378ee7a3778597488eb",
          "locality": "Rohini",
          "areaName": "Rohini",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Tandoor",
            "Indian"
          ],
          "avgRating": 4,
          "parentId": "470196",
          "avgRatingString": "4.0",
          "totalRatingsString": "21",
          "promoted": true,
          "adTrackingId": "cid=26103833~p=5~adgrpid=26103833#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=791668~eid=ba3626da-a3aa-432a-8414-7d043655e981~srvts=1741335543179~collid=83633",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 1.9,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 23:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹200 OFF",
            "subHeader": "ABOVE ₹999",
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
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "26103833"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=791668&source=collection&query=North%20Indian",
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

function App() {

  return (
    <div className='app'>
      <Header></Header>
      <Body></Body>
    </div>
  )
}

export default App
