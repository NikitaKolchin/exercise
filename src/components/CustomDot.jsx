const CustomDot = (props) => {
    const { cx, cy, status, name } = props
    return (
      <>

        <rect
          x={cx}
          y={cy}
          width={20}
          height={20}
          stroke="black"
          strokeWidth={3}
          fill={status}
        />
        <text x={cx} y={cy + 50} stroke="black">
          {name}
        </text>
       
      </>
    )
  }

export default CustomDot