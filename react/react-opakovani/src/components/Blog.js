import React, { useEffect, useState } from 'react';
import Post from './Post';

function Blog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const resData = await res.json()
            setData(resData)
        }

        fetchdata()

        return () => {
            console.log("⚠");
        }
    }, [])

    console.log(data);

  return(
      <div className='grid grid-cols-2 space-x-4 space-y-4 p-4 border sm:grid-cols-3 items-center'>
          {data.map(({title, body, id}) => (
              <Post key={id} title={title} text={body} id={id}/>
          ))}
      </div>
  );
}

export default Blog;
