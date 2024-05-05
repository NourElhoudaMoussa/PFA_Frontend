import React from 'react'
import HeaderPage from './HeaderPage'
export default function DetailsNews() {
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-outline card-info  mt-3 mx-2"> 
                <div className="card-header">
                  <HeaderPage title="تفاصيل البلاغ :الزبلة و الخروبة" display={false}/>
                </div>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6 mt-3'>
                        <div className="card direct-chat direct-chat-primary">
                            <div className="card-header">
                                <h3 className="card-title">تعليقات</h3>
                            </div>
                            <div className="card-body">
                                <div className="direct-chat-messages">
                                    <div className="direct-chat-msg">
                                        <div className="direct-chat-infos clearfix">
                                            <span className="direct-chat-name float-left">فلان الفولاني</span>
                                            <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                        </div>
                                        <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user" />
                                        <div className="direct-chat-text text-start">
                                            الرجاء الإعلام بأجال دفع المعاليم المطلوبة
                                        </div>
                                    </div>
                                    <div className="direct-chat-msg">
                                        <div className="direct-chat-infos clearfix">
                                            <span className="direct-chat-name float-left">فلانة الفلانية</span>
                                            <span className="direct-chat-timestamp float-right">23 Jan 2:05 pm</span>
                                        </div>
                                        <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user" />
                                        <div className="direct-chat-text text-start">
                                            الرجاء مزيد من التفاصيل حول شروط الإنتفاع بالإعفاء أو تحفيظ في معلوم الأداء
                                        </div>
                                    </div>

                                    <div className="direct-chat-msg right">
                                        <div className="direct-chat-infos clearfix">
                                            <span className="direct-chat-name float-right"> خدمة البيئة والمحيط</span>
                                            <span className="direct-chat-timestamp float-left">23 Jan 3:37 pm</span>
                                        </div>
                                        <img className="direct-chat-img" src="dist/img/municipal.png" alt="message user" />
                                        <div className="direct-chat-text text-start">
                                        ستجدون كل التقاصيل في الملف المصاحب للاعلام
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <form action="#" method="post">
                                    <div className="input-group">
                                    <input type="text" name="message" placeholder="أكتب تعليق" dir='rtl' className="form-control" />
                                    <span className="input-group-append">
                                        <button type="button" className="btn btn-primary">بعث</button>
                                    </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* ************************************************************************ */}
                    <div className='col-lg-6'>
                        <div className="card card-outline card-info  mt-3 mx-2"> 
                            <div className="card-body">
                            <h6 className='text-end text-info'>22-01-2024</h6>
                            <h3 className='text-start'>المعاليم الموظّفة على العقارات المبنية: الزبلة والخروبة</h3>
                            <p className='text-start text-justify'>
                            .خصصت مجلة الجباية المحلية التونسية في بابها الأول 29 فصلا تتعلق بالمعاليم والأداءات الموظفة على العقارات المبنية أخضعت من خلالها هذا الصنف من العقارات إلى عدة ضوابط وإجراءات. وتعتبر هذه الضوابط والإجراءات المكون الأساسي للإطار القانوني للمعاليم الموظفة على العقارات المبنية يضاف إليها عدة أوامر ومراسيم سنتعرض إليها ضمن هذا المقال  
                            </p>

                            <h6 className='text-start text-primary'>les frais.pdf</h6>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
