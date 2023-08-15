import Recomended from "./Recomended";
import "./style.scss";

const index = () => {
  return (
    <main>
      <section className="mt-[60px]">
        <div className="container mx-auto">
          <h1 className="text-[24px] font-semibold mb-6">Recommended items</h1>
          <Recomended />
        </div>
      </section>
    </main>
  );
};

export default index;
