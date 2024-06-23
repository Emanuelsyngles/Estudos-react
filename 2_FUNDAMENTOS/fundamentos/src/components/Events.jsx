const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativou o evento!");
  };

  return (
    <>
      <>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </>
      <>
        <button onClick={() => console.log("Clicou!")}>
          Clique aqui também
        </button>
      </>
    </>
  );
};

export default Events;
