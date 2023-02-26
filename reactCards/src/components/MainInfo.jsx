export const MainInfo = ({ title, text }) => {
  return (
    <div className="main-info">
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
      <button className="button">More info</button>
    </div>
  );
};
