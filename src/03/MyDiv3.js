export default function MyDiv3(probs) {
  return (
    <div
      className="flex flex-col p-5 m-10
                        w-3/4 h-3/4
                        bg-lime-500
                        text-white"
    >
      MyDiv3
      <div className="w-full h-10 flex justify-center items-center">
        {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
      </div>
    </div>
  );
}
