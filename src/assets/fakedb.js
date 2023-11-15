// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    let flag=false;
    for(let i=0;i<shoppingCart.length;i++){
        if(shoppingCart[i]==id){
            flag=true;
            break;
        }
    }
    if(!flag){
        shoppingCart.push(id);
    }
    localStorage.setItem('job-applied', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('job-applied', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-applied');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('job-applied');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
