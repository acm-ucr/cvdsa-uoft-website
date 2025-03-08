import AwarenessCommittee from "./committees/AwarenessCommittee";
import DevelopmentCommittee from "./committees/DevelopmentCommittee";
import EventsCommittee from "./committees/EventsCommittee";
import FinanceCommittee from "./committees/FinanceCommittee";
import ResearchCommittee from "./committees/ResearchCommittee";

const Committees = () => {
  return (
    <div className="mb-4">
      <div className="my-[8vh] h-1 w-screen bg-gradient-to-r from-cvdsa-orange-100 to-cvdsa-purple-100"></div>
      <p className="my-[4vh] text-center font-seasons text-5xl">
        MEET THE COMMITTEE MEMBERS
      </p>
      <div className="grid grid-cols-1 justify-center text-center md:grid-cols-3">
        <div>
          <ResearchCommittee />
        </div>
        <div>
          <AwarenessCommittee />
          <FinanceCommittee />
        </div>
        <div>
          <DevelopmentCommittee />
          <EventsCommittee />
        </div>
      </div>
    </div>
  );
};
export default Committees;
