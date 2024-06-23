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
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não deveria existir =)");
            }
          }}
        >
          Clica aqui, por favor
        </button>
      </>
    </>
  );
};

export default Events;
