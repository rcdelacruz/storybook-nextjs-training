import Link from "next/link";

export interface IPostOverviewCard {
  headerTitle: string;
  postTitle: string;
  hasSeeAllLink: boolean;
  isNew?: boolean;
}

const PostOverviewCard: React.FC<IPostOverviewCard> = ({
  headerTitle,
  postTitle,
  hasSeeAllLink,
  isNew,
}) => {
  return (
    <div className="w-80 rounded-md bg-zinc-50 shadow-cardShadow">
      <div className="flex justify-between border-b-1 border-solid border-stone-100 p-.75rem">
        <Link className="text-lg font-bold" href="/">
          {headerTitle}
        </Link>
        {hasSeeAllLink ? (
          <Link className="text-sm font-semibold text-blue-500" href="/">
            See all
          </Link>
        ) : (
          ""
        )}
      </div>
      <div>
        <Link className="flex rounded-md p-1rem hover:bg-white" href="/">
          <div className="flex-col">
            <div className="mb-1 hover:text-hover">{postTitle}</div>
            {isNew ? (
              <span className="rounded-md bg-newPostBG p-1 text-sm text-newPostFontColor">
                New
              </span>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostOverviewCard;
