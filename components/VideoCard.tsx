const VideoCard = () => {
  return (
    <iframe
      className="rounded-3xl w-full h-full object-cover min-h-[250px]"
      src="https://www.youtube.com/embed/izbydia9jz4?si=U3bhy48lnCPUvAfq"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default VideoCard;
