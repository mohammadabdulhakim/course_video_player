import React from 'react'
import CourseProgress from './CourseProgress'
import TopicCard from './TopicCard'
import useTopicsStore from '@/store/useTopicsStore';

const Topics = () => {
  const {topics} = useTopicsStore();

  return (
    <div className='course-topics flex items-start flex-col gap-10 '>
        <h2 className='text-2xl font-semibold'>
            Topics for This Course
        </h2>
        <CourseProgress progress={60} />

        {
          topics.map((oneTopic)=>(
            <TopicCard key={crypto.randomUUID()} topic={oneTopic} />
          ))
        }
    </div>
  )
}

export default Topics