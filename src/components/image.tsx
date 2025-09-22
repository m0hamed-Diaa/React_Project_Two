interface IProps {
  ImageUrl: string;
  alt: string;
  className: string;
}

const Image = ({ ImageUrl, alt, className }: IProps) => {
  return <img decoding="async" src={ImageUrl} alt={alt} className={className} />
};

export default Image;
