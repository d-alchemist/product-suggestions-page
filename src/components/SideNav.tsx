import Badge from "./Badge";
import Box from "./Box";

const badges = [
  { text: "All", selected: true },
  { text: "UI", selected: false },
  { text: "UX", selected: false },
  { text: "Enhancement", selected: false },
  { text: "Bug", selected: false },
  { text: "Feature", selected: false },
];

const issues = [
  { text: "Planned", number: "2", color: "bg-[#F49F85]" },
  { text: "In-Progress", number: "3", color: "bg-[#AD1FEA]" },
  { text: "Live", number: "1", color: "bg-[#62BCFA]" },
];

export default function SideNav() {
  return (
    <div className="flex flex-col gap-4">
      <Box className="p-7 sidebar-bg bg-cover bg-no-repeat">
        <div className="pt-10 pb-2 text-white">
          <p className="text-xl font-bold">Frontend Mentor</p>
          <p className="text-base font-normal opacity-75">Feedback Board</p>
        </div>
      </Box>
      <Box className="bg-white flex gap-5 flex-wrap p-7">
        {badges.map((badge) => (
          <Badge selected={badge.selected} key={badge.text}>
            {badge.text}
          </Badge>
        ))}
      </Box>
      <Box className="bg-white">
        <div className="px-5 py-8">
          <div className="flex justify-between items-center">
            <p className="text-secondary text-lg font-bold">Roadmap</p>
            <p className="text-primary underline text-13 font-semibold">View</p>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {issues.map((issue) => (
              <RoadMapIssues
                color={issue.color}
                number={issue.number}
                text={issue.text}
                key={issue.text}
              />
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
}

const RoadMapIssues = ({
  color,
  text,
  number,
}: {
  color: string;
  text: string;
  number: string;
}) => {
  return (
    <div className="flex w-full items-center">
      <div className={`${color} h-2 w-2 rounded-full`}></div>
      <p className="ml-4 font-normal text-lg text-light-secondary">{text}</p>
      <p className="ml-auto text-light-secondary font-bold text-lg">{number}</p>
    </div>
  );
};
