const CustomDot = (props) => {
  const { cx, cy, status, name } = props
  return (
    <>
      <polygon
        points={`${cx} ${cy - 10}, ${cx + 10} ${cy}, ${cx} ${cy + 10}, ${cx - 10} ${cy}`}
        fill={status}
        stroke="black"
        strokeWidth={3}
      />
      <text x={cx} y={cy + 50} stroke="black">
        {name}
      </text>
    </>
  )
}

export default CustomDot
