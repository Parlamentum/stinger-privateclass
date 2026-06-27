import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import type { BlogPost } from '../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  basePath?: '/blog' | '/knowledge';
}

const BlogCard: React.FC<BlogCardProps> = ({ post, basePath = '/blog' }) => {
  const href = `${basePath}/${post.slug}`;

  return (
    <article className="minecraft-card group hover:border-green-400 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-3 text-sm text-gray-400">
        <span className="flex items-center gap-1">
          <Tag className="w-4 h-4 text-green-500" />
          {post.category}
        </span>
        {post.topic && (
          <span className="text-gray-500 font-rubik">{post.topic}</span>
        )}
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-green-500" />
          {post.readTime}
        </span>
      </div>

      <h2 className="text-xl font-handjet text-green-500 mb-3 group-hover:text-green-400 transition-colors">
        <Link to={href}>{post.title}</Link>
      </h2>

      <p className="text-gray-400 text-sm font-rubik flex-grow mb-4 leading-relaxed">
        {post.excerpt}
      </p>

      <Link
        to={href}
        className="text-green-500 hover:text-green-400 font-handjet text-sm transition-colors"
      >
        קרא עוד ←
      </Link>
    </article>
  );
};

export default BlogCard;
