import HeaderPage from './HeaderPage';
import React from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg'; 
import 'froala-editor/css/froala_style.min.css'; 
import 'froala-editor/css/froala_editor.pkgd.min.css';
export default function NewsForm() {


  return (
    <div className="wrapper">
    
      <div className="content-wrapper">
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-outline card-info  mt-3 mx-2">
                <div className="card-header">
                <HeaderPage title="أضف خبر"/>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group text-start " dir='rtl'>
                      <label htmlFor="titre" className='mx-2'>عنوان الخبر</label>
                      <input type="text" className="form-control" id="titre" name="title"/>
                    </div>
                    <div className="form-group">
                      <div className='text-start'>
                        <label htmlFor="contenu" className='mx-2'>محتوى الخبر</label>       
                      </div>   
                      <FroalaEditorComponent
                      tag="textarea"
                      name='content'
                      id='contenu'
                      model={''}
                      config={
                        { placeholderText: 'أدخل النص هنا...',
                          charCounterCount: true,
                          direction:'rtl'}
                      }
                      />
                    </div>
                    <div className="form-group">
                      <a className="btn btn-app mx-0" href='test'>
                        <i className="fas fa-image"></i> أضف صورة
                      </a>
                      <a className="btn btn-app" href='test'>
                        <i className="fas fa-file"></i> أضف ملف
                      </a>
                    </div>
                  </form>
                </div>
                  <div className="card-footer text-center">
                    <button type="button" className="btn btn-outline-danger mx-2"><i class="fa fa-arrow-left"></i> رجوع </button>
                    <button type="button" className="btn btn-outline-info mx-2"><i class="fa fa-bullhorn"></i> نشر </button>
                    <button type="button" className="btn btn-outline-primary mx-2"><i class="fa fa-check"></i> تسجيل </button>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
