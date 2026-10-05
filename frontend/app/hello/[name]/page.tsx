export default async function Hello(props: PageProps<"/hello/[name]">) {
    const { name } = await props.params;
  
    return <p className="p-8">Hello, {name}!</p>;
  }
  