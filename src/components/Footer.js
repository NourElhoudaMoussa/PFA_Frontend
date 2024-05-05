import React,{} from 'react'

 function Footer() {
  return (
      <div>
        <footer className="main-footer text-start" >
          <strong  className="mx-3"> Copyright © 2023-2024 <a href="municipal">البلدية التونسية</a> </strong>
          جميع الحقوق محفوضة 
          <div className="float-left d-none d-sm-inline-block">
            <b>Version</b> 1.1.0
          </div>
        </footer>
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
    
  );
}
export default Footer;