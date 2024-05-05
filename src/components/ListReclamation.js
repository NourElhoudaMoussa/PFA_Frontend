import React from 'react'
import HeaderPage from './HeaderPage'
import Table from './Table'
export default function ListReclamation() {
    const apiData = [
        ['1','طرقات','وجود حفر في الطريق','عدم إعادة تأهيل الطرق اثر إصلاحات قامت بها شركة المياه مما جعل حالة الطريق سيئة','شارع المنجي قريرة بحي سهلول 4 بسوسة 4054', 'img.png' ,'25-04-2024', '10', '5','مطلب تحت الدرس'],
       
      ];
    
      const columnTitles = [
        '',
        'نوع المشكل',
        'التصنبف الفرعي للمشكل',
        'المحتوى',
        'العنوان',
        'الصورة',
        'التاريخ',
        'عدد المشاهدات',
        'عدد الاعجابات',
        'الحالة',
        'التعديلات',
      ];
      // Actions disponibles
  const actions = ['تغيير حالة المطلب', 'إعادة توجيه المطلب'];

  // Icônes associées à chaque action (dans le même ordre)
  const actionIcons = [
    'fas fa-pen',
    'fas fa-arrow-left',
  ];
  // Lien associé à chaque action (dans le même ordre)
  const actionLinks = [
    '/updateEtat',
    '/redirection',
  ];
  return (
    <div className="content-wrapper">
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card card-outline card-info  mt-3 mx-2"> 
              <div className="card-header">
                <HeaderPage title="قائمة التشكيات" display={false} />
              </div>
              <div className="card-body">
                <Table
                  api={apiData}
                  columnTitles={columnTitles}
                  actions={actions.map((action, index) => ({
                    label: action,
                    icon: actionIcons[index],
                    link: actionLinks[index],
                  }))}
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
