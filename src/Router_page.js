import React from 'react'
import Calculatorpage from './components/Calculator_page/Calculatorpage'
import Formikpage from './components/Formik_page/Formikpage'
import Pagination from './components/Pagination_page/Paginationpage'
import Searchbox from './components/Search_page/Searchpage'
import Checkbox from "./components/CheckBox/CheckBox"
import Todo from "./components/Todo_page/Todopage"
import {  Route, BrowserRouter as Router, Routes ,Link } from 'react-router-dom'
import "./Router.css"
function Router_page() {
    return (
        <div className='router_page' >
         <Router>
            <div className='link_container' > 
            <div><Link  className='Link' to="/" >Formik</Link></div>
            <div><Link  className='Link'  to="/todo" >Todo</Link></div>
            <div><Link  className='Link'  to="/pagination" >Pagination</Link></div>
            <div><Link  className='Link'  to="/Search" >Search</Link></div>
            <div><Link  className='Link'  to="/checkbox" >Checkbox</Link></div>
            </div>  
            <div className='div_container' >
             <Routes>
                 <Route path="/" element={<Formikpage/>} ></Route>
                 <Route path="/todo" element={<Todo/>} ></Route>
                 <Route path="/pagination" element={<Pagination/>} ></Route>
                 <Route path="/Search" element={<Searchbox/>} ></Route>
                 <Route path="/checkbox" element={<Checkbox/>} ></Route>


             </Routes>
             </div>
         </Router>
        </div>
    )
}

export default Router_page
