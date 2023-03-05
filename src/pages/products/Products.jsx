import ProductChart from './CommoSnap/ProductChart';
import Navbar from '../../components/navbar/Navbar';
import InfoBox from './InfoBox/InfoBox';
import Product from './Product';
import Footer from '../../components/Footer/Footer';

const productDetails = [
  {
    productCategory: 'Cereals and Pulses',
    productName: 'Chana',
    productDescription: <div>Chickpea or chana is a very important pulse crop that grows like a
      seed of a plant named Cicer arietinum in the Leguminosae family. It
      contains 25% proteins, which is the maximum provided by any pulse
      and 60% carbohydrates. It places third in the importance list of the
      food legumes that are cultivated throughout the world. Chana is used
      as an edible seed and is also used for making flour throughout the
      globe. There are mainly two types of chickpea produced i.e. Desi and
      Kabuli. Chana is usually suited to those areas having relatively
      cooler climatic conditions and a low level of rainfall. It yields
      best when grown on sandy, loam soils having an appropriate drainage
      system as this crop is very sensitive to the excess water
      availability and a lack of such a system can hamper the yield
      levels.<br />
      Chickpea is seeded in the months of September to November
      (Rabi Season) in India. The maturity period of desi type chickpea is
      95-105 days and kabuli type chickpea is 100-110 days. Harvesting of
      the plant is done when its leaves start drying and shedding and can
      be done directly or with the help of a harvester. In India, it is
      harvested in February, March, and April.</div>
  }
]

function Products() {
  return (
    <div>
      <Navbar />
      {productDetails.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      <ProductChart />
      <InfoBox />
      <Footer />
    </div>
  )
}

export default Products;