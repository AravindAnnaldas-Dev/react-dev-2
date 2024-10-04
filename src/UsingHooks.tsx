import { useFetching } from './customHooks/useFetching';

const url = 'https://jsonplaceholder.typicode.com/albums';

type Talbum = {
  userId: number;
  id: number;
  title: string;
};

const UsingHooks = () => {
  const [data, loading]: any = useFetching(url);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.map((album: Talbum) => (
            <div key={album.id}>{album.title}</div>
          ))}
        </>
      )}
    </>
  );
};

export default UsingHooks;
