import "./Avatar.css";
const Avatar = (props) => {
  return (
    <div
      className={`avatar _${props.className}`}
      style={{ width: `${props.width}rem`, height: `${props.height}rem` }}
      onClick={props.onClick}
    >
      <img
        src={props.src}
        alt={props.alt}
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default Avatar;
