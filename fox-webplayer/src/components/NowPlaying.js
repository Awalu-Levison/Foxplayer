import React from 'react';

/** A
 * 
 A  function that display music controls
 shows the current music at designated position
 */
const NowPlaying = () => {
    return (
      <div className="now-playing">
        <p>Currently Playing: Song Title</p>
        <div className="controls">
          <button>⏮</button>
          <button>▶</button>
          <button>⏭</button>
        </div>
      </div>
    );
  };
  
  export default NowPlaying;
