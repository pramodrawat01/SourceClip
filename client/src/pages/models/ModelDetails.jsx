import { useParams } from "react-router-dom";

export default function ModelDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen px-6 pt-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-sm text-black/40">
          Model
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight">
          {id}
        </h1>
      </div>
    </div>
  );
}