const Loafs = Array.from(
  { length: 2 },
  (_, i) => `/Images/loaves/${i + 1}.jpeg`,
);

function Loaves() {
  return (
    <div className="cake-grid-container">
      {Loafs.map((loaf, i) => (
        <div key={i}>
          <img
            src={loaf}
            alt={`Loaf ${i + 1}`}
            className="cake-img"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default Loaves;
