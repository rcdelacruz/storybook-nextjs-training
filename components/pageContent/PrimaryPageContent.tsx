import MainPostOverviewCard from "../cards/mainPostOverviewCard/MainPostOverviewCard";
import PostOverviewCard from "../cards/postSideOverviewCard/PostOverviewCard";
import SideMenu from "../sideMenu/SideMenu";

export interface IPrimaryPageContent {}

const PrimaryPageContent: React.FC<IPrimaryPageContent> = ({}) => {
  return (
    <div className="mt-16">
      <div className="flex justify-center space-x-0 mdtb:space-x-4 ">
        <div className="hidden h-auto w-64 flex-none space-y-4 mdtb:inline">
          <SideMenu />
        </div>
        <div className="w-m h-auto max-w-2xl flex-auto space-y-4 mdtb:m-0">
          <MainPostOverviewCard
            readingTime={0}
            title="Listings"
            featureImage="/images/header-image.png"
            date="2023-03-09T09:20:56.000+00:00"
            author="Jan Rodulf Basoc"
          />
        </div>
        <div className="hidden h-auto w-80 flex-none space-y-4 lg:inline">
          <PostOverviewCard
            headerTitle="Listings"
            hasSeeAllLink={true}
            postTitle="NO LISTING IN GHOST"
          />
          <PostOverviewCard
            headerTitle="#HeaderTitle"
            hasSeeAllLink={false}
            postTitle="NO API TO FETCH POSTS BY TAGS"
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryPageContent;
