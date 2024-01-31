import React from 'react'

const Breadcrum = () => {
  return (
    <div className="container-fluid">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Product</a></li>
          <li className="breadcrumb-item"><a href="#">Earings</a></li>
          <li className="breadcrumb-item active" aria-current="page">Just Lovely Earings</li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrum