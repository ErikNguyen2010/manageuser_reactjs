import { combineReducers, createStore } from "redux";
import { BaiTapQuanLyNguoiDung2Reducer } from "./reducer/BaiTapQuanLyNguoiDung2";
import { BaiTapQuanLyNguoiDung } from "./reducer/BaiTapQuanLyNguoiDungReducer";
const rootReducer = combineReducers ({
    BaiTapQuanLyNguoiDung2Reducer,
    BaiTapQuanLyNguoiDung

   
});

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());