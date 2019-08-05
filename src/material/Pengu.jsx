import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBContainer, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import p1 from './img/p1.jpg';
import p2 from './img/p2.jpg';
import p3 from './img/p3.jpg';

class CardExample extends Component {
  render() {
    return (
        <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={p2} />
            <MDBCardBody cascade>
              <MDBCardTitle>Pemenang Lomba</MDBCardTitle>
              <MDBCardText>Pengumuman Pemenang Lomba Kreasi Poster Anti Narkoba 2018</MDBCardText>
              <MDBBtn color="danger" href='/berita'>Selengkapnya</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={p3} />
            <MDBCardBody cascade>
              <MDBCardTitle>Nominator Juara Lomba</MDBCardTitle>
              <MDBCardText>Daftar Nominator Juara Lomba Kreasi Poster Anti Narkoba DIY 2018</MDBCardText>
              <MDBBtn color="danger" href='/berita'>Selengkapnya</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={p1} />
            <MDBCardBody cascade>
              <MDBCardTitle>Lomba Poster</MDBCardTitle>
              <MDBCardText>Lomba Kreasi Poster Anti Narkoba DIY 2018 untuk kalangan Pelajar SMA/SMK sederajat</MDBCardText>
              <MDBBtn color="danger" href='/berita'>Selengkapnya</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
    )
  }
}

export default CardExample;