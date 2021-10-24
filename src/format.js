import e from "cors";

export function getFormattedBigNumber(num) {
    if (num >= 1e6) {
        num = Math.floor(num / 1e5) / 10
        num = Math.ceil(num);
        return `${num}M`;
    } else if (num >= 1e3) {
        num = Math.floor(num / 1e2) / 10;
        num = Math.ceil(num);
        return `${num}K`;
    }
    return Math.ceil(num);
}


export function getFullName(full_name) {
    if (full_name) {
        const regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
        return full_name.replace(regex, "").trim();
    }
    //  return full_name;
};

export function getEngagementRateClass(followers, engagement_rate) {

    var engagement_classes = {
        poor: {
            name: "poor",
            color: "red"
        },
        average: {
            name: "average",
            color: "orange"
        },
        good: {
            name: "good",
            color: "blue"
        },
        excellent: {
            name: "excellent",
            color: "green"
        },
        suspicious: {
            name: "suspicious",
            color: "teal"
        }
    };

    var engagement_rules = [{
            followers: 100,
            rates: [0.050926, 0.101852, 0.203704]
        },
        {
            followers: 1000,
            rates: [0.03449145, 0.0689829, 0.147154]
        },
        {
            followers: 10000,
            rates: [0.01579585, 0.0445148, 0.08891929999999999]
        },
        {
            followers: 100000,
            rates: [0.0087429, 0.021637299999999998, 0.045525300000000005]
        },
        {
            followers: 1000000,
            rates: [0.00701169, 0.0174356, 0.0376352]
        },
        {
            followers: 10000000,
            rates: [0.0059704975, 0.015940950000000002, 0.035808650000000004]
        },
        {
            followers: 100000000,
            rates: [0.00847671, 0.01726755, 0.036529650000000004]
        },
        {
            followers: 1000000000,
            rate: [0.014303799999999998, 0.0182666, 0.0318431]
        }
    ];

    let className = null
    engagement_rules.forEach(rule => {
        if (rule.followers < followers) {
            if (engagement_rate < rule.rates[0]) {
                className = engagement_classes.poor;
                return;
            } else if (engagement_rate < rule.rates[1]) {
                className = engagement_classes.poor;
                return;
            } else if (engagement_rate < rule.rates[2]) {
                className = engagement_classes.average;
                return;
            } else if (
                engagement_rate >= rule.rates[3] ||
                engagement_rate < 1
            ) {
                className = engagement_classes.excellent;
            }
            className = engagement_classes.suspicious;
        }
    });

    // console.log('className',className)
    return className;
};


export function getEngagementRatePost(likes, replies, followers) {
    var res = getFormattedMaxDecimalsNumber(
        ((likes + replies) / followers) * 100,
        1
    );
    return res + "%";
};


export function getFormattedMaxDecimalsNumber(num, decimals) {
    return Math.abs(Number(num) || 0).toFixed(decimals) * 1.0;
};


/// get best 3 images for instagram 

export function getBestInstagramPosts(highlights, followers) {
    let most_likes_index = 0;
    let most_commented_index = 0;
    let most_engaging_pom = 0;
    let most_engaging_index = 0;
    let res = {};


    if (highlights) {
        highlights.forEach((e, index) => {
            if (e.likes > highlights[most_likes_index].likes) {
                most_likes_index = index;
            }
            if (e.replies > highlights[most_commented_index].replies) {
                most_commented_index = index;
            }
            let most_engaging = getEngagement(e.likes, e.replies, followers);

            if (most_engaging > most_engaging_pom) {
                most_engaging_pom = most_engaging;
                most_engaging_index = index;
            }
        });
    }
    res = {
        most_likes_index: most_likes_index,
        most_commented_index: most_commented_index,
        most_engaging_index: most_engaging_index
    }


    // add new images for best images in case that the best image are equel
    if ((res.most_commented_index < 10) && (res.most_commented_index === res.most_likes_index)) {
        res.most_commented_index = res.most_commented_index + 1;
    }

    if ((res.most_engaging_index < 10) && (res.most_engaging_index === res.most_likes_index)) {
        res.most_engaging_index = res.most_engaging_index + 2;
    }


    return res;
};


