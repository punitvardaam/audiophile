import {Link} from "react-router-dom";

const ProductDisplayCard = ({tailwindClass, text, linkUrl, imageUrl}) => {
    return (
        <div className={`rounded flex flex-col justify-end align-middle items-center bg-stone-200 h-[10rem] p-10 w-80 ${tailwindClass ?? ''}`}>
            {imageUrl ? <img className="w-32 relative bottom-1" src={imageUrl} alt={text}/> : ''}
            <h1 className="uppercase">{text}</h1>
           <div className="inline-flex items-center gap-3">
               <Link className="text-slate-500 text-sm" to={linkUrl ? linkUrl : '#'}> SHOP </Link>
               <img src="images/shared/desktop/icon-arrow-right.svg"  className="h-3" alt="arrow icon"/>
           </div>
        </div>
    );
}

export default ProductDisplayCard;