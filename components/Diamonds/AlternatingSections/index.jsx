
import Image from "next/image";

const AlternatingSections = ({ sections }) => {
  return (
    <section className="py-8 bg-white">
        <div className="container">
            <div className="px-0 lg:px-[50px]">
                {sections.map(({ title, description, image, reverse }, idx) => (
                    <div
                    key={idx}
                    className={`flex flex-col md:flex-row items-center gap-8 lg:gap-x-16 ${
                        reverse ? "md:flex-row-reverse" : ""
                    }`}
                    >
                    {/* Text */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-2xl md:text-3xl text-gray-800">{title}</h2>
                        <p className="text-base text-gray-600 leading-relaxed">{description}</p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 mb-10 lg:mb-0">
                        <Image
                        src={image}
                        alt={title}
                        className="rounded-xl shadow-md"
                        placeholder="blur"
                        />
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default AlternatingSections;
