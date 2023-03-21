export const DaysLi = (props) => {
  const active = props.active

  return <li className={`${props.inactive} ${props.active} cursor-pointer mt-7 relative z-[1] before:absolute before:content-[''] before:h-10 before:w-10 before:top-1/2 before:left-1/2 before:rounded-full before:-z-[1] hover:before:bg-[#f2f2f2]`}>{props.view}</li>
}