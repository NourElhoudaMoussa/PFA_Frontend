import React, {useRef } from 'react';
import { Link} from 'react-router-dom';
const Table = ({ api, columnTitles }) => {
  const tableRef = useRef(null);
  return (
    
      <table dir="rtl" ref={tableRef} className="table table-bordered " >
        <thead>
          <tr >
            {columnTitles.map((title, index) => (
              <th className='text-start' key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {api.map((data, index) => (
            <tr key={index}>
              {data.map((value, index) => (
                <td className='text-start' key={index}>{value}</td>
               
              ))}

               <td className="text-start"> 
               <Link to="test" className="mx-2" >
                  <i class="me-2 nav-icon fas fa-file-alt"></i>
                  <span>المزيد من التفاصل </span>
                </Link>

                <Link to="test" className="mx-2" >
                  <i className="me-2 nav-icon fas fa-solid fa-ban"/>
                  <span>إلغاء الإعلان</span>
                </Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table;