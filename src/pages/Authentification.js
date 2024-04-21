import React ,{} from 'react';
import logo from '../assets/images/municipal.png';
 function Authentification() {
  return (
    <div className="hold-transition login-page">
        <div className="login-box">
            {/* /.login-logo */}
            <div className="login-logo">
                <img src={logo} alt="logo" width={100}/>
                <p><b>البلدية</b>التونسية</p>
            </div>
            {/* /.login-card-body */}
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">تسجيل الدخول</p>
                    <form action="../../index3.html" method="post">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                                <input type="email" className="form-control" placeholder="إسم المستخدم" />
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                                <input type="password" className="form-control" placeholder="كلمة العبور" />
                            </div>
                        </div>
                        <div className="">
                            <p className="mb-3">
                                <a href="forgot-password.html">لقد نسيت كلمة العبور</a>
                            </p>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-block">تسجيل الدخول</button>
                        </div>
                    </form>   
                </div>
                
            </div>
        </div>
    </div>
  );
}
export default Authentification;