'use client';

import { useState } from 'react';

export default function VideoPlayer() {
  const [play, setPlay] = useState(false);

  const FILE_ID = '1uNKuKJtSRIwIF8Uw7xPbvY2iUAAsGXQb'

  return (
    <div className="w-full h-[450px] rounded-xl relative overflow-hidden">
      {!play && (
        <img
          src="/fisher_1.png"
          alt="Video thumbnail"
          className="w-full h-full object-cover rounded-xl cursor-pointer"
          onClick={() => setPlay(true)}
        />
      )}

      {play && (
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://drive.google.com/file/d/${FILE_ID}/preview?autoplay=0`}
        
          allow="autoplay"
        />
      )}
    </div>
  );
}
