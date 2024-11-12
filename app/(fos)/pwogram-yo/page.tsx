import { CourseCardSkeleton } from '@/components/course-loading-page';
import ComingSoonModal from '@/components/dyalog-kou-ap-vini-byento';
import { Skeleton } from '@/components/ui/skeleton';

const CoursePage = () => {
  return (
    <div className='container mx-auto px-4 py-8 lg:mx-10'>
      <ComingSoonModal />
      <Skeleton className='h-12 w-64 mx-auto mb-8 bg-slate-300' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[...Array(6)].map((_, index) => (
          <CourseCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
