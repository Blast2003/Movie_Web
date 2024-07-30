import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpg";
import IconPlay from "../assets/play-button.png"

const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"/>

      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4">
        
        <div className="flex flex-col space-y-5 items-baseline w-[50%] p-11">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-2 px-3 relative z-20">TV Show</p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-3xl relative text-[40px] font-bold">Queen Of Tears</h2>
            <div className="flex items-center space-x-3">
              <img src= {IconRating} alt="rating" className="w-8 h-8"/>
              <img src= {IconRating} alt="rating" className="w-8 h-8"/>
              <img src= {IconRating} alt="rating" className="w-8 h-8"/>
              <img src= {IconRating} alt="rating" className="w-8 h-8"/>
              <img src= {IconRatingHalf} alt="rating" className="w-8 h-8"/>
            </div>
            <p className="text-white relative py-3 w-[350px]">We join Baek Hyun-woo (Kim Soo-hyun) three years later. The pastel haze of K-romance has disappeared, reality has set in, and Hyun-woo is drunkenly weeping about how much he hates his wife, Hong Hae-in (Kim Ji-won), who has risen from intern to Queens Group CEO. His life is limited by the rigors and scrutiny of being part of South Korea’s rich elite, combined with his perceptions of Hae-in’s prioritization of her ambition above all else. As a result, their relationship is crumbling: they sleep apart, eat apart, and ultimately lead separate lives that only briefly intersect when they fight.</p>
            
            <div className="flex items-center space-x-4">
              <button className="p-3 text-white bg-black font-bold text-sm">Detail</button>
              <button className="p-3 text-white bg-red-600 font-bold text-sm">Watch</button>
            </div>
          </div>  
        </div>

        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[500px] h-[300px] relative group cursor-pointer">
              <img src={ImgTemp} alt="temp" className="w-full h-full object-cover"/>
              <div class="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <img src={IconPlay} alt = "play" className="w-16 h-16 relative z-20"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner