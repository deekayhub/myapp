import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './component/Header.jsx'
import Categories from './component/Categories.jsx'
import Breadcrum from './component/Breadcrum.jsx'
import Singleproducts from './component/Singleproducts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Categories />
    <Breadcrum />
    <Singleproducts />
  </React.StrictMode>,
)
