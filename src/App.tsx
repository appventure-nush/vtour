import React, { useState } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

const App: React.FC = () => {
  const [unityContent] = useState(new UnityContent(
    "build/Builds.json",
    "build/UnityLoader.js"
  ));

  return (
    <div style={{height: '100vh'}}>
      <Unity unityContent={unityContent} />
    </div>
  );
};

export default App;
