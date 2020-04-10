import React from 'react';

const Data = ({ deaths, confirmed, recovered }) => (

    <>
        <div> Muertes:  {deaths} </div>
        <div> Casos confirmados:  {confirmed} </div>
        <div> Recuperados:  {recovered} </div>
    </>

);

export default Data;

