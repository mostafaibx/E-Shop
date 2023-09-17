import { getAuth } from "firebase/auth";
import { get, getDatabase, onValue, ref, set } from "firebase/database";
import { getCartItems } from "./CartSlice";
import { setIsLoading } from "./Loading-ErrorSlice";

export const addToCartAction = (item) => {
  return async (dispatch) => {
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const db = getDatabase();

    const userCartRef = ref(db, `users/${userId}/cart/`);

    const existingSnapshot = await get(userCartRef);
    const existingItems = existingSnapshot.val() || {};

    if (!existingItems.items) {
      existingItems.items = {};
    }
    existingItems.items[item.id] = item;

    set(userCartRef, existingItems);
  };
};

export const getCartItemsAction = () => {
  return async function (dispatch) {
    dispatch(setIsLoading(true));
    const auth = getAuth();
    let userId;
    if (auth.currentUser) {
      userId = auth.currentUser.uid;
      console.log(userId);
    }

    const db = getDatabase();

    const cartRef = ref(db, `users/${userId}/cart/items/`);
    onValue(cartRef, (snapshot) => {
      const cart = snapshot.val();
      dispatch(getCartItems(cart));
      dispatch(setIsLoading(false));
    });
  };
};
