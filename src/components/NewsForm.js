import HeaderPage from './HeaderPage';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importer le fichier CSS de React Quill
// https://froala.com/blog/editor/tutorials/creating-a-react-rich-text-editor-for-right-to-left-languages/
export default function NewsForm() {
  const [text, setText] = useState('');

  return (
    <div className="wrapper">
    
      <div className="content-wrapper">
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-outline card-info  mt-3">
                <div className="card-header">
                <HeaderPage title="أضف خبر"/>
                
                </div>
                <div className="card-body">
                  <div className="form-group text-start " dir='rtl'>
                    <label htmlFor="titre" className='mx-2'>عنوان الخبر</label>
                    <input type="text" className="form-control" id="titre" name="title"/>
                  </div>
                  <div className="form-group">
                    <div className='text-start'>
                      <label htmlFor="contenu" className='mx-2'>محتوى الخبر</label>       
                    </div>       
                    <ReactQuill 
                        name='content'
                        id='contenu'
                        theme="snow"
                        value={text}
                        onChange={setText}
                        modules={{
                          toolbar: [
                            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                            [{size: []}],
                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                            [{'list': 'ordered'}, {'list': 'bullet'}, 
                            {'indent': '-1'}, {'indent': '+1'}],
                            ['link'],
                            ['clean'],
                            [{ 'direction': 'rtl' }]
                          ],
                        }}
                        formats={[
                          'header', 'font', 'size',
                          'bold', 'italic', 'underline', 'strike', 'blockquote',
                          'list', 'bullet', 'indent',
                          'link'
                        ]}
                        placeholder="أدخل النص هنا..."
                      />
                  </div>
                </div>
                  <div className="card-footer">
                  
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
