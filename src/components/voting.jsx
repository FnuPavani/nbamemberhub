import config from "../config/voting.json";
import widgetConfig from "../config/widgetSource.json";
import '../css/voting.css'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const Voting = () => {
  const images = importAll(
    require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)
  );
  const iframeSource = '<iframe src="https://prokarma.crowdtwist.com/widgets/t/activity-list/16912"></iframe>';

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
            <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2 rounded bg-white">
              <div
                className={`flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden bg-[url(${images["vote1.png"]})] bg-cover bg-no-repeat bg-center`}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden">
                  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[232px]">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-0 h-[232px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-2 pt-1 pb-2">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[216px] text-xl text-left uppercase text-black">
                      Player of the month
                    </p>
                  </div>
                  <svg
                    width={17}
                    height={16}
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx="8.5" cy="8.00064" r={8} fill="#34C759" />
                    <path
                      d="M3.70001 7.94639L7.12388 11.2006L12.9445 4.80063"
                      stroke="black"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2 rounded bg-white">
              <div
                className={`flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden bg-[url(${images["image-container-+-elements-5.png"]})] bg-cover bg-no-repeat bg-center`}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden">
                  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[232px]">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-0 h-[232px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-2 pt-1 pb-2">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[216px] text-xl text-left uppercase text-black">
                      submit questions for post-game presser
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2 rounded bg-white">
              <div
                className={`flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden bg-[url(${images["image-container-+-elements-2.png"]})] bg-cover bg-no-repeat bg-center`}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden">
                  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[232px]">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-0 h-[232px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-2 pt-1 pb-2">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[216px] text-xl text-left uppercase text-black">
                      SOCIAL JUSTICE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2 rounded bg-white">
              <div
                className={`flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden bg-[url(${images["image-container-+-elements-3.png"]})] bg-cover bg-no-repeat bg-center`}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden">
                  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[232px]">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-0 h-[232px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-2 pt-1 pb-2">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[216px] text-xl text-left uppercase text-black">
                      NBA-Con Event{" "}
                    </p>
                  </div>
                  <svg
                    width={17}
                    height={16}
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx="8.5" cy="8.00064" r={8} fill="#34C759" />
                    <path
                      d="M3.69995 7.94639L7.12382 11.2006L12.9444 4.80063"
                      stroke="black"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1000px] gap-6">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2 rounded bg-white">
              <div
                className={`flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden bg-[url(${images["image-container-+-elements-6.png"]})] bg-cover bg-no-repeat bg-center`}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden">
                  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[232px]">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-0 h-[232px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-2 pt-1 pb-2">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[216px] text-xl text-left uppercase text-black">
                      ALL-STAR EVENT{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2 rounded bg-white">
              <div
                className={`flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden bg-[url(${images["image-container-+-elements-4.png"]})] bg-cover bg-no-repeat bg-center`}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden">
                  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[232px]">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-0 h-[232px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-2 pt-1 pb-2">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[216px] text-xl text-left uppercase text-black">
                      All-star CROSSOVER EVENT{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2 rounded" />
            <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Voting;
