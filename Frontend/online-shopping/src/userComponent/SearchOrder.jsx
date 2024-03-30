import { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const SearchOrder = () => {
  const [allOrderData, setAllOrderData] = useState([]);
  const [orderId, setOrderId] = useState("");

  const deliveryStatus = ["Delivered", "On the Way", "Processing"];
  const deliveryTime = ["Morning", "Afternoon", "Evening", "Night"];

  const [orderDeliveryStatus, setOrderDeliveryStatus] = useState({
    orderId: "",
    deliveryStatus: "",
    deliveryTime: "",
    deliveryDate: "",
  });

  const handleOrderDelivery = (e) => {
    setOrderDeliveryStatus({
      ...orderDeliveryStatus,
      [e.target.name]: e.target.value,
    });
  };

  const getAllOrder = async () => {
    const allOrder = await retrieveAllOrder();
    if (allOrder) {
      setAllOrderData(allOrder);
    }
  };

  const retrieveAllOrder = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/admin/showorder?orderId=" + orderId
    );
    console.log(response.data);
    return response.data;
  };

  const searchOrderById = (e) => {
    getAllOrder();
    setOrderId("");
    e.preventDefault();
  };

  const updateDeliveryStatus = (e) => {
    console.log("CLICKED DELIVERY STATUS UPDATED");
    fetch("http://localhost:8080/api/user/admin/order/deliveryStatus/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDeliveryStatus),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log("response", res);
        setAllOrderData({
          orderId: "",
          deliveryStatus: "",
          deliveryTime: "",
          deliveryDate: "",
        });

        setAllOrderData(res);
      });
    });

    e.preventDefault();
  };

  return (
    <div>
      <div
        className="card form-card mt-1 ms-2 me-2 mb-2 custom-bg"
        style={{
          height: "35rem",
        }}
      >
        <div className="card-header text-center bg-color custom-bg-text">
          <h4>Searh Customer Orders</h4>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <form class="row g-3">
            <div class="col-auto">
              <input
                type="text"
                class="form-control"
                id="inputPassword2"
                placeholder="Enter Order Id..."
                onChange={(e) => setOrderId(e.target.value)}
                value={orderId}
              />
            </div>
            <div class="col-auto">
              <button
                type="submit"
                class="btn bg-color custom-bg-text mb-3"
                onClick={searchOrderById}
              >
                Search
              </button>
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-hover custom-bg-text text-center">
              <thead className="bg-color table-bordered border-color">
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Street</th>
                  <th scope="col">City</th>
                  <th scope="col">Pin code</th>
                  <th scope="col">Mobile No.</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Delivery Date</th>
                  <th scope="col">Delivery Status</th>
                  <th scope="col">Delivery Person</th>
                  <th scope="col">Delivery Mobile No</th>
                </tr>
              </thead>
              <tbody className="text-color">
                {allOrderData.map((orderData) => {
                  return (
                    <tr>
                      <td>
                        <b>{orderData.orderId}</b>
                      </td>
                      <td>
                        <img
                          src={
                            "http://localhost:8080/api/product/" +
                            orderData.productImage
                          }
                          class="img-fluid"
                          alt="product_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{orderData.productName}</b>
                      </td>
                      <td>
                        <b>{orderData.productDescription}</b>
                      </td>
                      <td>
                        <b>{orderData.quantity}</b>
                      </td>
                      <td>
                        <b>{orderData.totalPrice}</b>
                      </td>
                      <td>
                        <b>{orderData.userName}</b>
                      </td>
                      <td>
                        <b>{orderData.address.street}</b>
                      </td>

                      <td>
                        <b>{orderData.address.city}</b>
                      </td>
                      <td>
                        <b>{orderData.address.pincode}</b>
                      </td>
                      <td>
                        <b>{orderData.userPhone}</b>
                      </td>
                      <td>
                        <b>{orderData.orderDate}</b>
                      </td>
                      <td>
                        <b>{orderData.deliveryDate}</b>
                      </td>
                      <td>
                        <b>{orderData.deliveryStatus}</b>
                      </td>
                      <td>
                        <b>{orderData.deliveryPersonName}</b>
                      </td>
                      <td>
                        <b>{orderData.deliveryPersonContact}</b>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <div className="card form-card ms-2 me-2 mb-2 custom-bg">
          <div className="card-header text-center bg-color custom-bg-text">
            <h4>Update Delivery Status</h4>
          </div>
          <div className="card-body">
            <form class="row g-3">
              <div class="col-auto">
                <label className="text-color">
                  <b>Order Id</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Enter Order Id..."
                  name="orderId"
                  onChange={handleOrderDelivery}
                  value={handleOrderDelivery.orderId}
                />
              </div>
              <div class="col-auto">
                <label className="text-color">
                  <b>Select Delivery Date</b>
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="inputPassword2"
                  name="deliveryDate"
                  placeholder="dd-mm-yyyy"
                  min="1997-01-01"
                  max="2030-12-31"
                  value={handleOrderDelivery.deliveryDate}
                  onChange={handleOrderDelivery}
                />
              </div>
              <div class="col-auto">
                <label className="text-color">
                  <b>Delivery Time</b>
                </label>

                <select
                  name="deliveryTime"
                  value={handleOrderDelivery.deliveryTime}
                  onChange={handleOrderDelivery}
                  className="form-control"
                >
                  <option value="">Select Delivery Time</option>

                  {deliveryTime.map((time) => {
                    return <option value={time}> {time} </option>;
                  })}
                </select>
              </div>
              <div class="col-auto">
                <label className="text-color">
                  <b>Delivery Status</b>
                </label>
                <select
                  name="deliveryStatus"
                  value={handleOrderDelivery.deliveryStatus}
                  onChange={handleOrderDelivery}
                  className="form-control"
                >
                  <option value="">Select Delivery Status</option>

                  {deliveryStatus.map((status) => {
                    return <option value={status}> {status} </option>;
                  })}
                </select>
              </div>
              <div class="col-auto">
                <button
                  type="submit"
                  class="btn bg-color custom-bg-text mt-4"
                  onClick={updateDeliveryStatus}
                >
                  Update Delivery Status
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOrder;
