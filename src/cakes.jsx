const cakes = Array.from(
  { length: 30 },
  (_, i) => `/Images/cakes/${i + 1}.PNG`,
);

const cakes2 = Array.from(
  { length: 70 },
  (_, i) => `/Images/cakes2/${i + 31}.jpg`,
);

function Cakes() {
  const allCakes = [...cakes, ...cakes2];
  return (
    <>
      <div className="cake-grid-container">
        {allCakes.map((cakes, i) => (
          <div key={i}>
            <img src={cakes} alt="cakes" className="cake-img" loading="lazy" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Cakes;
