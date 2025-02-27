import CountdownTimer from "../../../components/ui/countDown";

const TimerContainer: React.FC = () => {
  const endTime = "2025-03-31T18:00:00"; // Example: February 10, 2025, 6:00 PM

  return (
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-2xl  font-mono mb-4">Project Deadline</h1>
      <p className="mb-2">
        {/* Countdown ends at: {new Date(endTime).toLocaleString()} */}
      </p>
      <CountdownTimer endTime={endTime} />
    </div>
  );
};

export default TimerContainer;
