import React,{} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Authentification from './pages/Authentification';
import ListofNews from './components/ListofNews';
import Page404 from './pages/Page404';
import Layout from './pages/Layout';
import NewsForm from './components/NewsForm';
import DashboardMain from './components/DashboardMain';
import Calendrier from './components/Calendrier';
import ResponsableServiceForm from './components/ResponsableServiceForm';
import ListResponsableService from './components/ListResponsableService';
import DetailsNews from './components/DetailsNews';
import ListReclamation from './components/ListReclamation';
 function Pfa_frontend() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='*' element={<Navigate to='PageNotFound'/>}></Route>
          <Route path='PageNotFound' element={<Page404 />}></Route>
          <Route path='/' element={<Authentification/>}></Route>
          <Route path='auth' element={<Authentification/>}></Route>
          <Route path='' element={<Layout/>}>
              <Route path='dashboard' element={<DashboardMain/>}></Route>
              <Route path='News' element={<ListofNews/>}></Route>
              <Route path='AddNews' element={<NewsForm />}></Route>
              <Route path='Calendar' element={<Calendrier />}></Route>
              <Route path='AddResponsableService' element={<ResponsableServiceForm />}></Route>
              <Route path='ListResponsableService' element={<ListResponsableService/>}></Route>
              <Route path='NewsDtails' element={<DetailsNews/>}></Route>
              <Route path='ListReclamation' element={<ListReclamation/>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>

  );
}
export default Pfa_frontend;