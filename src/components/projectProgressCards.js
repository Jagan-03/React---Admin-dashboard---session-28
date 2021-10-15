const ProgressCards = ({details}) => {
    return (
        <>
            <h4 className="small font-weight-bold">
            {details.title}<span className="float-right">{details.percent}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className={`progress-bar bg-${details.variant} w-${details.width}`}
              role="progressbar"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </>
    )
}
export default ProgressCards;