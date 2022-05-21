const stateDefault ={
  mangNguoiDung : [
      {hoTen: "nguyen VAn a", taiKhoan: "nguyenvana", email: "email@gmail.com", soDienThoai: "3443"}
  ],
  nguoiDungSua :{
    hoTen: "NGuyen Van A",
    taiKhoan: "nguyenvana",
    email: "nguyenvana@gmail.com",
    soDienThoai: "39424",
    matKhau: "3wrwerwe",
    loaiNguoiDung : "NguoiDung",
  }
}



export const BaiTapQuanLyNguoiDung = (state = stateDefault, action) =>{
    switch(action.type){
        case "DANG_KY": {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung]
            return{...state}
        }
        case "XOA_NGUOI_DUNG":{
            state.mangNguoiDung = [...state.mangNguoiDung.filter(nd => nd.taiKhoan !== action.nguoiDung)]
            return {...state}
        }
        case "SUA_NGUOI_DUNG":{
            state.nguoiDungSua = action.nguoiDungSua
            return {...state}
        }
        case "CAP_NHAT":{
           let mangNguoiDung = [...state.mangNguoiDung]
           let result = mangNguoiDung.find(nd => nd.taiKhoan == action.nguoiDungCapNhat.taiKhoan)
           if(result){
               for(let key in result){
                   result[key] = action.nguoiDungCapNhat[key]
               }
           }
           state.mangNguoiDung = mangNguoiDung
            
            return {...state}
        }
        default: return state
    }
}
 

