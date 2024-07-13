import React , {useState , useEffect , useCallback} from 'react'
import { Fetch } from '../Data/Fetch';
import OrdersCard from './OrdersCard';


const Orders = () => {
  const [orders,setOrders] = useState([]);

  const fetch = useCallback(async () =>{
    const response = await Fetch('/orders');
    console.log(response);
    setOrders(response);
  },[]);


  useEffect(() => {
    fetch();
  },[fetch]);

  return (
    <div>
      <h1 className='text-3xl text-zinc-700 ml-10'>My Orders</h1>
      <div>
        {
          orders.length > 0 && orders.map( (order,index) => 
            <OrdersCard order ={order} key={index}/>
          )
        }
      </div>
    </div>
  )
}

export default Orders;