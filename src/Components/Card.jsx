import React from "react";


const Card = ({ data}) => {
  
  const img_doc = "https://img.freepik.com/premium-vector/doctor-profile-with-medical-service-icon_617655-48.jpg"

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>{data.id}</h3>
        <img src={img_doc} alt="Img-Doc" className="Img-Doc"/>
        <h4>{data.name}</h4>
        <h5>{data.username}</h5>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
