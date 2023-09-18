import { getAuth } from "firebase/auth";
import { get, getDatabase, onValue, ref, remove, set } from "firebase/database";
import { setIsLoading } from "../Loading-ErrorSlice";
import { getFavItems } from "./FavSlice";
import { setIsAdded } from "../CartSlice";

export const addToFavAction = (item) => {
  return async (dispatch) => {
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    console.log(item);
    const db = getDatabase();

    if (!userId) {
      console.log("please login");
    } else {
      const userFavRef = ref(db, `users/${userId}/fav/`);

      const existingSnapshot = await get(userFavRef);
      const existingItems = existingSnapshot.val() || {};

      if (!existingItems.items) {
        existingItems.items = {};
      }
      existingItems.items[item.id] = item;

      set(userFavRef, existingItems);
      dispatch(setIsAdded(true));
    }
  };
};

export const getFavItemsAction = () => {
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
    const userFavRef = ref(db, `users/${userId}/fav/items/`);
    onValue(userFavRef, (snapshot) => {
      const fav = snapshot.val();
      dispatch(getFavItems(fav));
      dispatch(setIsLoading(true));
    });
  };
};

export const removeFavItemsAction = (itemId) => {
  return async function (dispatch) {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const itemRef = ref(db, `users/${userId}/fav/items/${itemId}`);
    await remove(itemRef);
    await dispatch(getFavItemsAction());
  };
};
