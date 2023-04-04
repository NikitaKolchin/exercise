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
        {/* <polygon points="10 0, 20 10, 10 20, 0 10" /> */}
        <text x={cx} y={cy + 50} stroke="black">
          {name}
        </text>
       
      </>
    )
  }

export default CustomDot