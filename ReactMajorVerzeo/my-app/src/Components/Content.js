import React from 'react';

  function Content() {
    return (
       <div>
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{height:"350px"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/banner-1.jpg" alt="Second slide" style={{height:"350px"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="Third slide" style={{height:"350px"}}/>
                  </div>
                </div>
               </div>
        </section>   

        <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">“Travel is the main thing you purchase that makes you more extravagant”. We, at Devi Tours,
                 swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.
                  We have been moving excellent encounters for a considerable length of time through our cutting-edge planned 
                 occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.</p>
             </div>   
          </div>   
        </section>   

        <section class="" id="destinations">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Favourite Destinations</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/ig-3.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Vizag</h4>
                          <p class="card-text text-secondary">Visakhapatnam, also commonly known as Vizag, is one of the oldest port cities in the country. Situated in the heart of Andhra Pradesh, Visakhapatnam is known for its picturesque beaches and serene landscape, as well as a rich cultural past, which makes it an ideal spot for a fantastic coastal vacation. The port of Visakhapatnam is renowned for being home to the oldest shipyard in all of India, and with a plethora of manmade wonders and natural spectacles, Visakhapatnam is a must-visit tourist destination in South India..</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-2.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Tirupati</h4>
                          <p class="card-text text-secondary">Tirupati, city, southeastern Andhra Pradesh state, southern India. It lies in the Palkonda Hills, about 8 miles (13 km) northeast of Chandragiri and 67 miles (108 km) northwest of Chennai in Tamil Nadu state.

                           Tirupati is known as the abode of the Hindu god Venkateshvara, Lord of Seven Hills. The sacred hill of Tirumala is situated about 6 miles (10 km) northwest of Tirupati in Sri Venkateshwara Sanctuary and National Park.  
                           The hill was considered so holy that before 1870 non-Hindus were not permitted to ascend it. At the hill’s summit, at an elevation of 2,800 feet (850 metres), is a temple of great antiquity.    </p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-1.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Vijaywada</h4>
                          <p class="card-text text-secondary">Vijayawada is an important city situated in South India and is considered to be the cultural capital of the state of Andhra Pradesh. The biggest railway junction in the South Central Railway leading to major cities like Chennai, Kolkata, Delhi and Hyderabad, Vijayawada is full of the tourists coming from all over. 
                          Being a busy and major junction on the Kolkata-Chennai railway line, this city has emerged into an important industrial center. This is the heart of Andhra Pradesh, historically a cultural, political and educational center. The purest form of Telugu is spoken in Vijayawada, and political thinking within Andhra Pradesh originated and evolved here.  </p>
                        </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  


       <section class=""  id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Places and Description</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div class="card-header" id="headingOne">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Tourist Places
            </button>
            </h2>
         </div>

         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            
              Yarada Beach	Dolphin Hill , Nose
              Rushikonda Beach,	Rama Krishna Mission Beach,
               INS Kursura Submarine Museum	,Kailasagiri,
              Indira Gandhi Zoological Park	,Simhachalam Temple,
              Borra Caves	,Katiki Falls
               and Araku Valley in Vizag.
               The main attraction of Tirupati is Lord balaji Temple.
               Vijaywada Having few places called Bhavani Islands,Hailand 
               and Especially Kanakdurga Temple..
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Best Destination
            </button>
            </h2>
         </div>
         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
            Best Destination is Visakhapatnam Simply called as vizag which is the Biggest city in the state of Andhrapradesh which So many tourist spots like 
              Yarada Beach	Dolphin Hill , Nose
              Rushikonda Beach,	Rama Krishna Mission Beach,
               INS Kursura Submarine Museum	,Kailasagiri,
              Indira Gandhi Zoological Park	,Simhachalam Temple,
              Borra Caves	,Katiki Falls
               and Araku Valley
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingThree">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Best Heritages
            </button>
            </h2>
         </div>
         <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
            The Three Best Heritages in the State of Andhrapradesh are Tirupati Balaji Temple ,Vijaywada Kanakdurga Temple and finally Simhachalam Temple.
            
            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>

    
    <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Tourist Opinions</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="Images/tourist1.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Venkat</h4>
          <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
          <p class="font-weight-normal dark-grey-text">
            Devi tours is the best tours so far I had Travelled their commodites
            are excellent so far with best prices so far .</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="Images/tourist2.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Shiva</h4>
          <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
          <p class="font-weight-normal dark-grey-text">This tour agency is so better and believe in me
            they are the best so far to explore the places and Enjoy some part of life.</p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="Images/tourist3.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Riya</h4>
          <h6 class="font-weight-bold blue-text my-3">Toursit</h6>
          <p class="font-weight-normal dark-grey-text">
            Simply Brilliant Work By Devi Tours and nice Hospitality
            I can say onething this agency simply world class.</p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   <section class="bg-light" id="Contactus">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">ContactUs</h3>
               </div>
              </div>
             <div class="row">
             <form>
             <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
             <label for="">Message</label>
             <textarea type="text" class="form-control" id="" placeholder="Message"/>
             </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
             </div>   
          </div>   
        </section>   
   </div>
    );
  }
  
  export default Content;