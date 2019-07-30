import React from "react";
import { MDBBtn, MDBContainer } from "mdbreact";

const BadgePage = props => {
return (
<MDBContainer>
    <br/>
  <h3>Pengumuman <MDBBtn color="danger" href="/berita">NEW</MDBBtn>
  </h3><br/>
</MDBContainer>
);
};

export default BadgePage;