import './styles/BlogPost.scss';

type Post = {
  title: string;
  content: string;
};

export default function BlogPost({ title, content }: Post) {
  return (
    <div className='blog-post'>
      <h1>{title}</h1>
      <article>{content}</article>
    </div>
  );
}
