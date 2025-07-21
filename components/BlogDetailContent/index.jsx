'use client';

import { motion } from 'framer-motion';
import parse, { domToReact } from 'html-react-parser';

export default function BlogDetailContent({ blog }) {
  if (!blog) return null;

  const options = {
    replace: (domNode) => {
      if (domNode.type === 'tag') {
        const attribs = { ...domNode.attribs };
        if (attribs.class) {
          attribs.className = attribs.class;
          delete attribs.class;
        }

        switch (domNode.name) {
          case 'img':
            return (
              <img
                {...attribs}
                className={`my-6 mx-auto w-full max-w-full h-auto rounded-md ${attribs.className || ''}`}
              />
            );

          case 'p':
            return (
              <p className="text-base leading-7 tracking-normal text-gray-800 mb-6">
                {domToReact(domNode.children, options)}
              </p>
            );

          case 'table':
            return (
              <div className="overflow-auto my-6">
                <table className="min-w-full border border-gray-300 text-sm text-left">
                  {domToReact(domNode.children, options)}
                </table>
              </div>
            );

          case 'thead':
            return (
              <thead className="bg-gray-100">
                {domToReact(domNode.children, options)}
              </thead>
            );

          case 'tbody':
            return (
              <tbody>
                {domToReact(domNode.children, options)}
              </tbody>
            );

          case 'tr':
            return (
              <tr>
                {domToReact(domNode.children, options)}
              </tr>
            );

          case 'th':
            return (
              <th className="border border-gray-300 px-4 py-2 font-semibold bg-gray-50">
                {domToReact(domNode.children, options)}
              </th>
            );

          case 'td':
            return (
              <td className="border border-gray-300 px-4 py-2">
                {domToReact(domNode.children, options)}
              </td>
            );

          default:
            return undefined;
        }
      }
    },
  };

  return (
    <motion.article
      className="prose lg:prose-lg max-w-none font-myriad"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight lg:leading-[1.4] text-heading mb-6">
        {blog.title}
      </h1>

      {/* Description */}
      {blog.description && (
        <p className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-heading mb-6">
          {blog.description}
        </p>
      )}

      {/* Content */}
      {blog.content && (
        <div className="[&>p]:mb-6 [&>img]:rounded-md [&>table]:w-full [&>table]:text-sm">
          {parse(blog.content, options)}
        </div>
      )}
    </motion.article>
  );
}
