import React from 'react'
import { Link } from 'react-router-dom';
export default function HeaderPage(props) {
  return (
    <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2 ">
            <div className="col-sm-6">
              {props.display && (
                <Link to={props.link} className='btn btn-primary'>{props.linkText}</Link>
              )}
            </div>
            <div className="col-sm-6 text-start">
              <h1>{props.title}</h1>
            </div>
          </div>
        </div>
      </section>
  )
}
HeaderPage.defaultProps = {
  title: "",
  display: false,
  link: "",
  linkText: "",
};
