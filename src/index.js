import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";

function ncards(val) {
  return (
    <>
      <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link} />

    </>
  )
}

ReactDOM.render(<>
  <h1 className="heading_style">List of Top 6 NetFlix series</h1>

  {Sdata.map(ncards)}

</>, document.getElementById("root")
)