const NoAutorizado = () => {
  return (
    <div className='container mt-4'>
      <div
        className='d-flex justify-content-center subtitle'
        style={{ marginTop: '60px', fontSize: '25px' }}
      >
        NO AUTORIZADO
      </div>
      <div className='d-flex justify-content-center'>
        <div>
          <img src="frontend/public/denied.jpg"/>
        </div>
        Por favor contacte al Administrador para que autorice su cuenta.
      </div>
    </div>
  );
};

export default NoAutorizado;
