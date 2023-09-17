import { BarLoader } from "react-spinners";

function Loading() {
  return (
    <div style={{ overflow: "hidden" }}>
      <BarLoader color={"#36D7B7"} loading={true} width={10000} />
    </div>
  );
}
export default Loading;
