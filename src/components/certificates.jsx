import certificate1 from "../assets/certificate.jpg";
import certificate2 from "../assets/crtfct.png";


const Certificates = () => {
  return (
    <div className="certificates">
        <h1>Certificates</h1>
      <div className="certificates-images">
      <a href={certificate1} target="_blank" rel="noreferrer" ><img src={certificate1} alt="" /></a>
        <a href={certificate2} target="_blank" rel="noreferrer"> <img src={certificate2} alt="" /></a>
       
      </div>
    </div>
  );
};

export default Certificates;
