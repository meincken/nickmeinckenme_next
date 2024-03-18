const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth={".5rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="45%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1em"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Title = ({ title }) => {
  return (
    <text
      x="50%"
      y="55%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={".85em"}
    >
      {title}
    </text>
  );
};

export const Pie = ({ percentage, colour, title }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="lightgrey" />
        <Circle colour={colour} pct={pct} />
      </g>
      <Text percentage={pct} />
      <Title title={title} />
    </svg>
  );
};
