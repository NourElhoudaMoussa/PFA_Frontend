import * as React from 'react';
import logo from '../assets/images/municipal.png';
import authStyles from './css/authentification.module.css';
import { request } from '../axios_helper'; // Importez la fonction request depuis axios_helper
import { Link } from 'react-router-dom';
function Authentification(){
    const ResponsableSignin = async (event) => {
        event.preventDefault(); // Empêche le rafraîchissement de la page par défaut
    
        const email = event.target.email.value;
        const password = event.target.password.value;
    
        try {
            // const response = await request('post', request.uri_auth('admin'), { email, password });
            const response = await request('post', 'auth/signin', { email, password });
            // Gérer la réponse réussie
            console.log(response.data);
            console.log("La récupération du jeton a été effectuée avec succès");
        } catch (error) {
            // Gérer les erreurs
            console.log("erreur");
            console.error(error);
    
        }
    };


    
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
                        <form onSubmit={ResponsableSignin}>
                            <div className={`input-group ${authStyles.input_group} mb-3`}>
                                <div className={`input-group-prepend ${authStyles.input_group_prepend}`}>
                                    <div className={`input-group-text ${authStyles.input_group_text}`}>
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                    <input type="text" className={`form-control ${authStyles.form_control}`} name="email" placeholder="إسم المستخدم" />
                                </div>
                            </div>
                            <div className={`input-group ${authStyles.input_group} mb-3`}>
                                <div className={`input-group-prepend ${authStyles.input_group_prepend}`}>
                                    <div className={`input-group-text ${authStyles.input_group_text}`}>
                                        <span className="fas fa-lock"></span>
                                    </div>
                                    <input type="password" className={`form-control ${authStyles.form_control}`} name="password" placeholder="كلمة العبور" />
                                </div>
                            </div>
                            <div className="">
                                <p className="mb-3">
                                    <a href="forgot-password.html">نسيت كلمة العبور</a>
                                </p>
                            </div>
                            <div className="text-center">
                                <Link to={"\dashboard"} type="submit" className="btn btn-primary btn-block">تسجيل الدخول</Link>
                            </div>
                        </form>   
                    </div>
                    
                </div>
            </div>
        </div>
    ); 
}
export default Authentification;