import BulbIcon from "../assets/bulb_icon.svg";
import Button from "./Button";
import ChevronDown from "../assets/chevron_down.svg";

export default function SuggestionBar() {
  return (
    <div className="bg-brown w-full rounded-10 pl-8 pr-4 py-4">
      <div className="flex items-start lg:items-center flex-wrap flex-col md:flex-row gap-4 lg:gap-0">
        <div className="flex items-center gap-5">
          <img src={BulbIcon} alt="bulb icon" className="h-6" />
          <p className="text-white font-semibold text-lg">6 Suggestions</p>
        </div>
        <div className="flex items-center gap-3 ml-0 lg:ml-5 text-white">
          <p className="font-normal text-[#F2F4FE]">Sort by :</p>
          <div className="flex gap-2 items-center">
            <p className="font-semibold">Most Upvotes</p>
            <img
              src={ChevronDown}
              className="h-2.5 w-2.5"
              alt="dropdown icon"
            />
          </div>
        </div>
        <div className="ml-0 lg:ml-auto">
          <Button>+ Add Feedback</Button>
        </div>
      </div>
    </div>
  );
}
