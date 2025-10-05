"use client"

export const EducationSection = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        {/* BSS in Political Science */}
        <div className="flex items-center space-x-4">
          <p className="text-[10px] flex justify-center items-center bg-indigo-900/40 px-2 py-2.5 rounded-full">BSS</p>
          <div>
            <p className="font-medium">University: Bikrampur Adarsa University .
              <span className="text-sm text-gray-400"> (BSS. in political-science ,under National University)</span>
            </p>
          </div>
        </div>
        
        
        {/* University: Bikrampur Adarsa University */}
        <div className="flex items-center space-x-4">
          <p className="text-[12px] bg-indigo-900/40 p-2.5 rounded-full">BU</p>
          <div>
            <p className="font-medium">College : Bikrampur Adarsa University College .</p>
            <p className="text-sm text-gray-400">(Humanities)</p>
          </div>
        </div>
        {/* High School: Adarsa High School College */}
        <div className="flex items-center space-x-4">
            <p className="text-[12px] bg-indigo-900/40 p-2.5 rounded-full font-">AH</p>
          <div>
            <p className="font-">High School: Adarsa High School.</p>
            <p className="text-sm text-gray-400">Kuchiamora ,Munshigonj</p>
          </div>
        </div>
      </div>
    </div>
  );
};