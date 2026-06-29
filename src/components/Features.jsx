import { FaTruck, FaTags, FaLeaf, FaLock } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Delivery",
      text: "On orders above ₹499",
    },
    {
      icon: <FaTags />,
      title: "Best Prices",
      text: "Unbeatable prices daily",
    },
    {
      icon: <FaLeaf />,
      title: "Fresh Products",
      text: "100% quality assured",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      text: "100% secure & safe",
    },
  ];

  return (
    <section className="features">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{item.icon}</div>
          <div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Features;