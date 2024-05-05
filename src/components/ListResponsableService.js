import React from 'react'
import HeaderPage from './HeaderPage'
import Table from './Table'
export default function ListResponsableService() {
    const apiData = [
        ['1','03******','البيئة والمحيط','فلان','الفولاني', '25-04-1984', 'سوسة', 'ذكر','شارع المنجي قريرة بحي سهلول 4 بسوسة 4054','25785466','foulen@gmail.com'],
       
      ];
    
      const columnTitles = [
        '',
        'رقم بطاقة التعريف',
        'الخدمة',
        'الاسم',
        'اللقب',
        'تاريخ الولادة',
        'مكان الولادة',
        'الجنس',
        'عنوان السكن',
        'رقم الهاتف',
        'البريد الالكتروني',
        'التعديلات',
      ];
      const actions = [
        'تغيير',
        'فسخ',
      ]
    
  return (
    <div className="content-wrapper">
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card card-outline card-info  mt-3 mx-2"> 
              <div className="card-header">
                <HeaderPage title="قائمة المسؤولين" display={true} link="/AddResponsableService" linkText="أضف مسؤول عن خدمة"/>
              </div>
              <div className="card-body">
                <Table
                  api={apiData}
                  columnTitles={columnTitles}
                  actions={actions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
