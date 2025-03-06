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
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.info.cloudinaryImageId} alt="res-logo" />
      <h3>{resData?.info.name}</h3>
      <h4>{resData?.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
    </div>
  )
}

const resObj = {
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
}
// "relevance": {
//   "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
//     "sectionId": "MENU_RETURN_FOOD"
// }
const Body = () => {
  return (
    <div className='body'>
      <div className="search">
        Search
      </div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
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
