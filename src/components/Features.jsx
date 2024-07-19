
import features from "../data/free-features.json";
import Feature from "./Feature";
import Shape from "./Shape";


const Features = () => {
    return (
        <section className="service-area relative pb-32  bg-white pt-10" id="features">
            <div className="container md:grid md:grid-cols-3 lg:gap-7">
                {features.map(service => (
                    <Feature
                        key={service.id}
                        desc={service.desc}
                        title={service.title}
                        thumb={service.icon}
                    />
                ))}
            </div>
            <Shape className="hidden md:block"/>
        </section>
    );
};

export default Features;
