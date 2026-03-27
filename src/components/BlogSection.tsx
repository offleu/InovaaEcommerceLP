import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Loader2, Tag } from "lucide-react";
import { InovaaButton } from "./ui/inovaa-button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";

import blackFridayImg from "@/assets/black-friday-ecommerce.jpg";
import ecommerceGrowthImg from "@/assets/ecommerce-growth-2025.jpg";
import lojaFisicaImg from "@/assets/loja-fisica-ecommerce-integracao.jpg";
import carrinhoInsightsImg from "@/assets/carrinho-insights-2025.jpg";
import lojaPropriaImg from "@/assets/loja-propria-vs-marketplaces.jpg";

interface DatabaseArticle {
  id: string; title: string; slug: string; content: string | null; excerpt: string | null;
  status: string | null; category: string | null; featured_image: string | null; created_at: string;
}

interface ApiArticle {
  id: number; title: string; slug: string; status: string; createdAt: string; mainKeyword: string; html: string;
}

interface AirticleResponse { projectId: number; count: number; items: ApiArticle[]; }

const getArticleImage = (slug: string, featuredImage: string | null): string | null => {
  const imageMap: Record<string, string> = {
    'black-friday': blackFridayImg, 'ecommerce-growth': ecommerceGrowthImg,
    'ecommerce-sucesso': ecommerceGrowthImg, 'loja-fisica': lojaFisicaImg,
    'carrinho': carrinhoInsightsImg, 'marketplace': lojaPropriaImg, 'loja-propria': lojaPropriaImg,
  };
  for (const [keyword, image] of Object.entries(imageMap)) {
    if (slug.toLowerCase().includes(keyword)) return image;
  }
  if (featuredImage && featuredImage.startsWith('/')) return featuredImage;
  return null;
};

const BlogSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [articles, setArticles] = useState<(DatabaseArticle | ApiArticle)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data: dbArticles } = await supabase
          .from('articles')
          .select('id, title, slug, content, excerpt, status, category, featured_image, created_at')
          .eq('status', 'Publicado')
          .order('created_at', { ascending: false })
          .limit(3);

        if (dbArticles && dbArticles.length > 0) {
          setArticles(dbArticles);
          setLoading(false);
          return;
        }

        const { data } = await supabase.functions.invoke<AirticleResponse>('airticle-articles', { body: null });
        if (data?.items) {
          setArticles(data.items.filter(a => a.status === 'Publicado').slice(0, 3));
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

  const extractExcerpt = (article: DatabaseArticle | ApiArticle, maxLength = 120) => {
    const text = ('excerpt' in article && article.excerpt) ? article.excerpt
      : ('content' in article && article.content) ? article.content.replace(/<[^>]*>/g, '')
      : ('html' in article && article.html) ? article.html.replace(/<[^>]*>/g, '') : '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const getArticleDate = (article: DatabaseArticle | ApiArticle) => ('created_at' in article) ? article.created_at : ('createdAt' in article) ? article.createdAt : new Date().toISOString();
  const getArticleKeyword = (article: DatabaseArticle | ApiArticle) => ('category' in article && article.category) ? article.category : ('mainKeyword' in article && article.mainKeyword) ? article.mainKeyword : null;
  const getImageForArticle = (article: DatabaseArticle | ApiArticle) => ('featured_image' in article) ? getArticleImage(article.slug, article.featured_image) : getArticleImage(article.slug, null);

  return (
    <section className="py-16 sm:py-24 bg-background" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-body block mb-4">Blog</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Notícias e <span className="text-gradient-gold">Artigos</span>
          </h2>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto mt-4 font-body">
            Fique por dentro das últimas tendências em e-commerce
          </p>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {loading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-gold mb-3" />
              <p className="text-text-muted text-sm font-body">Carregando artigos...</p>
            </div>
          ) : articles.length === 0 ? (
            <Card className="bg-card border-border/50">
              <CardHeader><CardTitle className="font-heading">Blog em Desenvolvimento</CardTitle></CardHeader>
              <CardContent>
                <p className="text-text-body font-body">Estamos preparando conteúdos exclusivos sobre e-commerce para você.</p>
                <div className="flex items-center text-sm text-text-muted mt-4 font-body"><Calendar className="w-4 h-4 mr-1" /><span>Em breve</span></div>
              </CardContent>
            </Card>
          ) : (
            articles.map((article) => {
              const articleImage = getImageForArticle(article);
              return (
                <Link key={article.id} to={`/blog/${article.slug}`} state={{ article }}>
                  <Card className="group bg-card border-border/50 hover:border-gold/20 transition-all duration-500 hover:shadow-glow h-full overflow-hidden">
                    {articleImage && (
                      <div className="relative h-48 overflow-hidden">
                        <img src={articleImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-lg font-bold line-clamp-2 group-hover:text-gold transition-colors font-heading">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-text-body line-clamp-3 text-sm font-body">{extractExcerpt(article)}</p>
                      <div className="flex items-center text-sm text-text-muted font-body"><Calendar className="w-4 h-4 mr-1" /><span>{formatDate(getArticleDate(article))}</span></div>
                      {getArticleKeyword(article) && (
                        <div className="flex items-center gap-2">
                          <Tag className="w-3 h-3 text-gold" />
                          <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-sm font-body">{getArticleKeyword(article)}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              );
            })
          )}
        </div>

        <div className="text-center">
          <InovaaButton size="lg" variant="outline" asChild>
            <Link to="/blog">Acessar Blog</Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
