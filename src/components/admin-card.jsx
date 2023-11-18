import Card from '@mui/material-next/Button';
import { React } from 'react';

function AdminCards({ order }) {
  return (
    <Card >
      <p>Name: {order.name}</p>
      <p>Adress: {order.address}</p>
      <p>Phone nomber: {order.phoneNomber}</p>
      <p>Order color: {order.color}</p>
      <p>Time delivery: {order.deliveryDateTime}</p>
    </Card>
  );
}
export default AdminCards;
