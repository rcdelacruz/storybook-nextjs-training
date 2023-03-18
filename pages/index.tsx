import MainPostOverviewCard from "@/components/cards/mainPostOverviewCard/MainPostOverviewCard";
import PrimaryPageContent from "@/components/pageContent/PrimaryPageContent";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const fetchAPI = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  return response.json();
};

const Home: NextPage = () => {
  const [blogList, setBlogList] = useState<React.ReactNode>(
    <div className="flex justify-center">Loading...</div>
  );

  useEffect(() => {
    fetchAPI(
      `https://cms.coderstudio.site/ghost/api/content/posts/?key=0ccf96e04a54d3f3e9327bf1a4&include=authors,tags`
    ).then((data) => {
      const blogs = data.posts;

      setBlogList(
        blogs.map((blog: any, idx: number) => {
          return (
            <MainPostOverviewCard
              key={idx}
              readingTime={blog.reading_time}
              title={blog.title}
              featureImage={blog.feature_image}
              date={blog.published_at}
              author={blog.primary_author.name}
              profileImage={blog.primary_author.profile_image}
              tags={blog.tags}
            />
          );
        })
      );
    });
  }, []);

  return (
    <>
      <Head>
        <title> Initial Layout</title>
      </Head>
      <div className={`flex min-h-screen flex-col`}>
        <div>HEADER HERE</div>
        <PrimaryPageContent>{blogList}</PrimaryPageContent>
        <div className="m-auto" />
        <div>FOOTER HERE</div>
      </div>
    </>
  );
};

export default Home;
