export default async function Page() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return <div>Hello NextJS page</div>;
}
