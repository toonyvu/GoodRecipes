import type { itemProps } from "../Types/Recipe";

export default function Item({ food }: itemProps) {
  const steps = food.analyzedInstructions?.[0]?.steps ?? [];
  console.log(steps);
  return (
    <div className="w-[98%] border-6 border-green-500 mt-4 p-2 place-self-center">
      <h1 className="text-4xl font-bold">{food.title}</h1>
      <img className="rounded-2xl mt-2" src={food.image}></img>
      <div className="mt-4 mb-4">
        <h1 className="font-bold text-2xl">INFORMATION: </h1>
        <ul>
          <li>Servings: {food.servings}</li>
          <li>Ready in: {food.readyInMinutes} Minutes</li>
        </ul>
      </div>

      <h1 className="font-bold text-2xl">STEPS: </h1>
      <div>
        {steps.map((step) => (
          <div key={step.number} className="m-4">
            <h1 className="font-bold text-xl">
              Step {step.number}, ingredients:
            </h1>
            <ul>
              {step.ingredients.map((item) => (
                <li
                  className="list-disc ml-6"
                  key={`${step.number}-${item.id}`}
                >
                  <div>
                    <h1>{item.name}</h1>
                  </div>
                </li>
              ))}
            </ul>
            <h1 className="font-bold text-lg">Details</h1>
            <h1>{step.step}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
