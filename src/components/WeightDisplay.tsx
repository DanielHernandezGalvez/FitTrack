interface WeightDisplayProps {
    currentWeight: number;
    previousWeight: number | null;
}

const WeightDisplay: React.FC<WeightDisplayProps> = ({currentWeight, previousWeight}) => {
     return (
        <>
            <div className="py-5 px-3 text-center">
                <h1 className="text-stone-700 text-4xl font-bold">Peso actual: <span  className="text-stone-900 text-5xl">{currentWeight}</span>kg</h1>
                {previousWeight && <p className="text-stone-700 text-lg text-center">Peso anterior: {previousWeight}kg, has perdido <span className="text-stone-900 font-bold text-2xl">{  previousWeight - currentWeight }</span>kg</p>}
            </div>
        </>
     )
    }

export default WeightDisplay;