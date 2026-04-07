import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { format } from 'date-fns';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: any;
  tags: string[];
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'posts'),
      where('isPublished', '==', true),
      orderBy('publishedAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Post[];
      setPosts(postsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching posts:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12"
    >
      <div className="mb-16 border-b border-[#D8CDEE] pb-8">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
          The <span className="font-bold text-[#6255F1]">Log</span>
        </h1>
        <p className="font-mono text-[#0C080A] text-sm tracking-widest uppercase">
          Thoughts, tutorials, and technical deep dives.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-[#6255F1] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-[#0C080A]">
          <p className="font-mono text-[#0C080A]">No posts found. Check back later.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                  <time className="font-mono text-sm font-bold text-[#6255F1] shrink-0 w-32">
                    {post.publishedAt ? format(post.publishedAt.toDate(), 'MMM dd, yyyy') : 'Draft'}
                  </time>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:font-bold text-[#6255F1] transition-colors">
                    {post.title}
                  </h2>
                </div>
                
                <div className="md:pl-36">
                  <p className="text-[#0C080A] text-lg mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map(tag => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 bg-[#EBEBEB] text-[#0C080A] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      )}
    </motion.div>
  );
}
