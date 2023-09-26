import { getAuth } from "firebase/auth";
import { get, getDatabase, onValue, ref, remove, set } from "firebase/database";
import { getCartItems, setIsAdded } from "./CartSlice";
import { setError, setIsLoading } from "./Loading-ErrorSlice";
import { redirect } from "react-router";
import { setnotification } from "./notificationsSlice";

export const addToCartAction = (addedItem) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const auth = getAuth();
    const db = getDatabase();
    const user = auth.currentUser;
    let newItem = { ...addedItem, amount: 1 };

    //check if logged in.
    if (!user) {
      dispatch(setIsAdded(true));
      dispatch(
        setnotification({
          title: "notification",
          msg: "Please Login to be able to use cart",
        })
      );
      redirect("/login");
    } else {
      //const the db ref and get existed items.
      try {
        const userCartRef = ref(db, `users/${user.uid}/cart/`);
        const existingSnapshot = await get(userCartRef);
        const existingItems = existingSnapshot.val() || {};
        //create items document in the db if nothing found.
        if (!existingItems.items) {
          existingItems.items = {};
        }

        //find if the item already existed in the cart.
        const inCart = Object.values(existingItems.items)
          .filter((item) => item.id === newItem.id)
          .map((item) => item.id);

        //if item already existed in cart increment its amount by 1.
        if (inCart.length > 0) {
          const currentItem = Object.values(existingItems.items).find(
            (item) => item.id === newItem.id
          );

          newItem = {
            ...currentItem,
            amount: currentItem.amount + 1 || 1,
          };
        }

        //adding the item to the db.
        existingItems.items[newItem.id] = newItem;
        set(userCartRef, existingItems);
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setIsAdded(true));
        dispatch(
          setnotification({
            title: "notification",
            msg: "Item is added successfully",
          })
        );
        dispatch(setIsLoading(false));
      }
    }
  };
};

export const getCartItemsAction = () => {
  return async function (dispatch) {
    dispatch(setIsLoading(true));
    const auth = getAuth();
    if (!auth.currentUser) {
      return;
    } else {
      try {
        const userId = auth.currentUser.uid;
        const db = getDatabase();
        const cartRef = ref(db, `users/${userId}/cart/items/`);
        onValue(cartRef, (snapshot) => {
          const cart = snapshot.val();
          dispatch(getCartItems(cart));
          dispatch(setIsLoading(false));
        });
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setIsLoading(false));
      }
    }
  };
};

export const removeCartItemsAction = (itemId) => {
  return async function (dispatch) {
    dispatch(setIsLoading(true));
    try {
      const db = getDatabase();
      const auth = getAuth();
      const userId = auth.currentUser.uid;

      const itemRef = ref(db, `users/${userId}/cart/items/${itemId}`);
      await remove(itemRef);
      await dispatch(getCartItemsAction());
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setIsAdded(true));
      dispatch(
        setnotification({
          title: "notification",
          msg: "Item is removed successfully",
        })
      );
      dispatch(setIsLoading(false));
    }
  };
};
