import Button from "../common/Button";

const HomePageHero = () => {
    return (
        <div className="bg-black text-white">
            <section className="bg-no-repeat h-[700px] flex container mx-auto bg-hero-image bg-center bg-cover py-20">
                <div className="gap-10 p-6 basis-4/12 flex flex-col align-middle items-baseline">
                    <p className="text-slate-500 text-sm tracking-[1.0rem]">New Product</p>
                    <h1 className="uppercase text-5xl">
                        XX99 Mark II Headphones
                    </h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music
                        enthusiast</p>
                    <Button text="See Product" tailwindClass="rounded-none bg-orange-500 uppercase p-5"/>
                </div>
            </section>
        </div>
    );
}

export default HomePageHero;