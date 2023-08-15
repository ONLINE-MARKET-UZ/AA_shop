import "./style.scss";
import FooterTop from "./FooterTop";
import Footer from "./Fotter";
const index = () => {
  return (
    <>
      <footer className="mt-20 bg-[#EFF2F4] pt-[38px]">
        <div className="container mx-auto">
          <div className="wrapper">
            <FooterTop />
          </div>
        </div>
        <div className="bg-white p-10">
          <div className="container mx-auto">
            <Footer />
          </div>
        </div>

        <div className="p-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <p>© {new Date().getFullYear()} Ecommerce.</p>
              <div>
                <select>
                  <option selected disabled>
                    English
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
