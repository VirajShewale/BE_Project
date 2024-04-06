import React from "react";

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Viraj Shewale",
      rollNo: "63",
    },
    {
      id: 2,
      name: "Prasad Sutar",
      rollNo: "68",
    },
    {
      id: 3,
      name: "Vinit Kawachale",
      rollNo: "30",
    },
  ];

  return (
    <div id="team-members" className="bg-[#1c1c24] p-4 mb-8">
      <h2 className="text-white font-bold text-center text-5xl mb-7 overflow-hidden">
        Meet Team Members
      </h2>
      <div className="flex flex-wrap justify-center gap-16">
        {teamMembers.map((teamMember) => (
          <div
            key={teamMember.id}
            className="max-w-sm rounded p-2 overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-105"
          >

            <div className="p-4">
              <div className="text-gray-700 text-lg font-bold mb-2">Name : {teamMember.name}</div>
              <hr />
              <p className="text-gray-700 text-base">
                Roll No : {teamMember.rollNo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
