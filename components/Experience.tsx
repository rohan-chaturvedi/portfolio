const Experience = () => {
  const data = [
    {
      title: "TypeScript",
      subtitle: "4 years experience",
    },
    {
      title: "NextJS/React",
      subtitle: "4 years experience",
    },
    {
      title: "Nuxt/Vue",
      subtitle: "2 years experience",
    },
    {
      title: "Python/Django",
      subtitle: "4 years experience",
    },
    {
      title: "REST/GraphQL",
      subtitle: "4 years experience",
    },
    {
      title: "SCSS/Tailwind",
      subtitle: "4 years experience",
    },
    {
      title: "Serverless Functions",
      subtitle: "3 years experience",
    },
    {
      title: "PostgreSQL",
      subtitle: "4 years experience",
    },
    {
      title: "Docker / Kubernetes",
      subtitle: "4 years experience",
    },
  ];

  return (
    <div className="bg-secondary-dark py-12 px-8">
      <div className="grid justify-items-center sm:justify-items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 text-white max-w-7xl mx-auto">
        <h2 className="text-heading-l md:text-heading-xl font-bold sm:col-span-2 md:col-span-3">
          Skills
        </h2>
        {data.map((item) => (
          <div key={item.title} className="text-center md:text-left">
            <h3 className="text-heading-l">{item.title}</h3>
            <p className="text-body-m font-regular text-primary-lightgray">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
