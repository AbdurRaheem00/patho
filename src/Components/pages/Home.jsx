import React from "react";
import "./Home.css";
import UsedbyCard from "./UsedbyCard";
import Vrcard from "../Vrcard";
import ImageWithText from "../ImageWithText";
import Footer from "../Footer";
const Home = () => {
  return (
    <div className="home">
      <div className="homecontainer">
        <h1 className="text1 text-7xl font-bold">Garuda.Metaverse</h1>
        <h1 className="text2 text-3xl font-normal text-balance">
          Labaratory as a metaverse platform for the healthcare community where
          users can immerse themselves in the study of medical science.
        </h1>

        <div className="twobtn">
          <button className="btn">Connect wallet</button>
        </div>
        <div className="twod">
          <div className="download">
            <img src="src\assets\img\meta.png" className="oculuslogo"></img>
            <p className="ptag">
              Download on <br /> Oculus store
            </p>
          </div>
          <div className="dashboard">
            <img
              src="src\assets\img\physiology.png"
              className="oculuslogo"
            ></img>
            <p className="ptag">
              Try Our
              <br /> Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* used by container */}

      <div className=" my-16  py-10">
        <div className="title ml-[40px] flex gap-2">
          <div className="w-[6px] h-12 bg-[#007FF8]"></div>
          <h1 className="text-5xl font-bold mb-12  ">Used By</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <UsedbyCard
            title={"Doctors"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat cursus nisl, sit amet consectetur quam tincidunt quis. Curabitur in mi quis enim volutpat interdum sit amet non turpis. Aenean rhoncus tellus et risus mattis efficitur. Praesent at elementum sem. Pellentesque varius nec turpis vitae"
            }
          />
          <UsedbyCard
            title={"Doctors"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat cursus nisl, sit amet consectetur quam tincidunt quis. Curabitur in mi quis enim volutpat interdum sit amet non turpis. Aenean rhoncus tellus et risus mattis efficitur. Praesent at elementum sem. Pellentesque varius nec turpis vitae"
            }
          />
          <UsedbyCard
            title={"Doctors"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat cursus nisl, sit amet consectetur quam tincidunt quis. Curabitur in mi quis enim volutpat interdum sit amet non turpis. Aenean rhoncus tellus et risus mattis efficitur. Praesent at elementum sem. Pellentesque varius nec turpis vitae"
            }
          />
          <UsedbyCard
            title={"Doctors"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat cursus nisl, sit amet consectetur quam tincidunt quis. Curabitur in mi quis enim volutpat interdum sit amet non turpis. Aenean rhoncus tellus et risus mattis efficitur. Praesent at elementum sem. Pellentesque varius nec turpis vitae"
            }
          />
        </div>
      </div>

      {/* virtual reality section */}
      <div className="my-16  py-10">
        <div className="title ml-[40px] flex gap-2">
          <div className="w-[6px] h-12 bg-[#007FF8]"></div>
          <h1 className="text-5xl font-bold mb-12">Garuda Virtual Reality</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Vrcard
            img={
              "https://i.ibb.co/CQbshkf/man-with-vr-headset-touching-holographic-screen.jpg"
            }
            title={"Anatomy"}
          />
          <Vrcard
            title={"Pathology"}
            desc={""}
            img={"https://i.ibb.co/5j4RwyC/5633.jpg"}
          />
          <Vrcard
            title={"Automobile"}
            desc={""}
            img={"https://i.ibb.co/5j4RwyC/5633.jpg"}
          />
        </div>
      </div>
      {/* vr-image(left) text-right*/}
      <div className="my-16 py-10">
        <ImageWithText
          img={
            "https://i.ibb.co/56LYXnq/front-view-scientist-wearing-vr-glasses.jpg"
          }
        />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
