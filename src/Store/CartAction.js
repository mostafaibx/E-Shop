import { getAuth } from "firebase/auth";
import { get, getDatabase, onValue, ref, remove, set } from "firebase/database";
import { getCartItems, removeFromCart, setIsAdded } from "./CartSlice";
import { setIsLoading } from "./Loading-ErrorSlice";

export const addToCartAction = (item) => {
  return async (dispatch) => {
    const auth = getAuth();
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    if (!userId) {
      console.log("please login");
    } else {
      const userCartRef = ref(db, `users/${userId}/cart/`);

      const existingSnapshot = await get(userCartRef);
      const existingItems = existingSnapshot.val() || {};

      if (!existingItems.items) {
        existingItems.items = {};
      }
      existingItems.items[item.id] = item;

      set(userCartRef, existingItems);

      dispatch(setIsAdded(true));
    }
  };
};

export const getCartItemsAction = () => {
  return async function (dispatch) {
    dispatch(setIsLoading(true));
    const auth = getAuth();
    let userId;
    if (auth.currentUser) {
      userId = auth.currentUser.uid;
    } else {
      return;
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

export const removeCartItemsAction = (itemId) => {
  return async function (dispatch) {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const itemRef = ref(db, `users/${userId}/cart/items/${itemId}`);
    await remove(itemRef);
    await dispatch(getCartItemsAction());
  };
};
