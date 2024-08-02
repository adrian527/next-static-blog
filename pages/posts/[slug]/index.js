import Head from "next/head";
import PostContent from "../../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../../lib/posts-utils";

function Post(props) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" />
      </Head>
      <PostContent post={props.post} content={props.post.excerpt} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export default Post;
