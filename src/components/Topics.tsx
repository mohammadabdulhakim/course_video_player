import React from 'react'
import CourseProgress from './CourseProgress'
import { topics } from '@/data/dummy'
import TopicCard from './TopicCard'

const Topics = () => {
  return (
    <div className='flex-1 flex items-start flex-col gap-10 '>
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