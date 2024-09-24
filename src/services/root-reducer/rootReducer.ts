import { combineReducers } from '@reduxjs/toolkit';

import { feedsSlice } from '../slices/feeds/feeds';
import { newOrderSlice } from '../slices/new-order/newOrder';
import { constructorSlice } from '../slices/constructor/constructor';
import { userSlice } from '../slices/user/user';
import { userOrdersSlice } from '../slices/user-orders/userOrders';
import { ingredientsSlice } from '../slices/ingredients/Ingredients';

export const rootReducer = combineReducers({
  [ingredientsSlice.name]: ingredientsSlice.reducer,
  [constructorSlice.name]: constructorSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [feedsSlice.name]: feedsSlice.reducer,
  [newOrderSlice.name]: newOrderSlice.reducer,
  [userOrdersSlice.name]: userOrdersSlice.reducer
});
