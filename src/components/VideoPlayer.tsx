'use client';

import type { FC } from "react";
import { useState, useEffect, useCallback } from "react";

interface Props {
  className?: string;
  src: string;
  params?: Record<string, string | number>;
  title?: string;
}

interface VideoOption {
  reg: RegExp;
  url: string;
  params: Record<string, string | number>;
}

const EmbedVimeo: FC<Props> = ({ className, src, params = {}, title }) => {
  const [valid, setValid] = useState(false);
  const [url, setUrl] = useState("");

  const videoLinkIsValid = useCallback(() => {
    const videoOptions: VideoOption[] = [
      {
        reg: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/i,
        url: "https://www.youtube.com/embed/$5",
        params: {
          "picture-in-picture": 1,
          accelerometer: 1,
          gyroscope: 1,
        },
      },
      {
        reg: /^.*vimeo.com\/(\d+)($|\/|\b)/i,
        url: "https://player.vimeo.com/video/$1",
        params: {
          title: 0,
          byline: 0,
          portrait: 0,
        },
      },
      {
        reg: /^.*(?:\/video|dai.ly)\/([A-Za-z0-9]+)([^#\&\?]*).*/i,
        url: "https://www.dailymotion.com/embed/video/$1",
        params: {
          autoplay: 0,
        },
      },
      {
        reg: /^.*coub.com\/(?:embed|view)\/([A-Za-z0-9]+)([^#\&\?]*).*/i,
        url: "https://coub.com/embed/$1",
        params: {
          autoplay: 0,
        },
      },
    ];

    if (src) {
      for (const option of videoOptions) {
        const video = option;
        const userVideoLink = video.reg.exec(src);

        if (userVideoLink) {
          const combinedParams = { ...video.params, ...params };
          const query = Object.keys(combinedParams)
            .map((key) => key + "=" + combinedParams[key])
            .join("&");
          const and = video.url.indexOf("?") >= 0 ? "&" : "?";
          setUrl(src.replace(video.reg, video.url) + and + query);
          setValid(true);
          return;
        }
      }
    }
    setValid(false);
  }, [src, params]);

  useEffect(() => {
    videoLinkIsValid();
  }, [src, videoLinkIsValid]);

  return valid ? (
    <div
      id="video-embed"
      className={`flex h-full my-12 w-full py-0 overflow-hidden ${className}`}
    >
      <iframe
        className="h-full border-0 min-h-96 w-full top-0 left-0 aspect-video overflow-hidden"
        loading="lazy"
        sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation allow-popups"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        src={url}
      />
    </div>
  ) : (
    <div className="flex h-full my-12 w-full py-0 overflow-hidden">
      <div className="h-full border-0 min-h-96 w-full top-0 left-0 aspect-video overflow-hidden">
        <div className="flex items-center justify-center h-full text-2xl text-gray-500">
          <span>Invalid video link</span>
        </div>
      </div>
    </div>
  );
};

export default EmbedVimeo;
