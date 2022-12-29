import { configureStore } from "@reduxjs/toolkit";

import routerReducer from "./routerSlice";
import stepReducer from "./stepSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    step: stepReducer,
    user: userReducer,
    router: routerReducer,
  },
});

// Configura todo redux, como o provider do useContext
