import React from 'react';

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;