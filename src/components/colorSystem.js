import ColorCards from "./colorCards";

const ColorSystem = () => {
  const colors = [
    {
      title: "Primary",
      variant: "primary",
      code: "#4e73df",
    },
    {
      title: "Success",
      variant: "success",
      code: "#1cc88a",
    },
    {
      title: "Info",
      variant: "info",
      code: "#36b9cc",
    },
    {
      title: "Warning",
      variant: "warning",
      code: "#f6c23e",
    },
    {
      title: "Danger",
      variant: "danger",
      code: "#e74a3b",
    },
    {
      title: "Secondary",
      variant: "secondary",
      code: "#858796",
    },
    {
      title: "Light",
      variant: "light",
      code: "#f8f9fc",
    },
    {
      title: "Dark",
      variant: "dark",
      code: "#5a5c69",
    },
  ];

  return (
    <>
      <div className="row">
        {colors.map((color, index) => {
          return <ColorCards key={index} details={color} />;
        })}
      </div>
    </>
  );
};

export default ColorSystem;
