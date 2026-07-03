import MyDiv3 from "./MyDiv3";

export default function MyDiv2(probs) {
  return (
    <div
      className="flex flex-col p-5 m-10
                        w-3/4 h-3/4
                justify-center items-center
                bg-lime-700 text-white"
    >
      <div className="w-full h-10 flex justify-start items-center">myDiv2</div>
      {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`}
      <MyDiv3 />
    </div>
  );
}
