import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Header() {
    return (
        <div className="flex flex-col justify-start items-start relative">
            <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[72px] relative bg-black">
                <div className="flex justify-center items-center absolute left-[125.86px] top-[25px] gap-6">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-black text-left text-white">
                        Games
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-base font-black text-left text-white">
                        Video
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-base font-black text-left text-white">
                        Standings
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-base font-black text-left text-white">
                        Stats
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-base font-black text-left text-white">
                        Players
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-base font-black text-left text-white">
                        Teams
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-base font-black text-left text-white">
                        Shop
                    </p>
                </div>
                <svg
                    width={55}
                    height={32}
                    viewBox="0 0 55 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[54.86px] h-8 absolute left-[47px] top-[19px]"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g clipPath="url(#clip0_7_4800)">
                        <path
                            d="M21.6838 31.217H18.0686V0.780273H23.6629L27.4067 25.8883C26.8476 19.9201 26.1162 10.2865 26.1162 5.21355V0.780273H29.7305V31.217H24.6095L21.1676 6.83346C21.4695 12.2904 21.6838 18.8125 21.6838 22.4778V31.217Z"
                            fill="white"
                        />
                        <path
                            d="M35.9276 18.002V27.3799H36.6162C37.9067 27.3799 38.2943 26.6554 38.2943 25.2062V20.0484C38.2943 18.5558 37.821 18.002 36.4438 18.002H35.9276ZM35.9276 4.61729V14.6773H36.4438C37.9067 14.6773 38.2943 14.1235 38.2943 12.4611V6.66364C38.2943 5.25695 37.8638 4.61729 36.6162 4.61729H35.9276ZM31.7962 31.217V0.780273H36.9172C40.3172 0.780273 42.4257 2.6134 42.4257 6.87591V11.3516C42.4257 14.1226 41.5648 15.5292 40.36 16.2538C41.5648 17.0208 42.4257 18.3851 42.4257 20.7296V25.1628C42.4257 29.3404 40.1876 31.216 36.9172 31.216H31.7962V31.217Z"
                            fill="white"
                        />
                        <path
                            d="M47.7572 22.0523H49.9514L49.6067 16.468C49.4781 14.2509 49.1333 7.21744 48.8753 3.42382H48.7038L48.101 16.468L47.7572 22.0523ZM50.1667 25.5053H47.5848L47.241 31.2179H43.0667L46.0781 0.780273H51.9305L54.8572 31.217H50.5114L50.1667 25.5053Z"
                            fill="white"
                        />
                        <path
                            d="M10.9076 0H3.34381C1.49905 0 0 1.48688 0 3.31246V28.6837C0 30.5121 1.49905 32.0009 3.34381 32.0009H10.9019C12.7467 32.0009 14.2533 30.5121 14.2533 28.6837V3.31246C14.2533 1.48688 12.7514 0 10.9076 0Z"
                            fill="white"
                        />
                        <path
                            d="M9.0314 5.86646L9.03902 5.97495C9.2695 6.10798 9.38664 6.21648 9.61902 6.3646C10.2362 6.74953 10.9962 7.43259 10.9 9.78839C11.0733 10.3016 11.1495 11.3121 11.3095 11.6357C11.6304 12.2668 11.8447 12.6772 11.939 13.2726C11.939 13.2726 12.0314 14.2 12.1524 14.267C12.7904 14.4094 12.6057 14.4717 12.699 14.5802C12.7981 14.7066 13.1666 14.7009 13.1666 15.0415C13.2943 15.2113 13.3885 15.3868 13.4609 15.5699V3.31253C13.4609 1.91528 12.3143 0.78125 10.9085 0.78125H8.46378C8.85616 0.918994 9.07807 1.08221 9.20759 1.34166C9.52283 1.36808 9.89807 2.06906 9.31426 3.10403C9.57331 3.27479 9.3714 3.52953 9.18569 3.82577C9.1314 3.92106 9.0714 4.08899 8.89902 4.07861C8.67712 4.54091 8.40855 4.98905 8.20664 5.01735C8.14569 5.09283 8.10093 5.29095 8.19331 5.3853C8.4895 5.51644 8.8514 5.69758 9.0314 5.86646Z"
                            fill="#C8102E"
                        />
                        <path
                            d="M13.46 17.2304C13.1286 18.0635 12.3028 18.6531 11.339 18.6531C10.0771 18.6531 9.05999 17.6427 9.05999 16.3964C9.05999 15.3322 9.79903 14.4387 10.8019 14.2C10.539 13.549 9.98475 12.4933 9.81999 12.1471C9.6638 11.8037 9.28856 9.65636 9.20761 9.23181C9.18951 9.13935 8.22475 9.78656 8.22284 9.82618C8.16665 9.87996 7.49903 11.6074 7.47141 11.6999C7.45808 11.7584 7.45618 11.9895 7.45618 11.9895C7.45618 11.9895 7.78475 12.0301 7.97332 12.5971C8.15999 13.1632 8.73046 15.2312 8.73046 15.2312C8.73046 15.2312 8.57618 15.3897 8.56951 15.3793C9.28951 17.7663 9.03808 18.7937 9.36094 19.4937C9.76665 20.4806 9.87618 20.3513 10.2247 21.1806C10.4743 21.7844 10.7533 24.1619 10.8467 24.2666C11.2352 24.7544 11.4447 25.1365 11.4447 25.4111C11.4447 25.6884 11.1152 26.5064 11.2352 26.9838C11.3076 27.264 11.3457 27.8933 11.4781 28.0122C11.4781 28.0122 11.599 28.248 11.54 28.3527C11.5228 28.3895 11.4886 28.4443 11.5038 28.4867C11.7181 29.2368 12.4095 30.5151 11.2895 31.184H11.3133C12.5362 30.9963 13.4628 29.9576 13.4628 28.6811V17.2304H13.46Z"
                            fill="#C8102E"
                        />
                        <path
                            d="M10.5819 28.197C10.1714 27.8337 10.4457 27.68 10.4295 27.5375C10.1591 26.4289 9.27048 25.7591 9.72953 25.393C9.6162 25.027 9.38572 24.5675 9.39334 24.5685C8.00858 23.7807 6.82953 22.5014 6.62858 22.3136C6.38572 22.0523 5.97238 21.789 5.89429 21.5768C5.56191 21.2739 3.92953 18.9804 3.54857 18.1351L2.88572 18.0426C2.58477 16.8227 1.5781 15.801 1.55334 14.5782C1.54381 14.116 1.76476 13.1253 1.84667 12.9282C1.92762 12.7281 2.31238 12.3989 2.31238 12.3989V12.0715C0.867622 12.1121 1.28286 11.9658 1.03334 11.4092C0.858098 11.0243 0.983812 10.9394 1.04667 10.6714C1.24096 9.88269 1.88476 8.66564 2.15143 8.11278C2.23334 7.83352 2.51143 7.16084 2.51143 7.16084C3.58857 4.98807 3.99048 5.14751 5.26953 5.02486L5.33238 4.93523C6.61429 4.88051 6.40477 4.78428 6.58572 3.56157C6.39905 3.64082 6.34381 3.17853 6.34381 3.17853C6.24191 2.48226 6.5381 2.61434 6.67905 2.60019C6.70953 1.45578 6.82762 1.09539 7.66096 0.780273H3.34477C1.93238 0.781217 0.788574 1.91525 0.788574 3.31344V28.6828C0.788574 30.0829 1.93238 31.217 3.34572 31.217H10.9076C10.0419 30.7537 10.5524 29.8716 10.5819 28.197Z"
                            fill="#1D428A"
                        />
                    </g>
                    <defs>
                        <clippath id="clip0_7_4800">
                            <rect width="54.8571" height={32} fill="white" />
                        </clippath>
                    </defs>
                </svg>
                <div className="flex justify-start items-start absolute left-[1311px] top-[19px] gap-4">
                    <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                        preserveAspectRatio="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.1129 20.9985C17.6796 22.0474 15.9121 22.6667 13.9999 22.6667C9.21339 22.6667 5.33319 18.7865 5.33319 14C5.33319 9.21357 9.21339 5.33337 13.9999 5.33337C18.7863 5.33337 22.6665 9.21357 22.6665 14C22.6665 15.9121 22.0473 17.6796 20.9985 19.1128L26.2761 24.3904L24.3905 26.276L19.1129 20.9985ZM19.9999 14C19.9999 17.3137 17.3136 20 13.9999 20C10.6861 20 7.99986 17.3137 7.99986 14C7.99986 10.6863 10.6861 8.00004 13.9999 8.00004C17.3136 8.00004 19.9999 10.6863 19.9999 14Z"
                            fill="black"
                        />
                    </svg>
                    <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.5654 22.358C25.8854 20.5825 26.6665 18.3824 26.6665 16C26.6665 10.1089 21.8909 5.33329 15.9999 5.33329C10.1088 5.33329 5.33321 10.1089 5.33321 16C5.33321 18.3825 6.11432 20.5825 7.43443 22.358C9.0605 20.4262 11.298 19.0488 13.8402 18.5446C11.9706 17.7156 10.6665 15.8434 10.6665 13.6666C10.6665 10.7211 13.0544 8.33329 15.9999 8.33329C18.9454 8.33329 21.3332 10.7211 21.3332 13.6666C21.3332 15.8434 20.0291 17.7156 18.1596 18.5446C20.7018 19.0488 22.9393 20.4262 24.5654 22.358ZM24.1419 22.8913C22.1873 20.5097 19.2637 19 15.9999 19C12.7361 19 9.81249 20.5097 7.85792 22.8913C9.81453 25.2007 12.736 26.6666 15.9999 26.6666C19.2638 26.6666 22.1853 25.2007 24.1419 22.8913ZM15.9999 29.3333C23.3637 29.3333 29.3332 23.3638 29.3332 16C29.3332 8.63616 23.3637 2.66663 15.9999 2.66663C8.63608 2.66663 2.66654 8.63616 2.66654 16C2.66654 23.3638 8.63608 29.3333 15.9999 29.3333ZM15.9999 18.3333C18.5772 18.3333 20.6665 16.244 20.6665 13.6666C20.6665 11.0893 18.5772 8.99996 15.9999 8.99996C13.4225 8.99996 11.3332 11.0893 11.3332 13.6666C11.3332 16.244 13.4225 18.3333 15.9999 18.3333Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-12 relative bg-white/90 backdrop-blur-[10px]">
                <div className="flex justify-center items-center h-14 absolute left-[47px] top-[-1px] gap-4">
                    <p className="flex-grow-0 flex-shrink-0 text-xl text-left uppercase text-black">
                        MEMBERSHIP
                    </p>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                        <div className="flex flex-col justify-end items-center flex-grow-0 flex-shrink-0 h-[46px] relative gap-[11px]">
                            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-4">
                                <Link to="/">
                                    <p className="flex-grow-0 flex-shrink-0 text-base font-black text-center text-black">
                                        Benefits
                                    </p>
                                </Link>
                            </div>
                            <svg
                                width={93}
                                height={2}
                                viewBox="0 0 93 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="self-stretch flex-grow-0 flex-shrink-0"
                                preserveAspectRatio="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M93 2H0V0H93V2Z"
                                    fill="#FBCD44"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-end items-center flex-grow-0 flex-shrink-0 h-[46px] relative gap-[11px]">
                            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-4">
                                <Link to="/voting">
                                    <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#4e5356]">
                                        Voting
                                    </p>
                                </Link>
                            </div>
                            <div className="self-stretch flex-grow-0 flex-shrink-0 opacity-0" />
                        </div>
                        <div className="flex flex-col justify-end items-center flex-grow-0 flex-shrink-0 h-[46px] relative gap-[11px]">
                            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-4">
                                <Link to="/badges">
                                    <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#4e5356]">
                                        Badges
                                    </p>
                                </Link>
                            </div>
                            <div className="self-stretch flex-grow-0 flex-shrink-0 opacity-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;