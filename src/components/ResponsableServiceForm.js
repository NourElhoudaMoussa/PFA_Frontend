import React from 'react'
import HeaderPage from './HeaderPage';
import { Link } from 'react-router-dom';
export default function ResponsableServiceForm() {
  return (
    <div className="wrapper">
    
    <div className="content-wrapper">
      <section className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-outline card-info  mt-3 mx-2">
              <div className="card-header">
              <HeaderPage title="أضف مسؤول عن خدمة"/>
              </div>
              <div className="card-body">
                <form>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <div className="form-group text-start " dir='rtl'>
                            <label htmlFor="titre" className='mx-2'> اسم الخدمة</label>
                            <select className="form-control" id="titre" name="title">
                                <option>--إختيار خدمة--</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <div className="form-group text-start " dir='rtl'>
                            <label htmlFor="titre" className='mx-2'>رقم بطاقة التعريف الوطنية</label>
                            <input type="text" className="form-control" id="titre" name="title"/>
                        </div>
                    </div>        
                </div>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <div className="form-group text-start " dir='rtl'>
                            <label htmlFor="titre" className='mx-2'>اللقب</label>
                            <input type="text" className="form-control" id="titre" name="title"/>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <div className="form-group text-start " dir='rtl'>
                            <label htmlFor="titre" className='mx-2'>الاسم</label>
                            <input type="text" className="form-control" id="titre" name="title"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <div className="form-group text-start " dir='rtl'>
                            <label htmlFor="titre" className='mx-2'>مكان الولادة</label>
                            <input type="text" className="form-control" id="titre" name="title"/>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <div className="form-group text-start " dir='rtl'>
                            <label htmlFor="titre" className='mx-2'>تاريخ الولادة</label>
                            <input type="text" className="form-control" id="titre" name="title"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <div className="form-group text-start " dir='rtl'>
                            <label htmlFor="titre" className='mx-2'>عنوان السكن</label>
                            <input type="text" className="form-control" id="titre" name="title"/>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <div className="form-group text-start " dir='rtl'>
                            <label htmlFor="titre" className='mx-2'>الجنس</label>
                            <select className="form-control" id="titre" name="title">
                                <option>--إختيار--</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <div className="form-group text-start " dir='rtl'>
                            <label htmlFor="titre" className='mx-2'>البريد الالكتروني</label>
                            <input type="text" className="form-control" id="titre" name="title"/>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <div className="form-group text-start " dir='rtl'>
                            <label htmlFor="titre" className='mx-2'>رقم الهاتف</label>
                            <input type="text" className="form-control" id="titre" name="title"/>
                        </div>
                    </div>
                </div>
                 
                 
                </form>
              </div>
                <div className="card-footer text-center">
                  <Link to={"/ListResponsableService"} type="button" className="btn btn-outline-danger mx-2"><i class="fa fa-arrow-left"></i> رجوع </Link>
                  <button type="button" className="btn btn-outline-primary mx-2"><i class="fa fa-check"></i> إضافة </button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}
