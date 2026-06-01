const cupcakes = Array.from(
  { length: 28 },
  (_, i) => `Images/cupcakes/${i + 1}.jpg`,
);

function Cupcakes() {
  return (
    <>
      <div className="cupcake-grid-container">
        {cupcakes.map((cupcake, i) => (
          <div key={i}>
            <img
              src={cupcake}
              alt="cakes"
              className="cupcake-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Cupcakes;
