import Card from "./dashboard-card";

const PageHeader = () => {
  const dashboardContent = [
    {
      title: "Earnings (Monthly)",
      value: "$40,000",
      icon: "calender",
      variant: "primary",
    },
    {
      title: "Earnings (Annual)",
      value: "$215,000",
      icon: "dollar-sign",
      variant: "success",
    },
    {
      title: "Tasks",
      value: "50%",
      icon: "clipboard-list",
      variant: "info",
    },
    {
      title: "Pending Requests",
      value: "18",
      icon: "comments",
      variant: "warning",
    },
  ];

  return (
    <>
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="/"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        {dashboardContent.map((content, index) => {
          return <Card key={index} details={content} />;
        })}
      </div>
    </>
  );
};

export default PageHeader;
