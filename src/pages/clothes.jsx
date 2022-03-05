import {useState, useEffect} from 'react'

export default function Clothes() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const sliderData = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=35");

      const data = await response.json();
      setSlider(data);
    };
    sliderData();
  }, []);

  console.log(slider)

  return(
    <div>
    <div>
      {slider.map(item => { return <img src={item.image} alt="product" width={200} height={200}/>})}
    </div>
    </div>
  )
}