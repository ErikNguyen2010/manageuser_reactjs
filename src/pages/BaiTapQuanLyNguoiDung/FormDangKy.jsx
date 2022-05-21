import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormDangKy extends Component {
    state = {
        value : {
            hoTen: "",
            matKhau:"",
            taiKhoan: "",
            email: "",
            soDienThoai: "",
            loaiNguoiDung: "QuanTri",
        },
        error : {
            hoTen: "",
            matKhau:"",
            taiKhoan: "",
            email: "",
            soDienThoai: "",
        },
    }

    handleChange = (event) =>{
        let {id, name,value , className} = event.target
        let dataType = event.target.getAttribute("data-type")
        let newValue = {...this.state.value}
        let newError = {...this.state.error}

        newValue[id] = value
        let messErr  = ""
        if(value == ""){
            messErr = "không được bỏ trống"
        }
        if(dataType == "email"){
            let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!regexEmail.test(value)){
                messErr = "email sai"
            }
        }
        newError[id] = messErr
        this.setState({
            value:newValue,
            error:newError
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        let{value, error} = this.state
        for(let key in value){
            if(value[key] == ""){
                alert("không được bỏ trống")
                return
            }

        }
        for(let key in error){
            if(error[key] !== ""){
                alert(error[key])
                return
            }
        }
        const action = {
            type:"DANG_KY",
            nguoiDung:this.state.value
        }
        this.props.dispatch(action)
    }
    // hướng giải quyết: thay vì dữ liệu follow từ props => chuyển du lieu sang this.state.value

    // static getDerivedStateFromProps (newProps, currentState){
    //     if(currentState.value.taiKhoan !== newProps.stateNguoiDungSua.taiKhoan){
    //         currentState.value = {...newProps.stateNguoiDungSua}
    //     }



    //     return currentState

    // }

    componentWillReceiveProps(newProps){
        this.setState({
            value: newProps.stateNguoiDungSua
        })
    }

    render() {
        let {hoTen, taiKhoan, matKhau, email, soDienThoai, loaiNguoiDung} = this.state.value
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h3>Thông tin người dùng</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>tài khoản</p>
                                    <input value={taiKhoan} name="taiKhoan" onChange={this.handleChange} className="form-control" id="taiKhoan" />
                                    <p className='text text-danger'>{this.state.error.taiKhoan}</p>
                                </div>
                                <div className="form-group">
                                    <p>Họ tên</p>
                                    <input name="hoTen" onChange={this.handleChange} value={hoTen} className="form-control" id="hoTen" />
                                </div>
                                <div className="form-group">
                                    <p>Email</p>
                                    <input data-type="email" name="email" onChange={this.handleChange} value={email} className="form-control" id="email" />
                                    <p className="text text-danger">{this.state.error.email}</p>
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mat khẩu</p>
                                    <input type={'password'} name="matKhau" onChange={this.handleChange} value={matKhau} className="form-control" id="matKhau" />
                                </div>
                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input  data-type="phone" name="soDienThoai" onChange={this.handleChange} value={soDienThoai} className="form-control" id="soDienThoai" />
                                    <p>{this.state.error.soDienThoai}</p>
                                </div>
                                <div className="form-group">
                                    <p>Loại người dùng</p>
                                    <select name="loaiNguoiDung" id="loaiNguoiDung" onChange={this.handleChange} value={loaiNguoiDung} className="form-control">
                                        <option value="NguoiDung">NguoiDung</option>
                                        <option value="QuanTri">QuanTri</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className="btn btn-success">Đăng ký</button>
                        <button onClick={() =>{
                            const action ={
                                type: "CAP_NHAT",
                                nguoiDungCapNhat: this.state.value
                            }
                            this.props.dispatch(action)
                            for(let key in this.state.value){
                                if(this.state.value[key] = ""){
                                    alert("ko dc bo trong nha")
                                    return
                                }
                            }
                        }} type='button' className="btn btn-primary ml-3">Cap nhat</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (rootReducer) =>{
    return{
        stateNguoiDungSua : rootReducer.BaiTapQuanLyNguoiDung.nguoiDungSua
    }
}


export default connect(mapStateToProps)(FormDangKy)