export function getEngagement(likes, replies, followers) {
    return getFormattedMaxDecimalsNumber(
        ((likes + replies) / followers) * 100,
        1
    );

};


export function sortInstagramPosts(highlights) {
    let sortArr = highlights.sort((a, b) =>
        b.likes.toString().localeCompare(a.likes.toString()) || b.replies.toString().localeCompare(a.replies.toString()));
    console.log('sortedArr', sortArr);
    return sortArr;
};


export function getTopHashtags(hashtags) {
    let top3 = [];
    let sortHashtags = null;
    let topHashtags = [];

    sortHashtags = hashtags.sort((a, b) =>
        b.count - a.count);


    // get top 3 best hashtags count if array is bigger than 3
    if (sortHashtags.length > 3) {
        top3 = sortHashtags.slice(0, 3);
        top3.forEach(el => topHashtags.push('#' + el.hashtag));
    }
    else{
        sortHashtags.forEach(el => topHashtags.push('#' + el.hashtag));
    }


    return topHashtags;
};




// const getFormattedBigNumber = num => {
//   if (num >= 1e6) {
//     return `${Math.floor(num / 1e5) / 10}M`;
//   } else if (num >= 1e3) {
//     return `${Math.floor(num / 1e2) / 10}K`;
//   }
//   return Math.ceil(num);
// };



// const getFormattedCurrency = (n, c, d, t) => {
//   let s, i, j;
//   (c = isNaN((c = Math.abs(c))) ? 2 : c),
//     (d = d == undefined ? "." : d),
//     (t = t == undefined ? "," : t),
//     (s = n < 0 ? "-" : ""),
//     (i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c))))),
//     (j = (j = i.length) > 3 ? j % 3 : 0);

//   return (
//     s +
//     (j ? i.substr(0, j) + t : "") +
//     i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${t}`) +
//     (c
//       ? d +
//         Math.abs(n - i)
//           .toFixed(c)
//           .slice(2)
//       : "")
//   );
// };

// const getBestInstagramPosts = (highlights, followers) => {
//   let most_likes_index = 0;
//   let most_commented_index = 0;
//   let most_engaging_pom = 0;
//   let most_engaging_index = 0;
//   if (highlights) {
//     highlights.forEach((e, index) => {
//       if (e.likes > highlights[most_likes_index].likes) {
//         most_likes_index = index;
//       }
//       if (e.replies > highlights[most_commented_index].replies) {
//         most_commented_index = index;
//       }
//       let most_engaging = getEngagement(e.likes, e.replies, followers);

//       if (most_engaging > most_engaging_pom) {
//         most_engaging_pom = most_engaging;
//         most_engaging_index = index;
//       }
//     });
//   }
//   return {
//     most_commented_index: most_commented_index,
//     most_likes_index: most_likes_index,
//     most_engaging_index: most_engaging_index
//   };
// };



// const getFormattedRate = rate => {
//   const rateNum = Math.abs(Number(rate) || 0);
//   if (rateNum < 0.001) {
//     return "<0.1";
//   }
//   return (rateNum * 100).toFixed(2);
// };

// const getEngagementRateClass = profile => {
//   const followers = profile.followers ? profile.followers : profile.subscribers;
//   const engagement_rate = profile.engagement_rate ? profile.engagement_rate : profile.avg_engagement_rate;
//   let className = null;
//   constants.eng_rules.forEach(rule => {
//     if (rule.followers < followers) {
//       if (engagement_rate < rule.rates[0]) {
//         className = constants.eng_classes.poor.name;
//         return;
//       } else if (engagement_rate < rule.rates[1]) {
//         className = constants.eng_classes.average.name;
//         return;
//       } else if (engagement_rate < rule.rates[2]) {
//         className = constants.eng_classes.good.name;
//         return;
//       } else if (
//         engagement_rate >= rule.rates[2] ||
//         engagement_rate < 1
//       ) {
//         className = constants.eng_classes.excellent.name;
//       }
//       className = constants.eng_classes.suspicious.name;
//     }
//   });
//   return className;
// };

// const getFormattedEstimatedPost = cost_post => {
//   return getFormattedCurrency(
//     Math.ceil((1 + cost_post / 1e5) * Math.pow(Math.log10(cost_post), 5)),
//     0
//   );
// };

