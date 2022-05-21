const stateDefault = {
  mangNguoiDung: [
    {
      hoTen: "Nguyen van A",
      taiKhoan: "nguyenvanA",
      email: "nguyenvanA@gmail.com",
      soDienThoai: "123",
      loaiNguoiDung: "nguoiDung",
      matKhau: "aer",
    },
    {
      hoTen: "Nguyen van B",
      taiKhoan: "nguyenvanbbbbbb",
      email: "nguyenvanB@gmail.com",
      soDienThoai: "123",
      loaiNguoiDung: "nguoiDung",
      matKhau: "aer",
    },
  ],
  nguoiDungSua: {
    hoTen: "",
    taiKhoan: "",
    email: "",
    soDienThoai: "",
    loaiNguoiDung: "",
    matKhau: "",
  },
};

export const BaiTapQuanLyNguoiDung2Reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SUBMIT": {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      return { ...state };
    }
    case "DELETE": {
      state.mangNguoiDung = [
        ...state.mangNguoiDung.filter((nd) => nd.taiKhoan !== action.value),
      ];
      return { ...state };
    }
    case "IN": {
      state.nguoiDungSua = action.value;
      return { ...state };
    }
    case "CHANGE": {
      let mangNguoiDung = [...state.mangNguoiDung];
      let result = mangNguoiDung.find(
        (nd) => nd.taiKhoan == action.nguoiDungCapNhat.taiKhoan
      );
      console.log(result);
      if (result) {
          for(let key in result){
              result[key] = action.nguoiDungCapNhat[key];
          }
      }
      state.mangNguoiDung = mangNguoiDung
      return {...state};
    }
    default: return state;
  }
};
