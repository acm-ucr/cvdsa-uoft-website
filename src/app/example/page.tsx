import Grid from "@/components/example/grid";
import Props from "@/components/example/props";

const page = () => {
  return (
    <div>
      <Grid />
      <Props title="hi" description="hey" bgColor="bg-red-100" />
      <Props title="hey" description="me" bgColor="bg-red-100" />
      <Props title="hello" description="hey" bgColor="bg-red-100" />
    </div>
  );
};

export default page;
