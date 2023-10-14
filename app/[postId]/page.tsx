"use client";

import { Suspense } from "react";

import Layout from "@/components/Layout";
import MobileLayoutTemplate from "@/components/MobileLayoutTemplate";
import Skeleton from "@/components/Skeleton";

import PostDetail from "./PostDetail";

const PostDetailPage = () => {
  return (
    <Layout isSidebarVisible={true} isMobileDefaultHeaderVisible={false}>
      <Suspense
        fallback={
          <MobileLayoutTemplate>
            <Skeleton isLarge={true} />
          </MobileLayoutTemplate>
        }
      >
        <PostDetail />
      </Suspense>
    </Layout>
  );
};

export default PostDetailPage;
