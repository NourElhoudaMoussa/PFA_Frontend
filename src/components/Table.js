import React, {useRef } from 'react';
import { Link} from 'react-router-dom';
const Table = ({ api, columnTitles,actions }) => {
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
               
               <td className='text-start' key={index}>
                {actions.map((action, actionIndex) => (
                  <Link to={action.link} className="mx-2" key={actionIndex}>
                    <span>
                      <i className={action.icon}></i> {action.label} 
                    </span> <br/>
                  </Link>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table;