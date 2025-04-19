import React from 'react';

function PuanlamaGorseli() {
  return (
    <div className="flex flex-col items-center w-96">
      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold mr-2">4.8</span>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-yellow-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.176-6.545L.587 6.95 6.95 6.5l3.05-5.878L13.05 6.5l6.363.45-5.878 3.09 1.176 6.545z" />
            </svg>
          ))}
        </div>
        <span className="ml-4 text-gray-500">10869 YORUM</span>
      </div>

      <div className="flex items-center mb-2">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < 5 ? 'text-yellow-500' : 'text-gray-300'} fill-current`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.176-6.545L.587 6.95 6.95 6.5l3.05-5.878L13.05 6.5l6.363.45-5.878 3.09 1.176 6.545z" />
            </svg>
          ))}
        </div>
        <div className="bg-gray-200 h-5 rounded-full w-64 ml-4 relative">
          <div
            className="bg-blue-500 h-5 rounded-full absolute left-0"
            style={{ width: '85%' }}
          ></div>
        </div>
        <span className="ml-2 text-gray-700">(9184)</span>
      </div>

      <div className="flex items-center mb-2">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < 4 ? 'text-yellow-500' : 'text-gray-300'} fill-current`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.176-6.545L.587 6.95 6.95 6.5l3.05-5.878L13.05 6.5l6.363.45-5.878 3.09 1.176 6.545z" />
            </svg>
          ))}
        </div>
        <div className="bg-gray-200 h-5 rounded-full w-64 ml-4 relative">
          <div
            className="bg-blue-500 h-5 rounded-full absolute left-0"
            style={{ width: '12%' }}
          ></div>
        </div>
        <span className="ml-2 text-gray-700">(1316)</span>
      </div>

      <div className="flex items-center mb-2">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < 3 ? 'text-yellow-500' : 'text-gray-300'} fill-current`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.176-6.545L.587 6.95 6.95 6.5l3.05-5.878L13.05 6.5l6.363.45-5.878 3.09 1.176 6.545z" />
            </svg>
          ))}
        </div>
        <div className="bg-gray-200 h-5 rounded-full w-64 ml-4 relative">
          <div
            className="bg-blue-500 h-5 rounded-full absolute left-0"
            style={{ width: '2%' }}
          ></div>
        </div>
        <span className="ml-2 text-gray-700">(226)</span>
      </div>

      <div className="flex items-center mb-2">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < 2 ? 'text-yellow-500' : 'text-gray-300'} fill-current`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.176-6.545L.587 6.95 6.95 6.5l3.05-5.878L13.05 6.5l6.363.45-5.878 3.09 1.176 6.545z" />
            </svg>
          ))}
        </div>
        <div className="bg-gray-200 h-5 rounded-full w-64 ml-4 relative">
          <div
            className="bg-blue-500 h-5 rounded-full absolute left-0"
            style={{ width: '0.3%' }}
          ></div>
        </div>
        <span className="ml-2 text-gray-700">(32)</span>
      </div>

      <div className="flex items-center mb-2">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < 1 ? 'text-yellow-500' : 'text-gray-300'} fill-current`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.176-6.545L.587 6.95 6.95 6.5l3.05-5.878L13.05 6.5l6.363.45-5.878 3.09 1.176 6.545z" />
            </svg>
          ))}
        </div>
        <div className="bg-gray-200 h-5 rounded-full w-64 ml-4 relative">
          <div
            className="bg-blue-500 h-5 rounded-full absolute left-0"
            style={{ width: '0.1%' }}
          ></div>
        </div>
        <span className="ml-2 text-gray-700">(11)</span>
      </div>
    </div>
  );
}

export default PuanlamaGorseli;