// const getFormattedDate = str => {
//   const date = new Date(str * 1000);
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   const ampm = hours >= 12 ? "pm" : "am";
//   hours = hours % 12;
//   hours = hours ? hours : 12;
//   minutes = minutes < 10 ? `0${minutes}` : minutes;
//   const strTime = `${hours}:${minutes} ${ampm}`;
//   return `${date.getMonth() +
//     1}/${date.getDate()}/${date.getFullYear()} ${strTime}`;
// };

// // const getSlugByString = (str, isCategory) => {
// //   if (!str) return null;
// //   let slug = slugify(
// //     str,
// //     {
// //       lower: true,
// //     }
// //   );
// //   slug = slug
// //     .replace(/u\.s\./g, "u-s")
// //     .replace(/['"’“(),]/g, "");
// //   if (isCategory) {
// //     slug = slug.replace(/-and-/g, "-");
// //   }
// //   return slug;
// // };

// const getLocationBySlug = locationSlug => {
//   let location = null;
//   if (locationSlug) {
//     for (const country in constants.locations) {

//       const countryCode = constants.country_codes[country.trim()].toLowerCase();
//       const countrySlug = getSlugByString(country);

//       if (
//         locationSlug.indexOf(countrySlug) !== 0 &&
//         locationSlug.indexOf(countryCode + "-") !== 0 &&
//         countryCode !== locationSlug &&
//         countrySlug !== locationSlug
//       ) continue;

//       location = {
//         country: country,
//         region: null,
//         city: null,
//         slug: countryCode
//       };

//       if (locationSlug === countrySlug || locationSlug === countryCode) break;

//       const regions = constants.locations[country];

//       for (const region in regions) {
//         const regionSlug = getSlugByString(region);
//         const regionCountryCode = `${countryCode}-${regionSlug}`;
//         const regionCountrySlug = `${countrySlug}-${regionSlug}`;

//         if (
//           locationSlug.indexOf(regionCountryCode) !== 0 &&
//           locationSlug.indexOf(regionCountrySlug) !== 0
//         ) continue;

//         if (location.region) {
//           if (location.region.length > regionSlug.length) continue;
//         }

//         location = {
//           country: country,
//           region: region,
//           city: null,
//           slug: regionCountryCode
//         };

//         if (locationSlug === regionCountryCode || locationSlug === regionCountrySlug) break;

//         const cities = regions[region];
//         for (let ci = 0; ci < cities.length; ci++) {
//           const city = cities[ci];
//           const citySlug = getSlugByString(city);
//           const cityRegionCountryCode = getSlugByString(`${countryCode}-${regionSlug}-${citySlug}`);
//           const cityRegionCountrySlug = getSlugByString(`${countrySlug}-${regionSlug}-${citySlug}`);
//           if (cityRegionCountryCode.indexOf(locationSlug) === 0 ||
//             cityRegionCountrySlug.indexOf(locationSlug) === 0
//           ) {

//             if (location.city) {
//               if (location.city.length > citySlug.length) continue;
//             }

//             location = {
//               country: country,
//               region: region,
//               city: city,
//               slug: cityRegionCountryCode
//             };

//           }
//         };
//       }
//     }
//   }
//   return location;
// };

// const getFullName = profile => {
//   if (profile.full_name) {
//     const regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
//     return profile.full_name.replace(regex, "").trim();
//   }
//   return profile.username;
// };

// const getCategoriesString = profile => {
//   if (profile.categories) {
//     const categories =
//       profile.categories == "string"
//         ? JSON.parse(profile.categories)
//         : profile.categories;
//     return categories.join("|");
//   }
//   return "";
// };

// const getInstagramCategoryBySlug = categorySlug => {
//   let result = null;
//   constants.instagram_categories.categories.forEach(category => {
//     if (getSlugByString(category.category, true) === categorySlug) {
//       result = category;
//     }
//   });
//   return result;
// };

