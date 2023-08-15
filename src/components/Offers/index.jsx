import "./index.scss";
import CardOffers from './CardOffers';

function index() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="offers_wrapper">
                    <div className="offers_Info">{/* content */}</div>

                    <ul>
                        <li>
                            <CardOffers />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default index;
