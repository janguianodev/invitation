import React from "react";

interface Props {
  slug: string;
}

export const TemplateSkeleton = ({ slug }: Props) => {
  const isNew = slug === "new";

  return (
    <div className="flex flex-col gap-4 h-full">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <div className="h-5 w-10 bg-gray-200 animate-pulse"></div>
            <div className="h-10 bg-gray-200 animate-pulse"></div>
          </div>
        ))}
      {!isNew && (
        <div className="flex flex-col gap-2">
          <div className="h-[200px] w-[200px] bg-gray-200 animate-pulse"></div>
        </div>
      )}
      <div className="h-5 w-16 bg-gray-200 animate-pulse mt-10"></div>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <div className="h-5 w-[250px] bg-gray-200 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};
