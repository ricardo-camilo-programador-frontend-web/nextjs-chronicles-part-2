'use client';

import type { FC } from 'react';
import { useState } from 'react';
import DialogModal from "@/components/DialogModal";
import VideoPlayer from "@/components/VideoPlayer";
import type { Videos } from '@/types/Videos';
import { PlayIcon } from '@heroicons/react/24/outline';

interface Props {
  video: Videos | null;
}

const WorkVideoPlayer: FC<Props> = ({ video }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center items-center relative">
      <PlayIcon
        className="w-6 h-6 cursor-pointer scale-150"
        title="Play Video"
        onClick={() => setIsModalOpen(true)}
      >
      </PlayIcon>

      {isModalOpen && video && (
        <DialogModal
          isOpen={isModalOpen}
          showCloseButton={false}
          uniqueId={`${video.name}-${video.id}-work-video-player`}
          close={() => setIsModalOpen(false)}
        >
          <div className="flex flex-col min-w-[50vw] w-full">
            {video.link && (
              <VideoPlayer
                className="rounded-xl w-full h-full"
                src={video.link}
                params={{
                  controls: true,
                  autoplay: true,
                }}
                title={video.name}
              />
            )}
          </div>
        </DialogModal>
      )}
    </div>
  );
};

export default WorkVideoPlayer;
