const TemplateExpression = () => {
  const name = "Luan";
  const data = {
    age: 28,
    job: "Programmer",
  };

  return (
    <>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </>
  );
};

export default TemplateExpression;
