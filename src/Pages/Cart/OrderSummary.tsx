import { useLocation } from 'react-router-dom'

const OrderSummary = () => {
  const location = useLocation();
  const {firstname, 
        lastname, 
        email, 
        phonenumber, 
        address, 
        city} = location.state || {};

  return (

    <div>
      <div>

      
        <div>
          <h1>Customer Details</h1>
        </div>
        <div>
          <h1>Name : {firstname} {lastname}</h1>
          <h1>Email : {email}</h1>
          <h1>Phone : {phonenumber}</h1>
          <h1>Address : {address}</h1>
          <h1>city : {city}</h1>
        </div>
        <div>

        </div>
      </div>
      
    </div>
  )
}

export default OrderSummary
