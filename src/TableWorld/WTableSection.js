import React from 'react';
import CountryList from '../CountryList';
import { StyledSection, StyledTableSection } from '../Includes/TableSections';
import { MDBIcon, MDBContainer } from 'mdbreact';




const TableSection = (props) => {
  return (
    <MDBContainer>
      <StyledSection>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <h1 className="h1-responsive">World Statistics <MDBIcon icon="chalkboard" /></h1>
        </div>
        <StyledTableSection>
          <CountryList countries={props.countries} />
        </StyledTableSection>
      </StyledSection>
    </MDBContainer>
  );
};

export default TableSection;
