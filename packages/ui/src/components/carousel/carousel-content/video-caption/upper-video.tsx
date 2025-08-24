export function UpperVideo({
  backgroundPosition = "center center",
  video = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
}) {
  return (
    <div className="flex justify-center flex-col h-60 w-full bg-no-repeat rounded-sm rounded-b-none">
      <video
        className="object-cover w-full h-full"
        style={{ objectPosition: backgroundPosition }}
        controls
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
