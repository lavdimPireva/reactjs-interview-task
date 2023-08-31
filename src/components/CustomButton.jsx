const CustomButton = ({ type, children, onClick, icon, style }) => {
  const commonStyles = {
    height: "32px",
    borderRadius: "5px",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const typeStyles = {
    save: {
      backgroundColor: "#71CF48",
      width: "150px",
    },
    create: {
      backgroundColor: "#71CF48",
      width: "200px",
    },
    delete: {
      backgroundColor: "#FE4C4A",
      width: "150px",
    },
  };

  const lineStyles = {
    height: "30px",
    width: "2px",
    marginRight: "10px",
    marginLeft: "10px",
  };

  const colors = {
    save: "#68C142",
    create: "#68C142",
    delete: "#EB4345",
  };

  return (
    <button
      onClick={onClick}
      style={{ ...commonStyles, ...typeStyles[type], ...style }}
      className="btn text-white"
    >
      <span className="flex-grow-1 text-center">{children}</span>
      <div className="d-flex align-items-center">
        <span style={{ ...lineStyles, backgroundColor: colors[type] }}></span>
        {icon}
      </div>
    </button>
  );
};

export default CustomButton;
