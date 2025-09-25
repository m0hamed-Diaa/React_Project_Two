
interface IProps {
  color: string,
}

const color = ({color}: IProps) => {
  return (
    <span style={{backgroundColor: color}} className={"w-4 h-4 rounded-full cursor-pointer"}></span>
  )
};

export default color;