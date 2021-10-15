import ProjectCard from "./projectCard";
import ColorSystem from "./colorSystem";
import Illustrations from "./illustrations";
import Approach from "./approach";

const Contents = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 mb-4">
            <ProjectCard />
            <ColorSystem />
        </div>
        <div className="col-lg-6 mb-4">
            <Illustrations />
            <Approach />
        </div>
      </div>
    </>
  );
};

export default Contents;
