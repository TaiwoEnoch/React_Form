/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import '../index.css';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
    carBrand: '',
    isChecked: false,
    gender: '',
    price: 0,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checked' ? e.target.checked : e.target.value;
    setState((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const carBrand = ['Mercedes', 'BMW', 'Maserati', 'Infinity', 'Audi', 'Matrix', 'Land Cruiser', 'Range Rover', 'Rolls-Royce Boat Tail', 'Bugatti La Voiture Noire', 'Bugatti Centodieci', 'Bugatti Divo', 'Bugatti Bolide', 'Pagani Huayra Roadster BC', 'Bugatti Chiron Super Sport 300+', 'Bugatti Chiron Pur Sport', 'Lamborghini Sian Roadster', 'Aston Martin Valkyrie AMR Pro'];

  const carBrandOptions = carBrand.map((carBrand, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <option value={carBrand} key={key}>
      {carBrand}
    </option>
  ));

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-div">
      <h1>Controlled Form</h1>
      <form onSubmit={handleChange} className="my-form">
        <label htmlFor="">
          First Name:{' '}
          <input
            name="fname"
            type="text"
            value={state.fname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Last Name:{' '}
          <input
            name="lname"
            type="text"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Your Message:
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          car brand:
          <select
            name="carBrand"
            value={state.carBrand}
            onChange={handleChange}
          >
            <option value="" disabled>
              --Pick a car brand--
            </option>
            {carBrandOptions}
          </select>
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange}
          />
          Is Checked?
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === 'male'}
            onChange={handleChange}
          />{' '}
          Male
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === 'female'}
            onChange={handleChange}
          />{' '}
          Female
        </label>
        <label>
          Price (between 0 and 100):
          <input
            type="range"
            name="price"
            min="0"
            max="100"
            value={state.price}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="btn">Submit</button>
      </form>
      <h5>
        Name: {state.fname} {state.lname}
      </h5>
      <p>Message: {state.message}</p>
      <h5>Favorite car brand: {state.carBrand}</h5>
      <h5>Is It checked? : {state.isChecked ? 'Yes' : 'No'}</h5>
      <h5>Gender : {state.gender}</h5>
      <h5>Price : ${state.price}</h5>
    </div>
  );
};

export default Form;
