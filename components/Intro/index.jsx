

export default function Intro({ heading, paragraphs, pProps }) {
  return (
    <section className="bg-white py-8">
        <div className="container">
            <div className="px-0 lg:px-[50px]">
                <div className="max-w-5xl mx-auto md:text-center space-y-6">
                    {heading && (
                    <h2 className="text-base font-bold leading-tight">
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
