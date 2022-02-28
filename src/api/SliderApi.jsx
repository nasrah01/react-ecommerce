import {useState, useEffect} from 'react'

export default function Sliderapi() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const sliderData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=4&sort=desc"
      );

      const data = await response.json();
      setSlider(data);
    };
    sliderData();
  }, []);

  console.log(slider)

  return(
    <div>
      {slider.map(item => { return <img src={item.image} alt="product"/>})}
    </div>
  )

}
