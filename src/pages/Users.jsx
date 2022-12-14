import React, {useState} from 'react';
import useFetch from './useFetch';

function Users() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );
  
  console.log({ loading, error, data });

  const PER_PAGE = 5;
  
  const total = data?.results?.length;
  
  const pages = 10;

  const skip = page * PER_PAGE - PER_PAGE;
  

  // use the useEffect to make api call based on the page.

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <div className="Users">
      <h1 className="title">List of Users</h1>
     
      {data?.results
        
        .map((each, index) => {
          const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
          return (
            <li key={name.toLowerCase().replaceAll(' ', '')}>{`${
              index + 1
            }.${name}`}</li>
          );
        })}
      {
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </button>
      }
      <p className="pagination">
        Pages: {page} of {pages}
      </p>
      {
        <button
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>
      }

      
      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => (
          <button onClick={() => setPage(each)}>{each}</button>
        )
      )}
    </div>
  );
}

export default Users;
