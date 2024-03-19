import { ReactElement } from "react";
import CommentIcon from "../assets/comment_icon.svg";
import ChevronUpIcon from "../assets/chevron_up.svg";
type Props = {
  badge: ReactElement;
  placement: string;
  upvotes: string;
  title: string;
  description: string;
  comments: number;
};

export default function SuggestionCard({
  badge,
  placement,
  upvotes,
  title,
  description,
  comments,
}: Props) {
  return (
    <div className="flex bg-white rounded-10 px-4 lg:px-8 py-7">
      <div className="mr-5 bg-light-primary flex flex-col self-start rounded-10 gap-1.5 py-4 min-w-10 px-3">
        <div className={`flex w-full justify-${placement}`}>
          <img
            className="h-2.5 w-2.5"
            src={ChevronUpIcon}
            alt="chevron up icon"
          />
        </div>
        <p className="text-13 font-bold text-secondary text-center">
          {upvotes}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold leading-none text-lg text-secondary">{title}</p>
        <p className="text-light-secondary leading-none max-w-40 lg:max-w-lg">
          {description}
        </p>
        <div>{badge}</div>
      </div>
      <div className="ml-auto my-auto">
        <div className="flex items-center gap-3">
          <img src={CommentIcon} className="h-5 w-5" alt="comment icon" />
          <p
            className={`${
              comments < 1 ? "opacity-50" : "opacity-100"
            } text-secondary font-bold`}
          >
            {comments}
          </p>
        </div>
      </div>
    </div>
  );
}
