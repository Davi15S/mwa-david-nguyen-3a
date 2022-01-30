import React, { useEffect, useState } from 'react';

function Post({ title, text, id }) {
    const [i, setI] = useState(id);

    useEffect(() => {
      console.log("🐛");
      setI(i*2)
    }, []);
    
    {i < 4 ? console.log(`🚀 ${i}`) : console.log(i)}

    return (
        <div className='flex flex-col items-center mt-5'>
            <div>
                {title}
            </div>
            <div>
                {text}
            </div>
        </div>
    );
}

export default Post;
