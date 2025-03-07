
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Art of Coffee Roasting",
    excerpt: "Discover the secrets behind perfect coffee roasting...",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0",
    date: "March 5, 2024",
    content: "Coffee roasting is an art that transforms the raw coffee bean into the aromatic beans we know and love. The process involves careful temperature control and timing, affecting the final flavor profile of your cup. Light roasts preserve the bean's original flavor characteristics, while dark roasts create bold, intense flavors."
  },
  {
    id: 2,
    title: "Brewing Methods Compared",
    excerpt: "A comprehensive guide to different brewing techniques...",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    date: "March 3, 2024",
    content: "Each brewing method brings out different qualities in your coffee. Pour-over highlights clarity and brightness, while French press emphasizes body and richness. The key to great coffee lies in matching your brewing method to your preferred taste profile."
  },
  {
    id: 3,
    title: "Coffee Origin Stories",
    excerpt: "Exploring the world's finest coffee-growing regions...",
    image: "https://images.unsplash.com/photo-1500423079914-b65af272b8db",
    date: "March 1, 2024",
    content: "Coffee grows in various regions around the world, each producing beans with distinctive characteristics. From the floral notes of Ethiopian beans to the chocolate undertones of Brazilian coffee, every region's unique climate and soil conditions contribute to its coffee's signature taste."
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-coffee-secondary/10 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-coffee-primary mb-8 hover:text-coffee-dark transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-72 object-cover"
          />
          <div className="p-8">
            <div className="text-sm text-gray-500 mb-4">{post.date}</div>
            <h1 className="font-playfair text-4xl text-coffee-dark mb-6">
              {post.title}
            </h1>
            <div className="prose max-w-none">
              <p className="text-gray-600">{post.content}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
