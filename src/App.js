import React from 'react';

function App() {
  return (
    <div className="h-screen flex flex-col bg-blue-950 relative overflow-hidden">
      <header className="flex items-center justify-between p-4" style={{ borderBottom: '1px solid white',zIndex: 1 }}>

      <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'NewRocker', }}>
          Webpage
        </h1>
        {/* Nav Buttons */}
        <nav className="flex space-x-4">
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4">Home</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4">Products</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4">About</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4">Blog</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4">Contact</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4">Support</button>
        </nav>
        {/* Logo */}
        <img
  src={require('./accets/my-logo.png')}
  alt="Website Logo"
  className="w-10 h-10 rounded-full"
/>
      </header>
      {/* Main content/Body */}
      <main className="flex-1 flex flex-col items-center justify-center">
        
      <div style={{ position: 'relative', zIndex: 2 }}>
  <h2 className="text-white text-2xl font-bold mb-6">Select Your Card</h2></div>
        {/* 1st Line Buttons */}
        <div className="flex space-x-4 mb-4" style={{ zIndex: 2 }}>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4 rounded border border-white">User Stories</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4 rounded border border-white">Roadmaps</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4 rounded border border-white">Storyboards</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4 rounded border border-white">Workflow Diagrams</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4 rounded border border-white">Data Dashboards</button>
        </div>
        {/* 2nd Line Buttons */}
        <div className="flex space-x-4" style={{zIndex:2}}>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4 rounded border border-white">Task and Priority Lists</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4 rounded border border-white">Maps and Personas</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4 rounded border border-white">Test and Validation Plans</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4 rounded border border-white">Charts User</button>
          <button className="text-white hover:text-pink-500 font-bold py-2 px-4 rounded border border-white">Documentations</button>
        </div>
        {/* Submit/Next Button */}
        <button className="bg-pink-800 text-white hover:bg-pink-600 font-bold py-2 px-6 rounded border border-white" style={{ marginTop: '20px' }}>
        NEXT
      </button>
       {/* Circular Div 1 left side */}
        <div
          style={{
            position: 'absolute',
            left: '-55px',
            top: '3%',
            transform: 'translateY(-40%)',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.010)',
            backdropFilter: 'blur(5px)',
            zIndex: 0,
          }}
        ></div>
        {/* Circular Div 2 bottom side */}
        <div
          style={{
            position: 'absolute',
            left: '650px',
            bottom: '-55%',
            transform: 'translateY(-40%)',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.010)',
            backdropFilter: 'blur(5px)',
            zIndex: 0,
          }}
          ></div>
          {/* Circular Div 3 right side */}
        <div
        style={{
          position: 'absolute',
          left: '80%',
          bottom: '44%',
          transform: 'translateY(-40%)',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.010)',
          backdropFilter: 'blur(5px)',
          zIndex: 0,
        }}
        
      ></div>
      <div      // circular div only borders top side
  style={{
    position: 'absolute',
    left: '39%',
    bottom: '13.55%',
    transform: 'translateY(-40%)',
    width: '550px',
    height: '550px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 255, 255,0.3)',
    // backdropFilter: 'blur(5px)',
    zIndex: 0,
  }}
></div>
<div        // circular div only borders top side
  style={{
    position: 'absolute',
    left: '65%',
    bottom: '-59%',
    transform: 'translateY(-40%)',
    width: '550px',
    height: '550px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 255, 255,0.3)',
    // backdropFilter: 'blur(5px)',
    zIndex: 1,
  }}
></div>

      </main>
    </div> // clossing tag of whole page div
  );
}

export default App;
