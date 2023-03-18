import PostOverviewCard from "../cards/postSideOverviewCard/PostOverviewCard";
import SideMenu from "../sideMenu/SideMenu";

export interface IPrimaryPageContent {
  children: React.ReactNode;
  test?: string;
}

const PrimaryPageContent: React.FC<IPrimaryPageContent> = ({ children }) => {
  return (
    <div className="mt-16">
      <div className="flex justify-center space-x-0 mdtb:space-x-4 ">
        <div className="hidden h-auto w-64 flex-none space-y-4 mdtb:inline">
          <SideMenu />
        </div>
        <div className="w-m h-auto max-w-2xl flex-auto space-y-4 mdtb:m-0">
          {children}
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
