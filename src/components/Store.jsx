import "../App.css";
import pic from "../Images/mac1.jpg";
import pic2 from "../Images/mac3.jpg";
import pic3 from "../Images/mac4.jpg";
import pic4 from "../Images/mac5.jpg";
function Store(){
    return(
        <>
    <div className="main">    
  <div className="container-fluid ss">
        <div className="box">
        <h1>WWWDC22</h1>
        <p>Introducing the all-new MacBook Air and 13-inch MacBook Pro, now supercharged with the Apple M2 chip. And preview exciting updates to iOS, iPadOS, macOS and watchOS — packed with all-new features and capabilities.</p>
       <button><a href="/" target="_blank" > Watch the keymode</a></button>
       </div>
  </div>
  </div>
  <div className="section">
  <div className=" text-center macair">
      <h1>MacBook Air</h1>
  </div>

 <img src={pic} alt="empty"  />
 <div className="mac_details ">
 All-new strikingly thin design and next-generation M2 chip. Featuring a beautiful Liquid Retina display, 1080p FaceTime HD camera, four-speaker sound system and up to 18 hours of battery life.
<h5  className="my-5 mx-5" style={{fontWeight:"bolder"}}>SuperCharged By <span style={{backgroundColor:"black",color:"white"}}>M2</span></h5>
<h6 className="my-5 mx-5" style={{fontWeight:"bolder",color:"gray",fontSize:"1.5rem"}}>Avaliable Next Month</h6>
<button className="mx-5 btn-one" >Learn More</button>
<button className="mx-1 btn-one" >View Pricing</button>
 </div>
 </div>
 <div className="section">
 <div className="container-fluid iphone">
     <h2 className="text-center py-5" style={{fontSize:"3.5rem",fontWeight:"bolder"}}>iOS 16</h2>
    
     
 </div>
</div>
<div className="subsection">
       <div className="subsection_one">  
    <h5>Personalise your Lock Screen with photos, customised widgets, even the way you get notifications. Create a Shared Photo Library to share photos and videos with loved ones. Enhance everyday moments with powerful new features in Messages and Mail.</h5>
    <button>See the Preview</button>
    </div>
</div>
<div className="section">
    <div className="container-fluid mac_venture">
    <h1>macOS Venture</h1> 
    <div className="mac_venture_1">
     <img src={pic2} alt="empty"  />

    </div>
    <div className="info">
        <h5>Stay focused while moving between tasks with Stage Manager. Easily hand off a FaceTime call from one device to another. And with Continuity Camera, you can seamlessly make your iPhone your Mac webcam.</h5>
        <button>See Preview</button>
    </div>
    </div>

    
</div>
<div className="section">
    <div className=" ipados_16">
        <h1>iPadOS 16</h1>
        <div className="ipados_16_1">
     <img src={pic3} alt="empty"  />

    </div>
    <div className="info_1">
        <h5>Switch between multiple overlapping apps and create your ideal workspace with Stage Manager. Connect to an external display and drag and drop files between devices. Explore full maps and rich details in the new Weather app for iPad.</h5>
        <button>See Preview</button>
    </div>
    </div>
</div>
<div className="section">
    <div className="macbook">
    <h1>MacBook Pro 13"</h1> 
    
    <div className="macbook_1">
        <img src={pic4} alt="empty"  />
    </div>
        <div className="info_2">
        <h5>Now more capable than ever with the new M2 chip. Featuring a brilliant Retina display, FaceTime HD camera, studio-quality mics and up to 20 hours of battery life.</h5>
        <h3>Super charged by <span>M2</span></h3>
        <h6>Avaliable next month</h6>
        <button>Learn More</button>
        <button>view Pricing</button>
    </div>
    </div>
</div>
<div className="footer">
<div className="container">
  <div className="row py-4">
    <div className="col-sm text-white">
      <h5>Shop and learn</h5>
      <h6>Store</h6>
      <h6>Mac</h6>
      <h6>iPad</h6>
      <h6>iPhone</h6>
      <h6>Watch</h6>
      <h6>Airpods</h6>
      <h6>Tv & Home</h6>
      <h6>AirTags</h6>
      <h6>Accessories</h6>
    
    </div>
    <div className="col-sm text-white">
      <h5>Services</h5>
      <h6>Apple Music</h6>
      <h6>Apple Tv+</h6>
      <h6>Apple Arcade</h6>
      <h6>iCloud</h6>
      <h6>Apple One</h6>
      <h6>Apple Books</h6>
      <h6>Apple Podcasts</h6>
      <h6>Apple Store</h6>
      <h5 className="py-3">Accounts</h5>
      <h6>Manage Your Apple ID</h6>
      <h6>Apple Store Account</h6>
      <h6>iCloud.Com</h6>
    </div>
    <div className="col-sm text-white">
     <h5>Apple Store</h5>
     <h6>Ways To Buy</h6>
     <h6>Apple Trade In</h6>
     <h6>Recycling Programme</h6>
     <h6>Order Status</h6>
     <h6>Shopping Help</h6>
    </div>
    <div className="col-sm text-white">
      <h5>For Bussiness</h5>
      <h6>Apple And Bussiness</h6>
      <h5 className="py-3">For Education</h5>
      <h6>Apple And Education</h6>
      <h6>Shop For Education</h6>
      <h6>Shop For University</h6>
      <h5>For HealthCare</h5>
    </div>
    <div className="col-sm text-white">
      One of three columns
    </div>
  </div>
</div>
</div>
    
    

  

        </>
    )
}
export default Store