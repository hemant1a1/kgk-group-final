import { fetchFromAPI } from '@/lib/api';

import BlogDetailContent from '@/components/BlogDetailContent';
import BlogSidebar from '@/components/BlogSidebar';

import Image from 'next/image';
import blog1 from '@/assets/images/blog-details.jpg';

// ✅ Fix: Correctly handle the API response structure
export async function generateStaticParams() {
  const res = await fetchFromAPI('blogs');
  const blogs = Array.isArray(res?.blogs) ? res.blogs : [];

  return blogs.map((item) => ({ slug: item.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;

  const data = await fetchFromAPI(`blogs/${slug}`);

  // ✅ 404 fallback if data not found
  if (!data || !data.blog) {
    return <div className="text-center py-20 text-xl">Blog not found</div>;
  }

  return (
    <>
      <img
        src={data.blog.image || blog1}
        alt={data.blog.title}
        className="w-full min-h-96 h-auto object-cover object-top mb-8"
        width={1200}
        height={500}
      />
      <div className="container">
        <div className="px-0 lg:px-[50px] pt-8 pb-16">
          <div className="flex flex-col lg:flex-row gap-x-32 gap-y-10">
            <div className="md:w-9/12">
              <BlogDetailContent blog={data.blog} />
            </div>
            <div className="md:w-3/12">
              <BlogSidebar
                popularPosts={data.popular_posts}
                categories={data.categories}
                tags={data.tags}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