// const getSingularInstagramCategoryName = category => {
//   const categoryLowerCase = category.toLowerCase().trim();
//   const singularCategories = {
//     babies: "Baby",
//     "bars and restaurants": "Bar and Restaurant",
//     cars: "Car",
//     "clothes and accessories": "Clothing and Accessory",
//     comics: "Comic",
//     drinks: "Drink",
//     "fitness models": "Fitness Model",
//     hotels: "Hotel",
//     kids: "Kid",
//     motorcycles: "Motorcycle",
//     parties: "Party",
//     "performing Arts": "Performing Art",
//     pets: "Pet",
//     sports: "Sport",
//     tattoos: "Tattoo",
//     toys: "Toy",
//     humanities: "Humanity",
//     "beauty and cosmetics": "Beauty and Cosmetic"
//   };
//   return singularCategories[categoryLowerCase]
//     ? singularCategories[categoryLowerCase]
//     : category;
// };

// const getCategoryURL = (category, location) => {

//   let locationSlug, url;
//   let categorySlug = getSlugByString(
//     category,
//     true
//   );
//   if (location) {
//     if (
//       location.country &&
//       location.region &&
//       location.city
//     ) {
//       locationSlug = `${
//         constants.country_codes[location.country.trim()]
//       }-${location.region}-${location.city}`;
//     } else if (location.country && location.region) {
//       locationSlug = `${
//         constants.country_codes[location.country.trim()]
//       }-${location.region}`;
//     } else if (location.country) {
//       locationSlug = location.country;
//     }
//   }
//   if (locationSlug && categorySlug) {
//     url = `${categorySlug}-influencers-${locationSlug}`;
//   } else if (locationSlug) {
//     url = `${locationSlug}-influencers`;
//   } else if (categorySlug) {
//     url = `${categorySlug}-influencers`;
//   } else {
//     url = `search`;
//   }
//   return getSlugByString(url);
// };

// const getFullCountryName = countryName => {
//   let hasThe = false;
//   if (countryName) {
//     const theCountriesList = ["United States", "United Kingdom", "Philippines", "Ivory Coast", "Netherlands", "United Arab Emirates"];
//     if (theCountriesList.includes(countryName.trim())) {
//       hasThe = true;
//     } else if (countryName.toLowerCase().includes("island")) {
//       hasThe = true;
//     } else if (countryName.toLowerCase().includes("republic")) {
//       hasThe = true;
//     }
//   }
//   return `${hasThe?`the `:``}${countryName}`;
// };

// const isNumber = value => {
//   return value === null ? false : !isNaN(value);
// };

// const getTiktokEarningEstimate = (fans, engagement_rate) => {
//   let e;
//   if (fans < 5e6) {
//     e = 0.654 + 0.00052022 * fans + 0.031 * engagement_rate;
//   } else {
//     e = -163.108 + 5.289e-04 * fans + 7.850 * engagement_rate;
//   }
//   return `$${getFormattedCurrency(Math.round(e * .75), 0)} - $${getFormattedCurrency(Math.round(e * 1.25), 0)}`;
// };

// const removeNeedlessLetters = (string) => {
//   if (!string) return string;
//   return string.replace(/[()\///]/ig, " ").trim();
// };


// module.exports = {
//   get_formatted_big_number: getFormattedBigNumber,
//   get_formatted_currency: getFormattedCurrency,
//   get_formatted_rate: getFormattedRate,
//   get_engagement_rate_class: getEngagementRateClass,
//   get_formatted_max_decimals_number: getFormattedMaxDecimalsNumber,
//   get_best_instagram_posts: getBestInstagramPosts,
//   get_engagement: getEngagement,
//   get_formatted_date: getFormattedDate,
//   get_formatted_estimated_post: getFormattedEstimatedPost,
//   get_location_by_slug: getLocationBySlug,
//   get_instagram_category_by_slug: getInstagramCategoryBySlug,
//   get_singular_instagram_category_name: getSingularInstagramCategoryName,
//   get_full_name: getFullName,
//   get_categories_string: getCategoriesString,
// //   get_slug_by_string: getSlugByString,
//   get_category_url: getCategoryURL,
//   get_full_country_name: getFullCountryName,
//   is_number: isNumber,
//   remove_needless_letters: removeNeedlessLetters,
//   get_tiktok_earning_estimate: getTiktokEarningEstimate
// };