export const handleOrderClick = () => {
  const phoneNumber = "9032221070";
  const message = encodeURIComponent(
    "Hello, I am interested in the product. Please provide more details."
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(url, "_blank");
};
