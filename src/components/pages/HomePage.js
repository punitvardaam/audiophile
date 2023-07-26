import HomePageHero from "../layouts/HomePageHero";
import ProductDisplayCard from "../common/ProductDisplayCard";
import ProductCard from "../common/ProductCard";
import Button from "../common/Button";

const HomePage = () => {
    return (
        <div className="mb-20">
            <HomePageHero/>
            <div className="mt-20 mb-12 flex justify-center gap-6">
                <ProductDisplayCard imageUrl="/images/shared/desktop/image-headphones.png" text="Headphones"
                                    linkUrl="/headphones"/>
                <ProductDisplayCard imageUrl="/images/shared/desktop/image-speakers.png" text="Speakers"
                                    linkUrl="/speakers"/>
                <ProductDisplayCard imageUrl="/images/shared/desktop/image-earphones.png" text="Earphones"
                                    linkUrl="/earphones"/>
            </div>
            <div className="container mx-auto flex justify-center w-full">
                <ProductCard
                    tailwindClass="bg-pattern-circles bg-amber-600 bg-no-repeat flex flex-row-reverse items-basline p-10 rounded-md w-[66%] bg-[-385%_45%] overflow-hidden">
                    <div className="basis-6/12 flex flex-col justify-center items-baseline gap-10">
                        <h1 className="text-7xl text-white">ZX9 SPEAKER</h1>
                        <p className="text-lg text-white">Upgrade to premium speakers that are phenomenally built to
                            deliver truly remarkable sound.</p>
                        <Button tailwindClass="border border-transparent bg-black py-3 px-6 text-white"
                                text="See Product"/>
                    </div>
                    <div className="basis-6/12">
                        <img className="h-96 relative top-[54px]" src="/images/home/desktop/image-speaker-zx9.png"
                             alt="speaker zx9"/>
                    </div>
                </ProductCard>
            </div>
        </div>
    );
}

export default HomePage;