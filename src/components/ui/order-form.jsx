import 'bootstrap/dist/css/bootstrap.min.css';

import { addDoc, collection, getDocs, } from 'firebase/firestore';

import React from 'react';
import { db } from './../config';

function OrderForm({t}) {
  const [name, setName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [deliveryDateTime, setDeliveryDateTime] = React.useState('');
  const [color, setColor] = React.useState('');

  async function createOrder(event) {
    event.preventDefault();

    const requiredFields = [
      'name',
      'phoneNumber',
      'address',
      'deliveryDateTime',
      'color',
    ];

    for (const field of requiredFields) {
      if (!document.getElementById(field).value) {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }

    const newOrder = {
      name: name,
      phoneNumber,
      address,
      deliveryDateTime,
      color,
    };

    await addDoc(collection(db, 'Order'), newOrder)
    // Submit the order data to your backend (e.g., Firebase)

    // Clear input fields
    setName('');
    setPhoneNumber('');
    setAddress('');
    setDeliveryDateTime('');
    setColor('');
  }

  return (
    <div>
      <form onSubmit={createOrder}>
        <div className="col-12">
          <label htmlFor="name">{t("name")}</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="phoneNumber">Telefon de contact</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="address">Adresa livrarii</label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="deliveryDateTime">Data si ora livrarii</label>
          <input
            type="datetime-local"
            className="form-control"
            id="deliveryDateTime"
            value={deliveryDateTime}
            onChange={(event) => setDeliveryDateTime(event.target.value)}
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="color">Culoarea</label>
          <select
            className="form-select"
            id="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            required
          >
            <option value="">...</option>
            <option value="white">Alb</option>
            <option value="black">Negru</option>
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Comanda
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
