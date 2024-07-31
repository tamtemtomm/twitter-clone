import "./../App.css";

export interface IconType {
  element: string;
  width: string;
  text: string;
  scale: string;
}

const Icon = (props: IconType) => {
  return (
    <div className="svg-container hover-click" style={{ width: props.width }}>
      <img
        src={props.element}
        alt={props.text}
        style={{ scale: props.scale, float: "left", fill:"red"}}
      />
    </div>
  );
};

export default Icon;
