
const Card = ({details}) => {
    return (
        <>
            <div className="col-xl-3 col-md-6 mb-4">
                            <div className={`card border-left-${details.variant} shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-${details.variant} text-uppercase mb-1`}>
                                                {details.title}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{details.value}</div>
                                            {details.title === "Tasks" ? 
                                            <div className="col">
                                                    <div className="progress progress-sm mr-2">
                                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div> : 
                                                <></>
                                            }
                                        </div>
                                        <div className="col-auto">
                                        <i className={`fas fa-${details.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default Card;