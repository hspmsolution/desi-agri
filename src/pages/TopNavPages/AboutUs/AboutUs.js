import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import './AboutUs.css'

export default function AboutUs() {
  return (
   <>
   <Navbar />
   <section className="about-section" >
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                           
                            <h2 className='Abouthtwo'>About Us</h2>
                        </div>
                        <div className="Abouttext">National Commodity & Derivatives Exchange Limited (NCDEX/ the Exchange) is a professionally managed on-line, commodity Exchange, with diverse product offerings setting a benchmark for both agriculture and non agri commodities derivatives segment. NCDEX was incorporated on April 23, 2003 as a public limited company and commenced operations on December 15, 2003 as a recognised association under The Forward Contracts (Regulation) Act, 1952. The Corporate Identity Number of the Exchange is U51909MH2003PLC140116. Effective September 28, 2015, the Exchange became a deemed recognized stock exchange under the Securities Contracts (Regulation) Act, 1956 under the regulation of the Securities and Exchange Board of India (SEBI). NCDEX’s Raison d’ etre is to serve as an efficient platform for Price Discovery and Price Risk Management and this has been consistently demonstrated over the past two decades. We offer a diverse range of products such as commodity futures, options in goods and index futures that open a plethora of opportunities to cater to the needs of various sets of participants in the commodity derivatives value chain. NCDEX prices are widely recognised as benchmark in both domestic and international commodities market. and the NCDEX prices are widely recognized as international benchmark prices.</div>
                     
                        
                    </div>
                </div>

                {/* <!-- Image Column --> */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft">
                      
                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img title="" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" className='Aboutimage'/></a></figure>
                     
                    </div>
                </div>
              
            </div>
          
          <div className="Abouttext">
                 Our product basket has been evolving over the years and it is our endeavor to offer product portfolio that are inclusive, meeting the needs of all stakeholders in the ecosystem. Technology is core to Exchange functioning and we are the first domestic Exchange to operate from an Uptime-certified Tier-IV data center. We follow an intuitive and proactive approach to technology which is centered around improving the trading experience of the participants.
              </div>
               <div className="Abouttext">
                The larger NCDEX Group through its subsidiaries, provides an integrated and holistic market infrastructure including Clearing & Settlement services, Repository services and even an e-Auction Platform. 
              </div>
               <div className="Abouttext">                
Here we are trying to give you all kinds of technical content, whether it is related to designing or functionality. We are creating content on a lot of languages and will continue to make it free of cost even if you use it without any problem. Which is a very important thing.
              </div>
               <div className="Abouttext">
               NCDEX is deeply committed to the national objective of upliftment and development of farmers and the agricultural sector in general and our relentless efforts to connect the primary producer to the Exchange has paved the way for sustainable and inclusive growth of our agrarian economy.
              </div>
               <div className="Abouttext">
                
 

Our key shareholders like Life Insurance Corporation of India (LIC), National Bank for Agriculture and Rural Development (NABARD), National Stock Exchange of India Limited (NSE), Canara Bank, Punjab National Bank (PNB), and Indian Farmers Fertiliser Cooperative Limited (IFFCO) are among the architects of India’s economic success story in the past few decades.


              </div>
        </div>
    </section>
    <Footer />
   </>
  )
}
