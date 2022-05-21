import React, { Component } from 'react'
import {connect} from 'react-redux'
class TableNguoiDung extends Component {
  


  render() {
    return (
      <table className='table'>
          <thead>
              <tr>
                  <th>STT</th>
                  <th>Tài khoản</th>
                  <th>Họ tên</th>
                  <th>Ảnh đại diện</th>
                  <th>Email</th>
                  <th>SDT</th>
                  <th>Loại người dùng</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              {this.props.stateNguoiDung.mangNguoiDung.map((value, index) =>{
                  return <tr key={index}>
                  <td >{index + 1}</td>
                  <td>{value.taiKhoan}</td>
                  <td>{value.hoTen}</td>
                  <td>
                      <img src={`https://picsum.photos/${index + 5}/${Math.floor(Math.random(100))}`} alt="..." width={50} height={50} />
                  </td>
                  <td>
                      {value.email}
                  </td>
                  <td>
                      {value.soDienThoai}
                  </td>
                  <td>
                      {value.loaiNguoiDung}
                  </td>
                  <td>
                      <button onClick={() =>{
                          const action = {
                              type: "XOA_NGUOI_DUNG",
                              nguoiDung : value.taiKhoan

                          }
                          this.props.dispatch(action)
                      }} className="btn btn-danger mr-1">Xóa</button>
                  </td>
                  <td>
                      <button  onClick={() =>{
                          const action = {
                              type: "SUA_NGUOI_DUNG",
                              nguoiDungSua: value
                          }
                          this.props.dispatch(action)
                      }} className="btn btn-primary">Sửa</button>
                  </td>
              </tr>
              })}
          </tbody>
      </table>
    )
  }
}


const mapStateToProps = (rootReducer) =>{
    return{
        stateNguoiDung : rootReducer.BaiTapQuanLyNguoiDung
    }
}



export default connect(mapStateToProps)(TableNguoiDung)