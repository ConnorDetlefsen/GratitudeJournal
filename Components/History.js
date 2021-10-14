import Card from "../Components/Card";
export default function History({ gratitudes, onDelete }) {
  return (
    <div className="text-white text-6xl p-6">
      <h2 className="font-black">Previous gratitudes: </h2>

      <span className="flex flex-col p-5 items-center">
        {gratitudes.map((g, i) => (
          <div className="p-3 " key={i}>
            <Card gratitude={gratitudes[i]} onDelete={onDelete}></Card>
          </div>
        ))}
      </span>
    </div>
  );
}
