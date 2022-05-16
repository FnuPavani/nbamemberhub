import config from "../config/voting.json";
import widgetConfig from "../config/widgetSource.json";
import '../css/voting.css'
import { Component } from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

class Voting extends Component  {
    componentDidMount(){
    window.CrowdTwist.loadWidgets();
  } 
  render(){
  return (
    <div>
      <div className="flex flex-col justify-start items-start gap-[22px]">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-12">
          <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1001px] text-[56px] text-left uppercase text-black">
              {config.votingPageHeader}
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1001px] text-2xl text-left text-black">
              {config.votingPageTopDescription}
            </p>
          </div>
          <svg
            width={1001}
            height={1}
            viewBox="0 0 1001 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-stretch flex-grow-0 flex-shrink-0 h-0 relative"
            preserveAspectRatio="none"
          >
            <line y1="0.5" x2={1001} y2="0.5" stroke="#F3F4F5" />
          </svg>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1001px] gap-10 pt-8 pb-14">
          {/* <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4"> 
            <p className="flex-grow-0 flex-shrink-0 w-[1001px] h-[19px] text-2xl text-left uppercase text-black">
              [FEATURED POLL]
            </p>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1001px] overflow-hidden gap-4">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[323px]">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2 pb-4 rounded-bl rounded-br bg-white">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-4">
                    <img
                      src="rectangle-2654.png"
                      className="self-stretch flex-grow-0 flex-shrink-0 h-[174px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[294px] relative gap-4">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[294px] text-xl text-left uppercase text-black">
                      POLL / QUIZ NAME
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="ct-widget" data-widget-id="16912" dangerouslySetInnerHTML={{ __html: iframeSource }}></div> */}
          {/* <div dangerouslySetInnerHTML={{__html: '<div className="ct-widget" data-widget-id="16912"  data-src={"https://prokarma.crowdtwist.com/widgets/t/activity-list/16912"}></div>'}}>   
          </div> */}
          {/* <div className="ct-widget" data-widget-id="16912"  data-src={"https://prokarma.crowdtwist.com/widgets/t/activity-list/16912"}></div> */}
          {/* <iframe content={'<div className="ct-widget" data-widget-id="16912"  data-src={"https://prokarma.crowdtwist.com/widgets/t/activity-list/16912"}></div>'} title="Featured poll" width={1000} height={500} ></iframe> */}
          {/* <div class='ct-widget' data-widget-id={widgetConfig.featuredPollWidgetId} data-src={widgetConfig.featuredPollWidgetSrc}></div> */}
          <div className="ct-widget" data-widget-id="16912"  data-src={"https://prokarma.crowdtwist.com/widgets/t/activity-list/16912"}></div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1001px] gap-10 pt-8 pb-14">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
            <p className="flex-grow-0 flex-shrink-0 w-[1001px] h-[19px] text-2xl text-left uppercase text-black">
              {config.shareYourVoiceHeader}
            </p>
            <p className="flex-grow-0 flex-shrink-0 w-[1001px] text-base text-left text-black">
              {config.shareYourVoiceDescription}
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1000px] gap-6">
            <div className="ct-widget" id="div" data-widget-id="18242"  data-src={"https://prokarma.crowdtwist.com/widgets/t/activity-list/18242"}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
}
export default Voting;
