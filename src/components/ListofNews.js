
import React from 'react'
import HeaderPage from './HeaderPage'
import Table from './Table'
  export default function ListofNews() {
    const apiData = [
      ['بلاغ :الزبلة و الخروبة', '25-04-2024', 'البيئة والمحيط', '-', 'img.png'],
      ['المراقبة والتفقد الصحي ', '22-04-2024', 'خدمة الدفاع عن المستهلك', 'doc.pdf', '-'],
      ['النشاط العام', '20-04-2024', 'خدمات عامة', '-', 'img1.png'],
      ['حملة نظافة', '19-04-2024', 'البيئة و المحيط', 'doc.pdf', 'img2.png'],
      ['حملة ضد الإنتصاب الفوضوي', '15-04-2024', 'خدمات عامة', '-', 'img3.png'],
      ['إنتداب أعوان نضافة', '10-04-2024', 'البيئة و المحيط', '-', '-'],
    ];
  
    const columnTitles = [
      'العنوان',
      'التاريخ',
      'الخدمة',
      'الصور',
      'الملفات',
      'التعديلات',
    ];
    const actions = [
      'المزيد من التفاصل ',
      'إلغاء الإعلان',
    ]
    
  // Icônes associées à chaque action (dans le même ordre)
  const actionIcons = [
    'fas fa-solid fa-file',
    'fas fa-solid fa-ban',
  ];
  // Lien associé à chaque action (dans le même ordre)
  const actionLinks = [
    '/NewsDtails',
    '/annulerPub',
  ];
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-outline card-info  mt-3 mx-2"> 
                <div className="card-header">
                  <HeaderPage title="قائمة الّأخبار" display={true} link="/AddNews" linkText="أضف خبر"/>
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

