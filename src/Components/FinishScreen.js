function FinishScreen({ points, totalPoints, highscore, dispatch }) {
  let emoji;
  if (Math.round((points / totalPoints) * 100) >= 80) emoji = "🥇";
  else if (Math.round((points / totalPoints) * 100) >= 60) emoji = "🥈";
  else if (Math.round((points / totalPoints) * 100) >= 40) emoji = "🥉";
  else emoji = "🎉";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {totalPoints} (
        {Math.round((points / totalPoints) * 100)}%)
      </p>
      <p className="highscore">( Highscore: {highscore} points )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
