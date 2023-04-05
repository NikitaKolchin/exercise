import CustomDot from "./CustomDot"
const Legend = () => {
  return (
    <div style={{display: "flex", maxWidth:"1200px", margin:"20px", justifyContent:"space-between"}}> 
      <div style={{display: "flex", alignItems:"center"}}>
        <svg width={30} height={30}>
          {" "}
          <CustomDot cx={15} cy={15} status={"green"} />
        </svg>{" "}
        <span> - Пройденные вехи в срок </span>
      </div>
      <div style={{display: "flex", alignItems:"center"}}>
        <svg width={30} height={30}>
          <CustomDot cx={15} cy={15} status={"red"} />{" "}
        </svg>{" "}
        <span> - Срыв</span>
      </div>
      <div style={{display: "flex", alignItems:"center"}}>
        <svg width={30} height={30}>
          <CustomDot cx={15} cy={15} status={"blue"} />
        </svg>{" "}
        <span> - Дата, согласно контрактного графика</span>
      </div>
      <div style={{display: "flex", alignItems:"center"}}>
        <svg width={30} height={30}>
          {" "}
          <CustomDot cx={15} cy={15} status={"grey"} />
        </svg>{" "}
        <span> - Прогноз</span>
      </div>
    </div>
  )
}

export default Legend
