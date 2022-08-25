import { education } from '@/data/config';

export default function Education() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {education.title}
        </h2>
      </div>
      <div className="flex flex-col justify-between">
        {education.schools.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 border border-lightText rounded-xl mb-4"
            >
              <h3>{item.name}</h3>
              <p className="font-bold">{item.degree}</p>
              <p className="italic">
                {item.start}-{item.end}
              </p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
