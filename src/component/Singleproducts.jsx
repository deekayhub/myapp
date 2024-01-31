import React from 'react'

const Singleproducts = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-5">
        <img className='img-fluid' src=".\src\assets\Regalia-diamond.png" alt="" />
      </div>
      <div className="col-md-7">
        <div className="bg-light rounded p-1">
         <div className="d-flex justify-content-between">
         <div className="product-title">
            <h5>Dainty Crown Diamond Band Ring</h5>
            <span>Floral shine that can Entice</span>
          </div>
          <div className="icon">
            <span className='pe-2'><i className="bi bi-heart"></i></span>
            <span><i className="bi bi-share"></i></span>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Singleproducts