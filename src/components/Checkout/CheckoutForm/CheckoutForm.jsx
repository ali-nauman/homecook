import React, { useState } from 'react';

export const CheckoutForm = () => {
  const [form, setForm] = useState({
    house: '',
    street: '',
    block: '',
    area: '',
  });

  const handleFormValueChange = event => {
    setForm(f => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(
      `Order confirmed! Your order will be shipped to ${form.house}, Street ${form.street}, Block ${form.block}, ${form.area}!`
    );
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-light" htmlFor="house">
          House
        </label>
        <input
          className="form-control col-sm-12 col-md-4"
          type="text"
          id="house"
          name="house"
          value={form.house}
          onChange={handleFormValueChange}
          required
        ></input>
      </div>

      <div className="form-group">
        <label className="text-light" htmlFor="street">
          Street
        </label>
        <input
          className="form-control col-sm-12 col-md-4"
          type="text"
          id="street"
          name="street"
          value={form.street}
          onChange={handleFormValueChange}
          required
        ></input>
      </div>

      <div className="form-group">
        <label className="text-light" htmlFor="block">
          Block/Sector
        </label>
        <input
          className="form-control col-sm-12 col-md-4"
          type="text"
          id="block"
          name="block"
          value={form.block}
          onChange={handleFormValueChange}
          required
        ></input>
      </div>

      <div className="form-group">
        <label className="text-light" htmlFor="area">
          Area
        </label>
        <input
          className="form-control col-sm-12 col-md-4"
          type="text"
          name="area"
          id="area"
          value={form.area}
          onChange={handleFormValueChange}
          required
        ></input>
      </div>

      <button className="btn btn-primary mt-3" type="submit">
        Submit
      </button>
    </form>
  );
};
