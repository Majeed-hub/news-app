import React from 'react';

const Article = ({Content,Data}) => {
    return (
      <>
        {/* <div>
          {Content.map((c) => (
            <p key={c}>{c}</p>
          ))}
        </div> */}
        <div>
          {Data.map((post) => (
            <p key={post.id}>
              {post.id}
              <br />
              {post.title}
              <br />

              {post.body}
            </p>
          ))}
        </div>
      </>
    );
}

export default Article;
