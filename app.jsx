import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './src/assets/icons/logo.png';

const Header = () => {
    return (
        <div className='header'>
            {/* <div className='logo-container'> */}
            <img className='logo' src="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0" alt="Logo" /> 
            {/* </div> */}
            <div className='nav-items-container'>

                    <div className='nav-item'>Home</div>
                    <div className='nav-item'>Delivery</div>
                    <div className='nav-item'>About us</div>
                    <div className='nav-item'>Contact us</div>

            </div>
        </div>
    );
};

const restList = [
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1003415",
            "name": "Pastas By Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/f249ac91-2d8f-472b-b60c-4a7ea4ed9f86_1003415.jpg",
            "locality": "Chhindwara",
            "areaName": "Parasia Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pastas"
            ],
            "avgRating": 3.5,
            "parentId": "306806",
            "avgRatingString": "3.5",
            "totalRatingsString": "7",
            "sla": {
                "deliveryTime": 52,
                "lastMileTravel": 13.1,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "13.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-07-11 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
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
        "analytics": {
            "context": "seo-data-d2a3fa02-2925-4e95-baee-16e41ede66a7"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/pastas-by-pizza-hut-parasia-road-rest1003415",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "830418",
            "name": "Indian Coffee House",
            "cloudinaryImageId": "2469fa88ee9b0b5d1366ba88f2a7fa7f",
            "locality": "Chhindwara City",
            "areaName": "Khajri Chowk",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Chinese",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "106448",
            "avgRatingString": "4.4",
            "totalRatingsString": "219",
            "sla": {
                "deliveryTime": 44,
                "lastMileTravel": 12.5,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "12.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-07-10 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                        "description": "Delivery!"
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
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
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
        "analytics": {
            "context": "seo-data-d2a3fa02-2925-4e95-baee-16e41ede66a7"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1003414",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
            "locality": "Chhindwara",
            "areaName": "Parasia Road",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.3,
            "parentId": "721",
            "avgRatingString": "4.3",
            "totalRatingsString": "143",
            "sla": {
                "deliveryTime": 49,
                "lastMileTravel": 13.1,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "13.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-07-11 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
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
        "analytics": {
            "context": "seo-data-d2a3fa02-2925-4e95-baee-16e41ede66a7"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "658210",
            "name": "The Fusion Lounge",
            "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
            "locality": "Triloki nagar",
            "areaName": "Railway Station",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "395453",
            "avgRatingString": "4.2",
            "totalRatingsString": "353",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 10.4,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "10.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-07-10 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
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
        "analytics": {
            "context": "seo-data-d2a3fa02-2925-4e95-baee-16e41ede66a7"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "945448",
            "name": "Yummy Better",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5c6d3a34-1ac1-44ca-94cf-7e9122459ebc_945448.jpg",
            "locality": "Chhindwara City",
            "areaName": "Chhindwara City",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "South Indian",
                "Fast Food"
            ],
            "veg": true,
            "parentId": "557138",
            "avgRatingString": "--",
            "sla": {
                "deliveryTime": 54,
                "lastMileTravel": 12.3,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "12.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-07-10 22:00:00",
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
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
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
        "analytics": {
            "context": "seo-data-d2a3fa02-2925-4e95-baee-16e41ede66a7"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/yummy-better-chhindwara-city-rest945448",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "795047",
            "name": "New Radhey Shyam Choule Bhature Delhi Wala",
            "cloudinaryImageId": "0adf25c57357161b20c11281d8a443e6",
            "locality": "VIP Road",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Snacks",
                "Chinese"
            ],
            "avgRating": 2.9,
            "veg": true,
            "parentId": "475337",
            "avgRatingString": "2.9",
            "totalRatingsString": "3",
            "sla": {
                "deliveryTime": 60,
                "lastMileTravel": 13.1,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "13.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-07-10 23:00:00",
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
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
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
        "analytics": {
            "context": "seo-data-d2a3fa02-2925-4e95-baee-16e41ede66a7"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/new-radhey-shyam-choule-bhature-delhi-wala-vip-road-mohan-nagar-rest795047",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1046102",
            "name": "Tasty Talk",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/16/7cbbb087-5eb9-4464-bce2-8e8a392d19a2_1046102.jpg",
            "locality": "Chhindwara City",
            "areaName": "Chhindwara City",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "Italian",
                "Pizzas",
                "Pastas",
                "Fast Food",
                "Burgers",
                "Cafe"
            ],
            "avgRating": 3.4,
            "veg": true,
            "parentId": "618935",
            "avgRatingString": "3.4",
            "totalRatingsString": "5",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 11.9,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "11.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 10:30 am, today"
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
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
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d2a3fa02-2925-4e95-baee-16e41ede66a7"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/tasty-talk-chhindwara-city-rest1046102",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "382152",
            "name": "Shriji Namkeen",
            "cloudinaryImageId": "wa8ek94fp9d97ru1tcyn",
            "locality": "Palika Market",
            "areaName": "Chhindwara City",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Snacks",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 3.2,
            "parentId": "187168",
            "avgRatingString": "3.2",
            "totalRatingsString": "58",
            "sla": {
                "deliveryTime": 81,
                "lastMileTravel": 11.1,
                "serviceability": "SERVICEABLE",
                "slaString": "76-81 mins",
                "lastMileTravelString": "11.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 11 am, today"
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
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
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
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
        "analytics": {
            "context": "seo-data-d2a3fa02-2925-4e95-baee-16e41ede66a7"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/shriji-namkeen-palika-market-chhindwara-city-rest382152",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];

const RestaurantCard = ({restObj}) => {
    console.log(restObj);
    return (
        <div className='rest-card-container'>
            <div className='rest-card-image'>
                <img 
                    className='rest-img' 
                    src ={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restObj?.info?.cloudinaryImageId}
                    alt='food image'/>
            </div>
            <div className='rest-card-details'>
                <div className='rest-name'>{restObj?.info?.name}</div>
                <div className='rest-cuisine>'>{restObj?.info?.cuisines.join(", ")}</div>
                <div className='rest-rating'>{restObj?.info?.avgRatingString}⭐️</div>
                <div className='rest-dist'>{restObj?.info?.sla?.slaString}</div>
            </div>
        </div>
    )
}
const Body = () =>{
    return (
        <div className='body'>
            <div className='body-cuisine-section'>
                    <div className='cuisine-section-heading'> What's on your mind?</div>
                    <div>
                        {/* <img src='' alt='cuisine-1'/>
                        <img src='' alt='cuisine-2'/>
                        <img src='' alt='cuisine-3'/>
                        <img src='' alt='cuisine-4'/>
                        <img src='' alt='cuisine-5'/> */}
                    </div>
            </div>
            <div className='body-restaurant-section'>
                <div className='restaurant-section-heading'> Top Restaurants in your city!</div>
                <div className='restaurant-list'>
                {restList.map((restaurant, index) => (
                    <RestaurantCard key= {index} restObj = {restaurant} />
                ))}
                </div>
                
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className='app-layout'> 
        <Header/>
        <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);