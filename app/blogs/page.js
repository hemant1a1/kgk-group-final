import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb3';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import LatestBlogs from '@/components/LatestBlogs';

import bgImage from '@/assets/images/banners/blog-banner.jpg';

export default async function Blogs() {
  const data = await fetchFromAPI('blogs');

  return (
    <>
      <Breadcrumb
        heading="Blogs"
        bgImage={bgImage}
      />

      {Array.isArray(data.featured_blog) && data.featured_blog.length > 0 && (
        <FeaturedBlogs data={data.featured_blog} />
      )}

      {Array.isArray(data.blogs) && data.blogs.length > 0 && (
        <LatestBlogs data={data.blogs} />
      )}
    </>
  );
}
