import BreadCrumbs from "@components/utils/breadCrumbs";
import Tables from "@components/utils/tables";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { columnPushedArticleList } from "./table/columnsTables";
import { optionsArticlesList } from "./table/optionsTables";

const Blog = () => {
  const router = useRouter();
  const columns = useMemo(() => columnPushedArticleList, []);
  const [posts, setAllPosts] = useState<any>([]);

  const getAllPosts = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/articles`
      );
      const data = res.data;
      setAllPosts(data);
    } catch (error: any) {
      error?.response?.data?.message &&
        console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <section className="text-gray-900 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="/" active={true} />
            <BreadCrumbs url="/" name="Dashboard" active={true} />
            <BreadCrumbs url="/blog/" name="Blog" active={false} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full min-w-0 mb-6 break-words">
          <div className="px-4 py-5">
            <div className="container tab-content tab-space">
              {posts.length > 0 && (
                <Tables
                  columns={columns}
                  fetchData={posts}
                  options={optionsArticlesList}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
