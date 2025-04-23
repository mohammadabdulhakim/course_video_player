import { Clock, Eye, Globe, LibraryBig, SquareUserRound } from "lucide-react";
import React from "react";

const CourseMaterials = () => {
  return (
    <div className="course-materials flex flex-col gap-4 items-start">
      <h2 className="text-2xl font-semibold mb-3">Course Materials</h2>

      <div className="w-full bg-white border-1 drop-shadow-xl hover:drop-shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
        <div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <SquareUserRound className="text-secondary-foreground" size={20} />
              <p className="text-md">Instructor:</p>
            </div>
            <div className="flex gap-1 items-center text-md font-light">Ahmed Ali</div>
          </div>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Clock className="text-secondary-foreground" size={20} />
              <p className="text-md">Duration:</p>
            </div>
            <div className="flex gap-1 items-center text-md font-light">3 Weeks</div>
          </div>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <LibraryBig className="text-secondary-foreground" size={20} />
              <p className="text-md">Lessons:</p>
            </div>
            <div className="flex gap-1 items-center text-md font-light">8</div>
          </div>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Eye className="text-secondary-foreground" size={20} />
              <p className="text-md">Enrolled:</p>
            </div>
            <div className="flex gap-1 items-center text-md font-light">65 Students</div>
          </div>
          <hr className="my-2" />
        </div>
        <div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Globe className="text-secondary-foreground" size={20} />
              <p className="text-md">Language:</p>
            </div>
            <div className="flex gap-1 items-center text-md font-light">Arabic</div>
          </div>
          <hr className="my-2" />
        </div>
      </div>
    </div>
  );
};

export default CourseMaterials;
