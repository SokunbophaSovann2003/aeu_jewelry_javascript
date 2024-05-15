
export function onProductDetail(data) {
      const productDetail = JSON.stringify(data);
      localStorage.setItem("detail", productDetail);
}

export function addToCard(data) {
    const card = localStorage.getItem("card");
    console.log("this is my card ", card);
    if (card == null) {
        const newCard = [];
        const card = {
            item: data,
            qty: 1
        }
        newCard.push(card);
        localStorage.setItem("card", JSON.stringify(newCard));
    } else {
        const cardData = JSON.parse(card);
        console.log("this is my ", cardData);
        const newCard = {
            item: data,
            qty: 1
        }
        cardData.push(newCard);
        localStorage.setItem("card", JSON.stringify(cardData))
    }
    alert("Success add to card!")
    const test = localStorage.getItem("card");
    console.log("this is my test ", test);
}

export function addToWishlist(data) {
    const wishlist = localStorage.getItem("wishlist");
    console.log("this is my wishlist ", wishlist);
    if (wishlist == null) {
        const newwishlist = [];
        newwishlist.push(data);
        localStorage.setItem("wishlist", JSON.stringify(newwishlist));
    } else {
        const wishlistData = JSON.parse(wishlist);
        console.log("this is my ", wishlistData);
        wishlistData.push(data);
        localStorage.setItem("wishlist", JSON.stringify(wishlistData))
    }
    alert("Success add to wishlist!")
    const test = localStorage.getItem("wishlist");
    console.log("this is my test ", test);
}