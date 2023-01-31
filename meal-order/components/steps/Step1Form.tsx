import { MealType } from "@/shared/types";
import { ReactNode } from "react";

const MealTypeButton = ({
  isSelected = false,
  children,
  onClick,
}: {
  isSelected?: boolean;
  children: ReactNode;
  onClick?: () => void;
}) => {
  let className = "mx-1 p-2 text-lg font-bold";
  if (isSelected) {
    className = "bg-blue-400 text-white mx-1 p-2 text-lg font-bold rounded-xl";
  }
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const MealTypeGroupButton = ({
  selectedMealType,
  onMealTypeSelected,
}: {
  selectedMealType: MealType;
  onMealTypeSelected: (mealType: MealType) => void;
}) => {
  return (
    <>
      <MealTypeButton
        onClick={() => onMealTypeSelected("breakfast")}
        isSelected={selectedMealType === "breakfast"}
      >
        Breakfast
      </MealTypeButton>
      <MealTypeButton
        onClick={() => onMealTypeSelected("lunch")}
        isSelected={selectedMealType === "lunch"}
      >
        Lunch
      </MealTypeButton>
      <MealTypeButton
        onClick={() => onMealTypeSelected("dinner")}
        isSelected={selectedMealType === "dinner"}
      >
        Dinner
      </MealTypeButton>
    </>
  );
};

export default function Step1Form({
  onMealTypeSelected,
  selectedMealType = "breakfast",
}: {
  onMealTypeSelected: (mealType: MealType) => void;
  selectedMealType?: MealType;
}) {
  return (
    <>
      <h2 className="text-lg mt-4">Select a meal:</h2>
      <div className="flex flex-row justify-center">
        <MealTypeGroupButton
          selectedMealType={selectedMealType}
          onMealTypeSelected={onMealTypeSelected}
        />
      </div>
      <h2 className="text-lg mt-4">Number of people:</h2>
      <div>
        <input
          className="border border-solid border-blue-400 rounded text-center"
          type="number"
          min="1"
          max="10"
          placeholder="1"
        />
      </div>
    </>
  );
}
