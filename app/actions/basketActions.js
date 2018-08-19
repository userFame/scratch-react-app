import { 
    FETCH_BASKET,
    FETCH_BASKET_BY_ID,
    POST_BASKET,
    PUT_BASKET,     
    DELETE_BASKET_ITEM,
    VIEW
} from './types'

const url = 'http://localhost:5000/products-route'


// const basket = {
//     piggyBank: 200,
//     accumulatedPrice: 3000,
//     accumulatedProducts: 12
// }

// export const fetchBasket = () => dispatch => {
//     console.log('fetching from Basket');
//     dispatch({
//         type: FETCH_BASKET,
//         payload: basket
//     })
// }

export const fetchBasket = () => dispatch => {
    fetch(url)
        .then(res => res.json())
        .then(products => {
            console.log('basket actions', products)
            dispatch({
                type: FETCH_BASKET,
                payload: products
            })
        })
        .catch(err => console.log(err))
}

export const fetchBasketById = (itemId) => dispatch => {
    fetch(`${url}/${itemId}`)
    .then(res => res.json())
    .then(item => {
        console.log(`fetchBasketById: ${item}`)
        dispatch({
            type: FETCH_BASKET_BY_ID,
            payload: item
        })
    })
}

export const postBasket = (postData, view) => dispatch => {
    console.log('postData', postData)
    fetch( url, {
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(postData)})
        // body: postData })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(post => dispatch({
        type: POST_BASKET,
        payload: post
    }))
}

export const postCheerioBasket = (thirdPartySiteUrl) => {
    console.log(`postCheerioData: ${thirdPartySiteUrl}`)
    fetch(thirdPartySiteUrl,{
        headers: {
            'conent-type': 'application/json'
        },
        method: 'POST',
        // dont need to stringify??
        body: JSON.stringify(thirdPartySiteUrl)})
        // body: thirdPartySiteUrl})
    .then(res => res.json())
    .then(res => console.log(res))
    .then(post => dispatch({
        type: POST_BASKET,
        payload: post
    }))
}

export const putBasket = (id, updateData) => dispatch => {
    fetch(`${url}/${id}`, {
        headers: {
            'content-type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(updateData)
    })
    .then(res => res.json())
    .then(update => {
        console.log(update)
        dispatch({
            type: PUT_BASKET,
            payload: {}
        })
    })
}

export const deleteBasketItem = (itemId, view) => dispatch => {
    console.log('delete from actions', itemId)
    return fetch(`${url}/${itemId}`, {
        method: 'DELETE'
    })
    .then(fetch('http://localhost:5000/products-route')
        .then(res => res.json())
        .then(products => {
            console.log('basket actions', products)
            dispatch({
                type: DELETE_BASKET_ITEM,
                payload: [itemId, view]
            })
        })
        .catch(err => console.log(err)))

    // .then(res => res.json())
    // .then(products => {
        // console.log('remaining items', products.json())
        // dispatch({
        //     type: DELETE_BASKET_ITEM,
        //     payload: products
        // })
    // })
    // .catch(err => console.log(err))
}

export const passView = (view, product) => dispatch => {
    console.log('from passView in basket actions: ', view, product)
    dispatch({
        type: VIEW,
        payload: [view, product]
    })
}


