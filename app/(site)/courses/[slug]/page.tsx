'use client';
import { useParams } from 'next/navigation';
import dynamicCourseDetails from '@/components/Website/Certifications/Details/DetailsData';

const CourseDetails = () => {
  const params = useParams();
  const slug = params?.slug as string;

  if (!slug || typeof slug !== 'string') return <p>Loading...</p>;

  const course = dynamicCourseDetails[slug];

  if (!course) return <p>Course not found</p>;

  return (
    <>
      <main>
        <div className="mt-[2rem] max-w-4xl  mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <img src={course.image} alt={course.title} className="w-full mb-4 rounded-md" />
          <h2 className="text-3xl font-bold mb-6 text-black">Overview</h2>
          <p className="mt-4 mb-10 leading-loose tracking-wide">
            {course.overview}
          </p>

          <h2 className="text-3xl font-bold mb-2 text-black">Benefits of Certification</h2>
          <ul className="list-disc pl-6 mb- gap-8">
            {course.benefits.map((benefit, index) => (
              <li className='mb-4' key={index}>{benefit}</li>
            ))}
          </ul>

        </div>
      </main>
    </>

  );
};

export default CourseDetails;
