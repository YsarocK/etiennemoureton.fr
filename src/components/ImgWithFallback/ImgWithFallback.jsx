const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  alt,
  customClass
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img class={customClass} src={fallback} alt={alt}/>
    </picture>
  );
};

export default ImgWithFallback