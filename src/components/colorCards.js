const ColorCards = ({details}) => {
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className={`card bg-${details.variant} text-white shadow`}>
          <div className={`${details.title !== "Light" ? "text-white" : "text-dark"} card-body`}>
            {details.title}
            <div className={`${details.title !== "Light" ? "text-white-50" : "text-dark"} small`}>{details.code}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorCards;