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
    <>
      <PlayIcon
        className="w-4 h-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
      </PlayIcon>

      {isModalOpen && video && (
        <DialogModal
          isOpen={isModalOpen}
          uniqueId={`${video.name}-${video.id}-work-video-player`}
          className="rounded-xl absolute bg-white"
          close={() => setIsModalOpen(false)}
        >
          <div className="flex flex-col min-w-[50vw] w-full">
            {video.link && (
              <VideoPlayer
                className="rounded-xl w-full h-full"
                src={video.link}
                params={{
                  controls: true,
                  autoplay: false,
                }}
                title={video.name}
              />
            )}
          </div>
        </DialogModal>
      )}
    </>
  );
};

export default WorkVideoPlayer;
