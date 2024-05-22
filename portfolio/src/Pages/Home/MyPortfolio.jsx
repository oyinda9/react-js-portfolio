import data from "../../data/portfolio.json"
function MyPortfolio(){
    return ( 
        <section className="portfolio--section" id="MyPortfolio">

            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent Project</p>
                    <h2 className="section--heading">My Portfolio</h2>
                </div>
                <div >
                    
                </div>

            </div>

            <div className="portfolio--section--container">
  {data?.portfolio?.map((item, index) => {
    return (
      <div key={index} className="portfolio--section--card">
        <div className="portfolio--section--img">
          <img src={item.src} alt="placeholder" />
        </div>
        <div className="portfolio--section--card--content">
          <div>
            <h3 className="portfolio--section--title">{item.title}</h3>
            <p className="text-md">{item.description}</p>
          </div>
          <p className="text-sm portfolio--link">
            {item.link}
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M480-554 283-357l-43-43 240-240 240 240-43 43-197-197Z"/></svg>
          </p>
        </div>
      </div>  
    );
  })}
</div>

        </section>
    )
}
export default MyPortfolio; 