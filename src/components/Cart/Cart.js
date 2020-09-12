import React from 'react'
import './Cart.sass'


const Cart = () => {

  return (
    <div className="row cart">
      <div className="col-lg-12 pb-2">
        <h4>Оформление заказа</h4>
      </div>
      <div className="col-lg-12 pl-3 pt-3">
        <table className="table table-hover border bg-white">
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Цена</th>
              <th className="actions">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="row">
                  <div className="col-lg-2 Product-img">
                    <img src="https://static.turbosquid.com/Preview/2014/11/17__03_37_02/r01.jpge7f07e66-cd33-42b6-8a78-5ae052a58716Zoom.jpg" alt="..." className="img-responsive"/>
                  </div>
                  <div className="col-lg-10">
                    <h4 className="nomargin">Lenovo K6 Power</h4>
                    <div>
                      <span className="badge badge-pill badge-primary">Primary</span>
                      <span className="badge badge-pill badge-secondary">Secondary</span>
                      <span className="badge badge-pill badge-success">Success</span>
                    </div>
                  </div>
                </div>
              </td>
              <td> 12,000 </td>
              <td className="actions" data-th="" >
                <button className="btn btn-danger btn-sm">
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="row">
                  <div className="col-lg-2 Product-img">
                    <img src="https://static.turbosquid.com/Preview/2014/11/17__03_37_02/r01.jpge7f07e66-cd33-42b6-8a78-5ae052a58716Zoom.jpg" alt="..." className="img-responsive"/>
                  </div>
                  <div className="col-lg-10">
                    <h4 className="nomargin">Lenovo K6 Power</h4>
                    <div>
                      <span className="badge badge-pill badge-primary">Primary</span>
                      <span className="badge badge-pill badge-secondary">Secondary</span>
                      <span className="badge badge-pill badge-success">Success</span>
                    </div>
                  </div>
                </div>
              </td>
              <td> 12,000 </td>
              <td className="actions" data-th="" >
                <button className="btn btn-danger btn-sm">
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="hidden"></td>
              <td className="hidden-xs text-center">
                <strong>Total : 47,000</strong>
              </td>
              <td className="order">
                <button className="btn btn-success">Оформить</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Cart