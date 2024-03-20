import BlogDetail from "./components/blog-detail";

export default async function IndexPage({
  params,
}: {
  params: { slug: string };
}) {
  return <BlogDetail slug={params?.slug} />;
}
