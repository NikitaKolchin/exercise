import {
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Scatter,
  ScatterChart,
  LabelList,
} from "recharts"
import CustomDot from "./CustomDot"

const Object = (props) => {
  const object = props.object
  const fillData = (data) =>
    data.map((item) => ({
      ...item,
      date: item.date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
      year: item.date.getTime() / 31556952000 + 1970,
    }))

  const dataPlan = fillData(object.dataPlan)
  const dataFact = fillData(object.dataFact)
  return (
    <div style={{display: "flex"}}>
    <div style={{width:"150px", margin:"15px"}}><h2>{object.name}</h2></div>
      <ScatterChart
        width={866}
        height={600}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          tickCount={object.endYear - object.startYear + 1}
          orientation="top"
          type="number"
          dataKey="year"
          domain={[object.startYear, object.endYear]}
        />
        <YAxis hide="true" dataKey="lv" type="number" domain={[0, 4000]} />
        {/* <Tooltip /> */}

        <Scatter
          type="monotone"
          data={dataPlan}
          stroke="#8884d8"
          line={{ stroke: "black", strokeWidth: 2 }}
          shape={<CustomDot />}
        >
          <LabelList dataKey="date" position="top" angle="0" />
        </Scatter>
        <Scatter
          line={{ stroke: "grey", strokeWidth: 2 }}
          data={dataFact}
          stroke="#82ca9d"
          shape={<CustomDot />}
        >
          <LabelList dataKey="date" position="top" angle="0" />
        </Scatter>

        {dataPlan.map((item, index) => (
          <ReferenceLine
            key={index}
            stroke="gray"
            strokeDasharray="3 3"
            segment={[
              { x: item.year, y: item.lv },
              { x: dataFact[index].year, y: dataFact[index].lv },
            ]}
          />
        ))}
      </ScatterChart>
    </div>
  )
}

export default Object
