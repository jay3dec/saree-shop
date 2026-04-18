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
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Cotton Handloom Saree",
    price: 1799,
    image: "https://images.unsplash.com/photo-1623073491323-2c5f6e8e7a4b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Georgette Saree",
    price: 2199,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Kanjivaram Silk Saree",
    price: 3999,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
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

      {/* Side Mini Banners + Products */}
      <section style={styles.contentRow}>
        {/* Left Mini Banner */}
        <div style={styles.sideBanner}>
          <img
            src="https://images.unsplash.com/photo-1618221710640-c6c8f0d9d7e5?auto=format&fit=crop&w=600&q=80"
            alt="Handloom Story"
            style={styles.sideImage}
          />
          <div style={styles.sideText}>Handloom Stories</div>
        </div>

        {/* Product Grid */}
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

        {/* Right Mini Banner */}
        <div style={styles.sideBanner}>
          <img
            src="https://images.unsplash.com/photo-1594737625785-cfc6b4c9a3d6?auto=format&fit=crop&w=600&q=80"
            alt="Crafted Elegance"
            style={styles.sideImage}
          />
          <div style={styles.sideText}>Crafted Elegance</div>
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
    display: "grid",
    gridTemplateColumns: "240px 1fr 240px",
    gap: "32px",
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
