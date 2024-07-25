import React, {} from 'react'
import HeaderPage from './HeaderPage';
import ChartComponent from './Chart';

 function DashboardMain() {
  
  return (
/* Content Wrapper. Contains page content */
    <div className="content-wrapper">
      <HeaderPage title="لوحة القيادة" display={false}/>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>
                  <p>عدد الشكاوي</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bars" />
                </div>
                <a href="#test" className="small-box-footer">المزيد  <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>53</h3>
                  <p> عدد العرائض</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href="#test" className="small-box-footer">المزيد  <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>264</h3>
                  <p>عدد المنخرطين في البلدية</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a href="#test" className="small-box-footer">المزيد  <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>
                  <p>سبر الآراء</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
                </div>
                <a href="#test" className="small-box-footer">المزيد  <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </div>
            {/* ./col */}
          </div>
          {/* /.row */}
          
          <div className="row">
          
          <ChartComponent></ChartComponent>
           
          </div>
        
        </div>{/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>

  );
}
export default DashboardMain;
