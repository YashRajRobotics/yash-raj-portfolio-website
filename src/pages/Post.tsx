import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';

interface PostData {
  title: string;
  content: string;
  publishedAt: any;
  tags: string[];
}

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        // First try to fetch the post without isPublished filter (works for admins)
        let q = query(collection(db, 'posts'), where('slug', '==', slug));
        let querySnapshot;
        
        try {
          querySnapshot = await getDocs(q);
        } catch (err) {
          // If permission denied, fallback to querying only published posts (for public users)
          q = query(collection(db, 'posts'), where('slug', '==', slug), where('isPublished', '==', true));
          querySnapshot = await getDocs(q);
        }
        
        if (!querySnapshot.empty) {
          setPost(querySnapshot.docs[0].data() as PostData);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-[#00FF00] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">404</h1>
        <p className="font-mono text-white/50 mb-8">Post not found.</p>
        <Link to="/blog" className="text-[#00FF00] font-mono hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto py-12"
    >
      <Link to="/blog" className="inline-flex items-center space-x-2 text-white/50 hover:text-[#00FF00] font-mono text-sm mb-12 transition-colors">
        <ArrowLeft size={16} />
        <span>BACK TO LOG</span>
      </Link>

      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 font-mono text-sm text-white/50">
          <time className="text-[#00FF00]">
            {post.publishedAt ? format(post.publishedAt.toDate(), 'MMMM dd, yyyy') : 'Draft'}
          </time>
          <span>//</span>
          <div className="flex gap-2">
            {post.tags?.map(tag => (
              <span key={tag} className="uppercase tracking-wider">#{tag}</span>
            ))}
          </div>
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#00FF00] hover:prose-a:text-white prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10 prose-code:text-[#00FF00]">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw]}
          components={{
            code({node, inline, className, children, ...props}: any) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </motion.article>
  );
}
