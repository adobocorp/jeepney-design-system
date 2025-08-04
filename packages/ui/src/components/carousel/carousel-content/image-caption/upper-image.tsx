export function UpperImage({
  backgroundPosition = "center",
  image = "https://images.pexels.com/photos/133689/pexels-photo-133689.jpeg",
}) {
  return (
    <div
      className="flex justify-center flex-col h-60 w-full bg-no-repeat rounded-sm rounded-b-none"
      style={{ backgroundPosition, backgroundImage: `url(${image})` }}
    ></div>
  );
}
