import React from 'react';

const Table = (props) => {

console.log(props.data)
  return (
      <table>
        <thead>
          <tr>
            <td style={{fontSize: "15px"}}>State</td>
            <td style={{fontSize: "15px"}}>Confirmed</td>
            <td style={{fontSize: "15px"}}>Deaths</td>
            <td style={{fontSize: "15px"}}>Cases last<br/> 28 Days</td>
            <td style={{fontSize: "15px"}}>Deaths last<br/> 28 Days</td>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((itm,ky)=>{
              return(
                <tr>
                  <td style={{whiteSpace: "normal"}}>{itm.provinceState}</td>
                  <td>{itm.confirmed}</td>
                  <td>{itm.deaths}</td>
                  <td>{itm.cases28Days}</td>
                  <td>{itm.deaths28Days}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
  );
};

export default Table;
