// App.tsx (Vite + React + TypeScript) – Everlane-style banner + side mini banners
import React from "react";

interface Saree {
  id: number;
  name: string;
  price: number;
  image: string;
}

const sarees: Saree[] = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 2499,
    image: "sarees/1.jpg",
  },
  {
    id: 2,
    name: "Cotton Handloom Saree",
    price: 1799,
    image: "sarees/2.jpg",
  },
  {
    id: 3,
    name: "Georgette Saree",
    price: 2199,
    image: "sarees/3.jpg",
  },
  {
    id: 4,
    name: "Kanjivaram Silk Saree",
    price: 3999,
    image: "sarees/4.jpg",
  },
  {
    id: 5,
    name: "Kanjivaram Silk Saree",
    price: 3999,
    image: "sarees/5.jpg",
  },
];

const App: React.FC = () => {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>ZIYA SAREES</header>

      {/* Large Banner */}
      <section style={styles.banner}>
        <img
          src="banner.jpg"
          alt="Saree banner"
          style={styles.bannerImg}
        />
        <div style={styles.bannerOverlay}>
          <h1 style={styles.bannerTitle}>Where Elegance Begins</h1>
        </div>
      </section>

      {/* Product Grid */}
      <section style={styles.contentRow}>
        <div style={styles.grid}>
          {sarees.map((s) => (
            <div key={s.id} style={styles.card}>
              <img src={s.image} alt={s.name} style={styles.image} />
              <div style={styles.info}>
                <div style={styles.name}>{s.name}</div>
                <div style={styles.price}>₹{s.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    backgroundColor: "#ffffff",
    color: "#111",
    minHeight: "100vh",
  },
  header: {
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    letterSpacing: "2px",
    borderBottom: "1px solid #eee",
  },
  banner: {
    height: "60vh",
    position: "relative",
    overflow: "hidden",
  },
  bannerImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  bannerOverlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.6)",
    textAlign: "center",
  },
  bannerTitle: {
    fontSize: "36px",
    fontWeight: 600,
    marginBottom: "8px",
  },
  bannerSub: {
    fontSize: "14px",
    color: "#444",
  },
  contentRow: {
    padding: "48px 24px",
  },
  sideBanner: {
    position: "relative",
    cursor: "pointer",
  },
  sideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  sideText: {
    position: "absolute",
    bottom: "16px",
    left: "16px",
    fontSize: "14px",
    fontWeight: 500,
    background: "rgba(255,255,255,0.85)",
    padding: "6px 10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "32px",
  },
  card: {
    cursor: "pointer",
  },
  image: {
    width: "100%",
    marginBottom: "12px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  name: {
    fontSize: "14px",
    fontWeight: 500,
  },
  price: {
    fontSize: "14px",
    color: "#555",
  },
};
