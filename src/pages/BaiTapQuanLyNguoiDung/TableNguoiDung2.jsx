import React, { Component } from 'react'
import {connect} from 'react-redux'
class TableNguoiDung2 extends Component {
  render() {
      console.log(this.props);
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
            {this.props.stateNguoiDung.mangNguoiDung.map((nguoiDung, key) =>{
                return <tr key={key}>
                <td style={{backgroundColor:"red"}}>{key + 1}</td>
                <td>{nguoiDung.taiKhoan}</td>
                <td>{nguoiDung.hoTen}</td>
                <td>
                    <img src={`https://i.pravatar.cc?u=${Math.floor(Math.random() * 100)}`} alt="..." width={50} height={50} />
                </td>
                <td>
                    {nguoiDung.email}
                </td>
                <td>
                    {nguoiDung.soDienThoai}
                </td>
                <td>
                   {nguoiDung.loaiNguoiDung}
                </td>
                <td>
                    <button onClick={() =>{
                        const action = {
                            type: "DELETE",
                            value: nguoiDung.taiKhoan

                        }
                        this.props.dispatch(action)
                    }} className="btn btn-danger mr-1">Xóa</button>
                </td>
                <td>
                    <button onClick={() =>{
                        const action = {
                            type: "IN",
                            value: nguoiDung
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
        stateNguoiDung : rootReducer.BaiTapQuanLyNguoiDung2Reducer
    }
}


export default connect(mapStateToProps)(TableNguoiDung2)