import { configureStore } from "@reduxjs/toolkit";

import stepReducer from "./stepSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    step: stepReducer,
    user: userReducer,
  },
});

// Configura todo redux, como o provider do useContext
