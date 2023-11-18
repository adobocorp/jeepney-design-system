type VideoPlayerProps = {
  height: number;
  width: number;
  src: string;
  trackSrc: string;
};

export function VideoPlayer({
  height,
  width,
  src,
  trackSrc,
}: VideoPlayerProps) {
  return (
    <video width={width} height={height} muted controls>
      <source src={src} type="video/mp4"></source>
      <track kind="captions" src={trackSrc} />
    </video>
  );
}
