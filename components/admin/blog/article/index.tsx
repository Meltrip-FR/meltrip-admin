import { useEffect, useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/router";

import BreadCrumbs from "@components/utils/breadCrumbs";
import axios from "axios";
import Form from "./form";

const ArticlePage = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();

  const getArticle = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/article/${router.query.id}`
    );
    setData(res.data);
  };

  useEffect(() => {
    getArticle();
  }, [router.query.id]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="/" active={true} />
            <BreadCrumbs url="/" name="Dashboard" active={true} />
            <BreadCrumbs url="/admin/blog" name="Blog" active={true} />
            <BreadCrumbs
              url={`/blog/${router.query.id}}`}
              name={data?.title}
              active={false}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-5 items-center justify-center">
          {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-center w-full mt-12">
            {data?.title}
          </h1>
          <p className="font-light text-center w-1/2 mt-5">
            {data?.description}
          </p>
        </div>
        <div className="bg-cover bg-center">
          {/* {data?.pictureURL && (
            <Image
              src={data?.pictureURL}
              alt="picture"
              sizes="auto"
              layout="fill"
            />
          )}
        </div>
        <div className="col-span-5">
          <p dangerouslySetInnerHTML={{ __html: data?.text }} />
        </div> */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
