import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchData() {
  const response = await axios("https://jsonplaceholder.typicode.com/comments");
  const data = response.data;
  return data;
}

const UseQuery = () => {
  const { data, error, isLoading }: any = useQuery({
    queryKey: ["comments"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {data.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </>
  );
};

export default UseQuery;
