import React, {} from 'react';
import sidebarStyles from './css/SideBare.module.css';
import logo from '../assets/images/municipal.png';
import { Link ,NavLink} from 'react-router-dom';
// import axios from 'axios';
 function SideBar() {
  return (
    /* Main Sidebar Container */
    <aside className={`main-sidebar sidebar-Ligth-primary elevation-4 ${sidebarStyles.main_sidebar}`}>
         {/* Sidebar logo */}
        <Link to={"/dashboard"} className={`brand-link ${sidebarStyles.brand_link} mb-3`}>
            <img src={logo} alt="logo" width={40} className='mx-2'/>
            <span className={`brand-text ${sidebarStyles.brand_text} font-weight-light`}><b>البلدية</b>التونسية</span>
        </Link>
        {/* Sidebar Menu */}
        <div className="sidebar">
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className={`nav-item menu-open ${sidebarStyles.nav_item}`}>
                        <NavLink to={"/dashboard"}  className={`nav-link ${sidebarStyles.nav_link}`} >
                          <i className="me-2 nav-icon fas fa-tachometer-alt" />
                            <p>لوحة القيادة</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to={"/News"} className={`nav-link ${sidebarStyles.nav_link}`}>
                            <i class="me-2 nav-icon fas fa-solid fa-newspaper"></i>
                            <p>الأخبار</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to={"/Service"} className={`nav-link ${sidebarStyles.nav_link}`}>
                            <i class="me-2 nav-icon fas fa-list"></i>
                            <p>الخدمات</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to={"/ListResponsableService"} className={`nav-link ${sidebarStyles.nav_link}`}>
                            <i class="me-2 nav-icon fas fa-user-tie"></i>
                            <p>المسؤولين عن الخدمات</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to={"/Citoyen"} className={`nav-link ${sidebarStyles.nav_link}`}>
                          <i className="me-2 nav-icon fas fa-users" />
                            <p>المستخدمين</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to={"/TypeProbleme"} className={`nav-link ${sidebarStyles.nav_link}`}>
                          <i className="me-2 nav-icon fas fa-solid fa-exclamation" />
                            <p>أنواع المشاكل</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to={"/Reclamation"} className={`nav-link ${sidebarStyles.nav_link}`}>
                          <i className="me-2 nav-icon fas fa-edit" />
                            <p>التشكيات</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to={"/Petition"} className={`nav-link ${sidebarStyles.nav_link}`}>
                          <i className="me-2 nav-icon fas fa-solid fa-file-signature" />
                            <p>العرائض</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to="Intervention" className={`nav-link ${sidebarStyles.nav_link}`}>
                          <i className="me-2 nav-icon fas fa-solid fa-question" />
                            <p>الآراء و التساؤلات</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to={"/Licence"} className={`nav-link ${sidebarStyles.nav_link}`}>
                          <i className="me-2 nav-icon fas fa-file" />
                          <p>التراخيص</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to={"/EnquetteOpinion"} className={`nav-link ${sidebarStyles.nav_link}`}>
                          <i className="me-2 nav-icon fas fa-solid fa-user-check" />
                          <p>سبر الآراء</p>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to="/Calendar" className={`nav-link ${sidebarStyles.nav_link}`}>
                          <i className="me-2 nav-icon far fa-calendar-alt" />
                            <p>رزنامة المواعيد</p>
                        </NavLink>
                    </li>
                 
                    <li className={`nav-item ${sidebarStyles.nav_item}`}>
                        <NavLink to="/OrganismePublic" className={`nav-link ${sidebarStyles.nav_link}`}>
                          <i className="me-2 nav-icon fas fa-solid fa-landmark" />
                            <p>مؤسسات عمومية</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
    
  );
}
export default SideBar;