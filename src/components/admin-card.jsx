import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, TextField, autocompleteClasses } from '@mui/material';
import { db } from './config';
export default function AdminCards({ order }) {
  const [isEdit, setIsEdit] = useState(false);

  const format = (date) => {
    const dt = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
    const formattedTime = dt.toLocaleString();
    return formattedTime;
  };

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: autocompleteClasses,
    height: autocompleteClasses,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

  const handleEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  const handleUpdate = () => {
    // Update the order details here
    setIsEdit(false);
  };

  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper square variant="outlined">
        {isEdit ? (
          <>
            <TextField
              id="name"
              label="Name"
              defaultValue={order.name}
              fullWidth
            />
            <TextField
              id="phoneNumber"
              label="Phone Number"
              defaultValue={order.phoneNumber}
              fullWidth
            />
            <TextField
              id="address"
              label="Address"
              defaultValue={order.address}
              fullWidth
            />
            <TextField
              id="deliveryDateTime"
              label="Delivery Date Time"
              defaultValue={order.deliveryDateTime}
              fullWidth
            />
            <TextField
              id="status"
              label="Status"
              defaultValue={order.status}
              fullWidth
            />
            <TextField
              id="typeOfOrder"
              label="Type of Order"
              defaultValue={order.typeOfOrder}
              fullWidth
            />
          </>
        ) : (
          <>
            <p>Name: {order.name}</p> <br />
            <p>Phone number: {order.phoneNumber}</p> <br />
            <p>Address: {order.address}</p> <br />
            <p>CreateA: {format(order.createdAt)}</p> <br />
            <p>deliveryDateTime: {order.deliveryDateTime}</p> <br />
            <p>status: {order.status}</p> <br />
            <p>typeOfOrder: {order.typeOfOrder}</p> <br />
          </>
        )}
      </DemoPaper>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
          onClick={handleEdit}
        >
          {isEdit ? 'Update' : 'Edit'}
        </Button>
        <Button
          variant="contained"
          color="error"
          style={{ marginRight: '10px' }}
        >
          Delete
        </Button>
        <Button variant="contained" color="secondary">
          Close
        </Button>
      </div>
    </Stack>
  );
}
