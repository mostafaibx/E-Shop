import { getAuth } from "firebase/auth";
import { get, getDatabase, onValue, ref, remove, set } from "firebase/database";
import { setError, setIsLoading } from "../Loading-ErrorSlice";
import { getFavItems } from "./FavSlice";
import { setIsAdded } from "../CartSlice";
import { setnotification } from "../notificationsSlice";
import { redirect } from "react-router-dom";

export const addToFavAction = (addedItem) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getDatabase();
    let existingItems;

    //first check if the user is logged in.
    if (!user) {
      dispatch(setIsAdded(true));
      dispatch(
        setnotification({
          title: "notification",
          msg: "Please Login to be able to add to favorite",
        })
      );
      redirect("/login");
      return;
    } else {
      //if logged in: define the db ref and get the existing items.
      try {
        const userFavRef = ref(db, `users/${user.uid}/fav/`);
        const existingSnapshot = await get(userFavRef);
        existingItems = existingSnapshot.val() || {};

        if (existingItems.items && existingItems.items[addedItem.id]) {
          console.log("already added");
          return;
        }

        //else item is added to the db.
        if (!existingItems.items) {
          existingItems.items = {};
        }
        existingItems.items[addedItem.id] = addedItem;
        set(userFavRef, existingItems);
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setIsAdded(true));
        dispatch(
          setnotification({
            title: "notification",
            msg: "Item is added to favorite",
          })
        );
        dispatch(setIsLoading(false));
      }
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
    try {
      const db = getDatabase();
      const userFavRef = ref(db, `users/${userId}/fav/items/`);
      onValue(userFavRef, (snapshot) => {
        const fav = snapshot.val();
        dispatch(getFavItems(fav));
      });
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};

export const removeFavItemsAction = (itemId) => {
  return async function (dispatch) {
    dispatch(setIsLoading(true));
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    try {
      const itemRef = ref(db, `users/${userId}/fav/items/${itemId}`);
      await remove(itemRef);
      await dispatch(getFavItemsAction());
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
