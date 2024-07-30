
import PropTypes from "prop-types"
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { MovieContext } from '../context/MovieProvider';
import { useContext } from "react";



// slider
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2
    }
  };

function MovieList({title, data }) {
    
  const {handleTrailer} = useContext(MovieContext)

  return (
    <div className='text-white p-10 '>
        <h2 className='uppercase text-xl mb-4'>{title}</h2>

        <Carousel responsive={responsive} className='flex items-center space-x-4'>
        
            {data && data.length > 0 && data.map((item) =>(
                <div key={item.id} className='w-[200px] h-[300px]  relative group' onClick={() => handleTrailer(item.id)} >

                    <div className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer'>
                        <div className='absolute top-0 left-0 w-full h-full bg-black/20'/>
                        <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt={item.title}/> 
                        <div className='absolute bottom-4 left-8'>
                            <p className='uppercase text-md'>{item.title || item.original_title}</p>
                        </div>
                    </div>

                </div>
            ))}

        </Carousel>;


    </div>
  )
}

MovieList.propTypes = {
    title: PropTypes.string,
    data : PropTypes.array,
}

export default MovieList