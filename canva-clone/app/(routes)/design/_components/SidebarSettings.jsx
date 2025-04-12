import React from 'react'

function SidebarSettings({ selectedOption }) {
  if (!selectedOption) return null;

  return (
    <div className="w-[280px] p-5 h-screen border-r">
      <h1 className="text-lg font-bold">{selectedOption.name}</h1>
      <p className="text-sm text-gray-600 mt-2">{selectedOption.desc}</p>
    </div>
  );
}

export default SidebarSettings;
