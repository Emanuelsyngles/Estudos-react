const Challenge = () => {
  const a = 23;
  const b = 62;

  return (
    <>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button
        onClick={() => {
          console.log(a + b);
        }}
      >
        Somar
      </button>
    </>
  );
};

export default Challenge;
