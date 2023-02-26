export const ImageRender = ({ img }) => {
  if (img) {
    return (
      <div className="img-container">
        <img className="img" src={img} />
      </div>
    );
  }

  return;
};
