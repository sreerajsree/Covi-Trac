import React from 'react';
import { StyledSection, StyledTableSection } from '../Includes/TableSections';
import { MDBIcon, MDBContainer } from 'mdbreact';
import INTable from './INTable';
import { Styles } from '../Includes/TableElements';




const INTableSection = (props) => {
  // console.log(props.data)
  return (
    <MDBContainer>
      <StyledSection>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <h1 className="h1-responsive">India Statistics <MDBIcon icon="chalkboard" /></h1>
        </div>
        <StyledTableSection>
          <Styles>
            <INTable data={props.data} />
          </Styles>
        </StyledTableSection>
      </StyledSection>
    </MDBContainer>
  );
};

export default INTableSection;
