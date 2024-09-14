import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../Redux/slices/orderSlice';

const AllBuys = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.orders);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      dispatch(fetchOrders(token));
    }
  }, [dispatch]);

  if (status === 'loading') return <p>loading...</p>;
  if (status === 'failed') return <p>error: {error}</p>;

  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Orders</h2>
      <div className="grid grid-cols-1 gap-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Order ID: {order.order_id}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Total Amount: 
              <span className="font-medium text-indigo-600 dark:text-indigo-400"> {order.total_amount}</span>
            </p>
            <p className={`mb-2 text-sm font-medium ${
              order.status === 'pending'
                ? 'text-yellow-500'
                : order.status === 'failed'
                ? 'text-red-500'
                : 'text-green-500'
            }`}>
              Status: {order.status}
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Order Date: {new Date(order.order_date).toLocaleDateString()}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBuys;
