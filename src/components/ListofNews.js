
  import React from 'react'
import HeaderPage from './HeaderPage'
import Table from './Table'
  export default function ListofNews() {
    const apiData = [
      ['Trident', 'Internet Explorer 4.0', 'Win 95+', '4', 'X'],
      ['Gecko', 'Netscape 7.2', 'Win 95+ / Mac OS 8.6-9.2', '1.7', 'A'],
      ['Other browsers', 'All others', '-', '-', 'U'],
    ];
  
    const columnTitles = [
      'العنوان',
      'التاريخ',
      'الخدمة',
      'الصور',
      'الملفات',
      'التعديلات',
    ];
  
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-outline card-info  mt-3"> 
                <div className="card-header">
                  <HeaderPage title="قائمة الّأخبار" display={true} link="/AddNews" linkText="أضف خبر"/>
                </div>
                <div className="card-body">
                  <Table
                    api={apiData}
                    columnTitles={columnTitles}
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

