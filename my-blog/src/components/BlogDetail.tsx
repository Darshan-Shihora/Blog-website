import { useParams } from "react-router-dom";

type BlogId = {
  blogId: string;
};

function BlogDetail() {
  const params = useParams<BlogId>();
  return (
    <>
      <div>BlogDetail</div>
      <p>{params.blogId}</p>
    </>
  );
}

export default BlogDetail;
