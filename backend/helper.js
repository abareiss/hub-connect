
function max_value(sublistings, param){

    let max_p = 0    
    for(let i = 0; i < sublistings.length; i++){
        price = parseInt(sublistings[i][param])
        if(price > max_p){
            max_p = price
        }
    }

    return max_p
}

function min_value(sublistings, param){

    let min_p = 100000    
    for(let i = 0; i < sublistings.length; i++){
        price = parseInt(sublistings[i][param])
        if(price < min_p){
            min_p = price
        }
    }

    return min_p
}


// Assigns ranking of the each listing and returns a sorted list of listing objects. 
function ranking(sublistings, min_price, max_price, min_views, max_views, 
    min_likes, max_likes, min_rating, max_rating){
    
    for(let i = 0; i < sublistings.length; i++){
        r = rank(sublistings[i],min_price, max_price, min_views, max_views, 
            min_likes, max_likes, min_rating, max_rating)
        sublistings[i].list_ranking  = r
    }

    // list.sort((a, b) => (a.color > b.color) ? 1 : -1)
    listings = sublistings.sort((a, b) => (a.list_ranking > b.list_ranking) ? 1 : -1)
    listings = listings.reverse()
    console.log(listings)
    return listings
}

// Helper function for ranking -> ranks a house based on properties.
function rank(sublisting, min_price, max_price, min_views, max_views, 
    min_likes, max_likes, min_rating, max_rating){
    
    const normal_rating = normalized_score(sublisting.rating, min_rating, max_rating)
    const normal_views = normalized_score(sublisting.views, min_views, max_views)
    const normal_likes = normalized_score(sublisting.likes, min_likes, max_likes)
    const normal_price = normalized_score(sublisting.price, min_price, max_price)
    
    formula = (0.4 * normal_rating) + (0.3 * normal_views) + (0.1 * normal_likes) + (0.2 * normal_price)
    return formula
}

// Helper function for rank -> computes the normalized_score
function normalized_score(actual_score, min_score, max_score){
    return ((actual_score - min_score) / (max_score - min_score))
}


// TESTING
// subleasing =  [   
//     {
//         "_id": "65d6953baff2cdddad504045",
//         "price": 2000,
//         "city": "Irvine",
//         "state": "California",
//         "zip": "92617",
//         "availability_start": "2024-09-01",
//         "availability_end": "2025-06-01",
//         "__v": 0,
//         "image": "xyz",
//         "views": 1000,
//         "rating": 2.45,
//         "likes": 300
//     }, 

//     {
//         "_id": "65d695d0aff2cdddad504047",
//         "price": 2200,
//         "city": "Irvine",
//         "state": "California",
//         "zip": "92617",
//         "availability_start": "2024-09-02",
//         "availability_end": "2025-06-02",
//         "__v": 0,
//         "image": "xyz",
//         "views": 200,
//         "rating": 4.5,
//         "likes": 1000
//     },

//     {
//         "_id": "65d69648aff2cdddad504049",
//         "price": 900,
//         "city": "Irvine",
//         "state": "California",
//         "zip": "92617",
//         "availability_start": "2024-09-03",
//         "availability_end": "2025-06-03",
//         "__v": 0,
//         "image": "xyz",
//         "views": 100,
//         "rating": 3.4,
//         "likes": 900
//     },


// ]

// ranking(subleasing, 900, 2200, 100, 1000, 300, 1000, 2.45, 4.5)





module.exports = {min_value, max_value, ranking}