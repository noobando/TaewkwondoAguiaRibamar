import React, { useState } from "react";

interface ClassSchedule {
  day: string;
  sessions: {
    time: string;
    className: string;
    level: string;
  }[];
}

const Schedule: React.FC = () => {
  const scheduleData: ClassSchedule[] = [
    {
      day: "Monday",
      sessions: [
        {
          time: "4:00 PM - 5:00 PM",
          className: "Little Tigers",
          level: "Ages 4-7",
        },
        {
          time: "5:15 PM - 6:15 PM",
          className: "Junior Program",
          level: "Ages 8-12",
        },
        {
          time: "6:30 PM - 7:45 PM",
          className: "Adult Program",
          level: "All Levels",
        },
      ],
    },
    {
      day: "Tuesday",
      sessions: [
        {
          time: "4:00 PM - 5:00 PM",
          className: "Little Tigers",
          level: "Ages 4-7",
        },
        {
          time: "5:15 PM - 6:15 PM",
          className: "Teen Program",
          level: "Ages 13-17",
        },
        {
          time: "6:30 PM - 7:45 PM",
          className: "Advanced Training",
          level: "Black Belt",
        },
      ],
    },
    {
      day: "Wednesday",
      sessions: [
        {
          time: "4:00 PM - 5:00 PM",
          className: "Junior Program",
          level: "Ages 8-12",
        },
        {
          time: "5:15 PM - 6:15 PM",
          className: "Little Tigers",
          level: "Ages 4-7",
        },
        {
          time: "6:30 PM - 7:45 PM",
          className: "Adult Program",
          level: "All Levels",
        },
      ],
    },
    {
      day: "Thursday",
      sessions: [
        {
          time: "4:00 PM - 5:00 PM",
          className: "Little Tigers",
          level: "Ages 4-7",
        },
        {
          time: "5:15 PM - 6:15 PM",
          className: "Junior Program",
          level: "Ages 8-12",
        },
        {
          time: "6:30 PM - 7:45 PM",
          className: "Teen Program",
          level: "Ages 13-17",
        },
      ],
    },
    {
      day: "Friday",
      sessions: [
        {
          time: "4:00 PM - 5:00 PM",
          className: "Junior Program",
          level: "Ages 8-12",
        },
        {
          time: "5:15 PM - 6:15 PM",
          className: "Teen Program",
          level: "Ages 13-17",
        },
        {
          time: "6:30 PM - 7:45 PM",
          className: "Adult Program",
          level: "All Levels",
        },
      ],
    },
    {
      day: "Saturday",
      sessions: [
        {
          time: "9:00 AM - 10:00 AM",
          className: "Little Tigers",
          level: "Ages 4-7",
        },
        {
          time: "10:15 AM - 11:30 AM",
          className: "Junior Program",
          level: "Ages 8-12",
        },
        {
          time: "11:45 AM - 1:00 PM",
          className: "Open Training",
          level: "All Levels",
        },
      ],
    },
  ];

  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Class Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect time for your Taekwondo journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Day selector */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {scheduleData.map(({ day }) => (
              <button
                key={day}
                className={`px-4 py-2 rounded-md font-medium transition duration-200 ${
                  activeDay === day
                    ? "bg-red-700 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {scheduleData
                  .find((schedule) => schedule.day === activeDay)
                  ?.sessions.map((session, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition duration-150"
                    >
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">
                        {session.time}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        {session.className}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {session.level}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Want to join our classes or have questions Sobre the schedule?
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
