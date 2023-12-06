import React, { useState, useEffect } from 'react';
import validate from './validation'; // Importa la función de validación

const Form = ({ access, setAccess, EMAIL, PASSWORD, login }) => {
  // Estado local para almacenar la información del usuario
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  // Estado local para almacenar los errores de validación
  const [errors, setErrors] = useState({});

  // Efecto para redirigir cuando el acceso cambia
  useEffect(() => {
    // Redirige a la página principal si el acceso es verdadero
    access && window.location.replace('/home');
  }, [access]);

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualizar el estado local con la nueva información del input
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los datos antes de enviar
    const validationErrors = validate(userData, EMAIL, PASSWORD);
    setErrors(validationErrors);

    // Si no hay errores, puedes proceder con el envío
    if (Object.keys(validationErrors).length === 0) {
      // Comprobar acceso
      if (userData.email === EMAIL && userData.password === PASSWORD) {
        setAccess(true);
        // Ejecutar la función login y pasar userData como parámetro
        login(userData);
      } else {
        window.alert('Credenciales incorrectas. Acceso denegado.');
        setAccess(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;