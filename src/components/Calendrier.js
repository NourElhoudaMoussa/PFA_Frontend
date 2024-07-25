import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" 
import HeaderPage from './HeaderPage';

export default function Calendrier() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-outline card-info  mt-3 mx-2"> 
                <div className="card-header">
                  <HeaderPage title="رزنامة المواعيد" display={false}/>
                </div>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-4'> 
                      <div className="card ">
                        <div className="card-header">
                          <h3 className="card-title ">أضف حدث</h3>
                        </div>
                        <div className="card-body">
                          <div className="btn-group" style={{width: '100%', marginBottom: 10}} dir="rtl" >
                            <ul className="fc-color-picker" id="color-chooser">
                              <li><a className="text-primary" href="color"><i className="fas fa-square" /></a></li>
                              <li><a className="text-warning" href="color"><i className="fas fa-square" /></a></li>
                              <li><a className="text-success" href="color"><i className="fas fa-square" /></a></li>
                              <li><a className="text-danger" href="color"><i className="fas fa-square" /></a></li>
                              <li><a className="text-muted" href="color"><i className="fas fa-square" /></a></li>
                            </ul>
                          </div>
                          {/* /btn-group */}
                          <div className="input-group" >
                            <input id="new-event" type="text" dir="rtl" className="form-control" placeholder=" عنوان الحدث" />
                            <div className="input-group-append">
                              <button id="add-new-event" type="button" className="btn btn-primary">أضف</button>
                            </div>
                            {/* /btn-group */}
                          </div>
                          {/* /input-group */}
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-8'>
                      <FullCalendar
                        plugins={[ dayGridPlugin, interactionPlugin ]}
                        dateClick={handleDateClick}
                        height={450}
                        
                        events={[
                          { title: 'عيد الشغل', date: '2024-05-01' },
                           { title: 'حملة نظافة', date: '2024-05-15' }
                        ]}
                    />
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
