import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import Modal from '@mui/material/Modal';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

import Box from '@mui/material/Box';
import styled from 'styled-components';
import { db } from './../config';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: auto !important;
  margin: auto;
  
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const OrderForm = (props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryDateTime, setDeliveryDateTime] = useState('');
  const [color, setColor] = useState('');
  const [details, setDetails] = useState('');
  const [typeOfOrder, setTypeOfOrder] = useState(props.type);
  const [status, setStatus] = useState('pending');
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [createdAt, setCreatedAt] = useState(new Date());
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const createOrder = async (event) => {
    event.preventDefault();
    const newOrder = {
      name,
      phoneNumber,
      address,
      deliveryDateTime,
      color,
      details,
      typeOfOrder,
      status,
      createdAt,
    };
    await addDoc(collection(db, 'Order'), newOrder);
    resetForm();
    setShowModal(true);
  };

  const resetForm = () => {
    setName('');
    setPhoneNumber('');
    setAddress('');
    setDeliveryDateTime('');
    setColor('');
    setDetails('');
  };

  return (
    <div>
      <StyledForm onSubmit={createOrder}>
        <TextField
          label={props.t('name')}
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <TextField
          label={props.t('phone')}
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />

        <TextField
          label={props.t('address')}
          multiline
          rows={3}
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />

        <TextField
          label={props.t('date')}
          type="datetime-local"
          value={deliveryDateTime}
          onChange={(event) => setDeliveryDateTime(event.target.value)}
          required
        />

        <StyledFormControl>
          <InputLabel id="color-label">{props.t('color')}</InputLabel>
          <Select
            labelId="color-label"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            required
          >
            <MenuItem value="">
              <em>...</em>
            </MenuItem>
            <MenuItem value="white">{props.t('white')}</MenuItem>
            <MenuItem value="black">{props.t('black')}</MenuItem>
          </Select>
        </StyledFormControl>

        <TextField
          label={props.t('details')}
          multiline
          rows={3}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          required
        />

        <Button
          type="submit"
          onClick={handleOpen}
          variant="contained"
          color="primary"
        >
          {props.t('order')}
        </Button>
      </StyledForm>

      {showModal && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-dÍescription"
        >
          <Box sx={style}>{props.t('orderPlacedMessage')}</Box>
        </Modal>
      )}
    </div>
  );
};

export default OrderForm;
