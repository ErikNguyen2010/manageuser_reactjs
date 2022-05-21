import React, { Component } from 'react'
import {connect} from "react-redux"
 class FormDangKy2 extends Component {
state = {
    value : {
        taiKhoan : "",
        hoTen: "",
        email: "",
        matKhau: "",
        soDienThoai: "",
        loaiNguoiDung: "nguoiDung",

    },
    error:{
        taiKhoan : "",
        hoTen: "",
        email: "",
        matKhau: "",
        soDienThoai: ""
    }
}
handleChange = (event) =>{
    let {value, id , className, name} = event.target
    let dataType = event.target.getAttribute("data-type")
    let newValue = {...this.state.value}
    newValue[id] = value
    let newError = {...this.state.error}
    let messErr = ""
    if(value == ""){
        messErr = "ko dc bo trong"
    }
    if(dataType == "email"){
        let regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!regexEmail.test(value)){
            messErr = "email sai định dạng"
        }
    }
    newError[id] = messErr
    this.setState({
        value: newValue,
        error: newError
    },() =>{
        console.log(this.state);
    })
}
handleSubmit = (event) =>{
    event.preventDefault()
    let {value, error} = this.state
    for(let key in value){
        if(value[key] == ""){
            alert("ko dc bo trong")
            return
        }
    }
    for(let key in error){
        if(error[key] !== ""){
            alert("sai roi")
            return
        }
    }

    const action = {
        type: "SUBMIT",
        nguoiDung: this.state.value
    }
    this.props.dispatch(action)
}

static getDerivedStateFromProps(prop, state){
    if(state.value.taiKhoan !== prop.stateNguoiDungSua.taiKhoan){
        state.value = prop.stateNguoiDungSua
    }
    return state
}
// componentWillReceiveProps(newProps){
//     this.setState({
//         value: newProps.stateNguoiDungSua
//     })
// }


  render() {
      let {hoTen, taiKhoan, soDienThoai, loaiNguoiDung, email, matKhau} = this.state.value
    return (
    <form onSubmit={this.handleSubmit}>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <p>Tài khoản</p>
                            <input value={taiKhoan} onChange={this.handleChange} id='taiKhoan' className='form-control' name='taiKhoan' />
                            <p className='text text-danger'> {this.state.error.taiKhoan}</p>
                        </div>
                        <div className="form-group">
                            <p>Họ tên</p>
                            <input value={hoTen} onChange={this.handleChange} id='hoTen' className='form-control' name='hoTen' />
                        </div>
                        <div className="form-group">
                            <p>Email</p>
                            <input data-type='email' value={email} onChange={this.handleChange} id='email' className='form-control' name='email' />
                            <p className='text text-danger'>{this.state.error.email}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <p>Mật khẩu</p>
                            <input value={matKhau} onChange={this.handleChange} id='matKhau' className='form-control' name='matKhau' />
                        </div>
                        <div className="form-group">
                            <p>Số điện thoại</p>
                            <input data-type='phone' value={soDienThoai} onChange={this.handleChange} id='soDienThoai' className='form-control' name='soDienThoai' />
                        </div>
                        <div className="form-group">
                            <p>Loại người dùng</p>
                            <select value={loaiNguoiDung} className='form-control' name="loaiNguoiDung" id="loaiNguoiDung">
                                <option value="nguoiDung">NguoiDung</option>
                                <option value="quanTri">QuanTri</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-success">dang ky</button>
                    <button onClick={(event) =>{
                     
                        let {value, error} = this.state
                        let newError = {...error}
                        for(let key in newError){
                            if(newError[key] !== ""){
                                alert("saiiiiii")
                                return
                            }
                        }
                      
                        const action ={
                            type: "CHANGE",
                            nguoiDungCapNhat: this.state.value
                        }
                        this.props.dispatch(action)
                    }} type='button' className="btn btn-primary ml-3">cap nhat</button>
                </div>
            </div>
        </div>
    </form>
    )
  }
}


const mapStateToProps = (rootReducer) =>{
    return{
        stateNguoiDungSua : rootReducer.BaiTapQuanLyNguoiDung2Reducer.nguoiDungSua
    }
}

export default connect (mapStateToProps)(FormDangKy2)
