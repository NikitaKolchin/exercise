import CustomDot from "./CustomDot"
const Legend = () => {
  return (
    <div style={{display: "flex", maxWidth:"1200px", margin:"20px", justifyContent:"space-between", verticalAlign:"center"}}> 
      <div>
        <svg width={20} height={20}>
          {" "}
          <CustomDot cx={0} cy={0} status={"green"} />
        </svg>{" "}
        <span>Пройденные вехи в срок </span>
      </div>
      <div>
        <svg width={20} height={20}>
          <CustomDot cx={0} cy={0} status={"red"} />{" "}
        </svg>{" "}
        <span>Срыв</span>
      </div>
      <div>
        <svg width={20} height={20}>
          <CustomDot cx={0} cy={0} status={"blue"} />
        </svg>{" "}
        <span>Дата, согласно контрактного графика</span>
      </div>
      <div>
        <svg width={20} height={20}>
          {" "}
          <CustomDot cx={0} cy={0} status={"grey"} />
        </svg>{" "}
        <span>Прогноз</span>
      </div>
    </div>
  )
}

export default Legend
