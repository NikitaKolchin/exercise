import CustomDot from "./CustomDot"
const Legend = () => {
  return (
    <div style={{display: "flex", width:"1200px", margin: "auto", marginBottom:"120px", justifyContent:"space-between"}}> 
      <div>
        <svg width={50}>
          {" "}
          <CustomDot cx={20} cy={130} status={"green"} />
        </svg>{" "}
        <span>Пройденные вехи в срок </span>
      </div>
      <div>
        <svg width={50}>
          <CustomDot cx={20} cy={130} status={"red"} />{" "}
        </svg>{" "}
        <span>Срыв</span>
      </div>
      <div>
        <svg width={50}>
          <CustomDot cx={20} cy={130} status={"blue"} />
        </svg>{" "}
        <span>Дата, согласно контрактного графика</span>
      </div>
      <div>
        <svg width={50}>
          {" "}
          <CustomDot cx={20} cy={130} status={"grey"} />
        </svg>{" "}
        <span>Прогноз</span>
      </div>
    </div>
  )
}

export default Legend
