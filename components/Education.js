import { education } from '@/data/config';

export default function Education() {
    return (
      <div className="">
        <div className="overflow-x-hidden w-full">
          <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
            {education.title}
          </h2>
        </div>
        {/* education school items card map through here */}
        <div className="flex flex-vertical-center flex-wrap overflow-x-hidden w-full">
            {education.schools.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="p-6 border border-lightText rounded-xl mb-4"
                    >
                        <h3>{item.name}</h3>
                        <p>{item.degree}</p>
                        <p>{item.start}-{item.end}</p>
                        <p>{item.description}</p>
                    </div>
                );
            }
            )}
        </div>
      </div>
    );
  }