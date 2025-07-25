

export default function Intro({ heading, paragraphs, pProps }) {
  return (
    <section className="bg-white py-16">
        <div className="container">
            <div className="px-0 lg:px-[50px]">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    {heading && (
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        {heading}
                    </h2>
                    )}
                    {paragraphs.map((para, index) => (
              <p key={index} {...pProps}>
                {para}
              </p>
            ))}
                </div>
            </div>
      </div>
    </section>
  );
}
