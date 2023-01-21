import "./disabled.css";
const Disabled = ({ setisdisabled, isdisabled }) => {
  return (
    <button
      className="disable-btn"
      style={{ backgroundColor: isdisabled ? "red" : "green" }}
      onClick={() => setisdisabled(!isdisabled)}
    >
      {isdisabled ? "Enable" : "Disable"}
    </button>
  );
};
export default Disabled;
