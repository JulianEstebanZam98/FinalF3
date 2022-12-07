import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [values, setValues] = useState({
    name: "",
    email: "",
  })

  const [validation, setValidation] = useState(false)


  const validarNombre = () => {

    let nameUser = values.name.split(" ")

    if (nameUser.length < 2) return alert("Por favor rellene el campo correspondiente")
    if (nameUser[0].length < 3 || nameUser[1].length < 3) return alert("por favor introduzca un nombre o apellido correcto")

    return true

  }

  const validarEmail = () => {

    let emailUser = values.email.split("@")
    if (emailUser.length < 2) return alert("Email incorrecto, debe contener una '@' y una extension valida como '.com'")

    let dotCom = emailUser[1].split(".")
    if (dotCom.length < 2) return alert("Email incorrecto, debe contener una '@' y una extension valida como '.com'")

    return true

  }

  const handleChange = (e) => {

    const { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]:value,
    }

    setValues(newValues)

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    let nameValidation = validarNombre()

    let emailValidation = validarEmail()

    if (nameValidation && emailValidation) {
      setValidation(true)
    }

  }

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="input-form" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className="input-form" onChange={handleChange} />
        <button type="submit" className="bton-form">SUBMIT</button>
      </form>
      <div className="container-h90">
      {validation ? <h3 className="h90">Fue un placer atenderte {values.name}😏, un asesor se contactará pronto contigo!😎</h3> : ""}
      </div>
    </div>
  );
};

export default Form;
