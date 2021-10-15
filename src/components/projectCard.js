import ProgressCards from "./projectProgressCards";

const ProjectCard = () => {
  const projectDetails = [
    {
      title: "Server Migration",
      percent: "20%",
      variant: "danger",
      width: "25",
    },
    {
      title: "Sales Tracking",
      percent: "40%",
      variant: "warning",
      width: "50",
    },
    {
      title: "Customer Database",
      percent: "60%",
      variant: "primary",
      width: "60",
    },
    {
      title: "Payout Details",
      percent: "60%",
      variant: "info",
      width: "50",
    },
    {
      title: "Account Setup",
      percent: "Complete!!!",
      variant: "success",
      width: "100",
    },
  ];

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body">
          {projectDetails.map((details, index) => {
            return <ProgressCards key={index} details={details} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
