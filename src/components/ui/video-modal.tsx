"use client";

import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface VideoModalProps {
  videoId: string;
  children: React.ReactNode;
}

export function VideoModal({ videoId, children }: VideoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl p-0 bg-black overflow-hidden border-none shadow-2xl">
        <DialogTitle className="sr-only">Video Player</DialogTitle>
        <DialogDescription className="sr-only">
          Youtube video player showcasing Miss U Gram features
        </DialogDescription>
        
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Miss U Gram Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
