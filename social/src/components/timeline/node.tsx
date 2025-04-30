import React from 'react';

export interface ChildPost {
  _id: string;
  text: string;
  parent: string;
  level: number;
}

export interface Post {
  _id: string;
  text: string;
  parent: string | null;
  children?: ChildPost[];
}

export interface NodeComponentProps {
  posts: Post[];
}

const NodeComponent: React.FC<NodeComponentProps> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <div className='border p-3 m-2' key={post._id} style={{ marginLeft: post.parent ? 20 : 0 }}>
          <div>{post.text}</div>
          {post.children && post.children.length > 0 && (
            <NodeComponent posts={post.children} />
          )}
          <div className='m-2'>Reply</div>
        </div>
      ))}
    </>
  );
};

export default NodeComponent;
