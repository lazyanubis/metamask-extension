/* eslint-disable @metamask/design-tokens/color-no-hex*/
import EventEmitter from 'events';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Mascot from '../../../components/ui/mascot';
import { isFlask, isBeta } from '../../../helpers/utils/build-types';

export default function MascotBackgroundAnimation({ height, width }) {
  const animationEventEmitter = useRef(new EventEmitter());

  const renderMascot = () => {
    if (isFlask()) {
      return (
        <img
          src="./images/logo/metamask-fox.svg"
          width={width ?? '42'}
          height={height ?? '42'}
        />
      );
    }
    if (isBeta()) {
      return (
        <img
          src="./images/logo/metamask-fox.svg"
          width={width ?? '42'}
          height={height ?? '42'}
        />
      );
    }
    return (
      <Mascot
        animationEventEmitter={animationEventEmitter.current}
        width={width ?? '42'}
        height={height ?? '42'}
        followMouse={false}
      />
    );
  };

  return (
    <div className="mascot-background-animation__animation">
      <div
        className="mascot-background-animation__background-1"
        data-testid="mascot-background-animation-background-1"
      >
        <svg
          width="193"
          height="190"
          viewBox="0 0 193 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M153.753 53.876C153.595 53.9493 153.419 54.0161 153.25 54.0651C151.081 54.7451 148.777 53.538 148.086 51.3768C147.763 50.3298 147.851 49.2109 148.361 48.2363C148.87 47.2618 149.732 46.5374 150.78 46.2144C151.828 45.8913 152.948 45.9781 153.923 46.4865C154.898 46.9949 155.622 47.8557 155.944 48.9027C156.567 50.918 155.592 53.0243 153.753 53.876ZM150.817 47.5708C150.245 47.8359 149.782 48.2721 149.495 48.8334C149.144 49.5127 149.073 50.2843 149.303 51.0047C149.774 52.4998 151.375 53.3384 152.877 52.8787C154.374 52.4069 155.215 50.8063 154.756 49.3056C154.526 48.5852 154.027 47.9888 153.36 47.6334C152.68 47.2836 151.908 47.213 151.187 47.4437C151.049 47.4636 150.927 47.52 150.817 47.5708Z"
            fill="#86E29B"
          />
          <path
            d="M18.3624 73.9241C18.3015 73.9523 18.2407 73.9805 18.1798 74.0087C17.0495 74.4733 15.8073 74.4728 14.6751 74.0078C12.3517 73.0461 11.2387 70.3567 12.2031 68.0341C13.1676 65.7115 15.8598 64.5971 18.1833 65.5589C19.3155 66.0239 20.1951 66.9013 20.6591 68.0304C21.123 69.1595 21.1215 70.4008 20.6552 71.5326C20.2207 72.6053 19.4093 73.4391 18.3624 73.9241ZM15.0433 66.7921C14.3129 67.1305 13.713 67.7186 13.3766 68.5243C12.6776 70.207 13.4834 72.1377 15.1666 72.8348C15.9849 73.1647 16.8786 73.1789 17.6933 72.831C18.5136 72.4952 19.1388 71.8659 19.4818 71.0424C19.8126 70.2245 19.8276 69.3313 19.4801 68.5175C19.1448 67.6981 18.5155 67.0739 17.6917 66.7319C16.8144 66.3703 15.8589 66.4142 15.0433 66.7921Z"
            fill="#FFB0EB"
          />
          <path
            d="M116.617 37.3839C117.397 37.0226 117.736 36.0982 117.375 35.3192C117.015 34.5402 116.09 34.2016 115.31 34.5629C114.53 34.9243 114.19 35.8487 114.551 36.6277C114.912 37.4067 115.837 37.7453 116.617 37.3839Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M55.1317 91.7213C55.9116 91.36 56.2512 90.4356 55.8903 89.6566C55.5294 88.8776 54.6046 88.539 53.8247 88.9003C53.0448 89.2617 52.7052 90.1861 53.0661 90.9651C53.427 91.7441 54.3518 92.0827 55.1317 91.7213Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M31.9932 126.235C32.7731 125.874 33.1127 124.95 32.7518 124.171C32.3909 123.392 31.4661 123.053 30.6863 123.414C29.9064 123.776 29.5667 124.7 29.9277 125.479C30.2886 126.258 31.2134 126.597 31.9932 126.235Z"
            fill="url(#paint2_linear)"
          />
          <path
            d="M119.43 132.589C120.21 132.228 120.55 131.304 120.189 130.525C119.828 129.746 118.903 129.407 118.123 129.768C117.344 130.13 117.004 131.054 117.365 131.833C117.726 132.612 118.651 132.951 119.43 132.589Z"
            fill="url(#paint3_linear)"
          />
          <path
            d="M44.7469 47.3835C46.0108 46.7979 46.5612 45.2997 45.9763 44.0372C45.3914 42.7747 43.8926 42.2259 42.6286 42.8115C41.3647 43.3971 40.8143 44.8953 41.3992 46.1578C41.9841 47.4203 43.4829 47.9691 44.7469 47.3835Z"
            fill="url(#paint4_linear)"
          />
          <path
            d="M105.107 90.7857C106.371 90.2001 106.922 88.702 106.337 87.4394C105.752 86.1769 104.253 85.6282 102.989 86.2137C101.725 86.7993 101.175 88.2975 101.76 89.56C102.344 90.8226 103.843 91.3713 105.107 90.7857Z"
            fill="url(#paint5_linear)"
          />
          <path
            d="M95.5179 172.376C96.7818 171.791 97.3322 170.293 96.7473 169.03C96.1624 167.767 94.6636 167.219 93.3996 167.804C92.1357 168.39 91.5853 169.888 92.1702 171.151C92.7551 172.413 94.2539 172.962 95.5179 172.376Z"
            fill="url(#paint6_linear)"
          />
          <path
            d="M165.098 102.367C166.362 101.781 166.912 100.283 166.327 99.0205C165.742 97.758 164.244 97.2092 162.98 97.7948C161.716 98.3804 161.165 99.8786 161.75 101.141C162.335 102.404 163.834 102.952 165.098 102.367Z"
            fill="url(#paint7_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="114.554"
              y1="36.6326"
              x2="117.379"
              y2="35.3237"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#75C3FC" />
              <stop offset="1" stopColor="#75C3FC" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="53.0688"
              y1="90.97"
              x2="55.8937"
              y2="89.6611"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#75C3FC" />
              <stop offset="1" stopColor="#75C3FC" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="29.9283"
              y1="125.483"
              x2="32.7532"
              y2="124.174"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#75C3FC" />
              <stop offset="1" stopColor="#75C3FC" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="117.365"
              y1="131.837"
              x2="120.19"
              y2="130.528"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#75C3FC" />
              <stop offset="1" stopColor="#75C3FC" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="41.4394"
              y1="46.2402"
              x2="45.947"
              y2="43.9537"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#75C3FC" />
              <stop offset="1" stopColor="#75C3FC" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="101.8"
              y1="89.6425"
              x2="106.307"
              y2="87.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#75C3FC" />
              <stop offset="1" stopColor="#75C3FC" />
            </linearGradient>
            <linearGradient
              id="paint6_linear"
              x1="92.2104"
              y1="171.233"
              x2="96.718"
              y2="168.947"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#75C3FC" />
              <stop offset="1" stopColor="#75C3FC" />
            </linearGradient>
            <linearGradient
              id="paint7_linear"
              x1="161.79"
              y1="101.224"
              x2="166.298"
              y2="98.937"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#75C3FC" />
              <stop offset="1" stopColor="#75C3FC" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="mascot-background-animation__background-2"
        data-testid="mascot-background-animation-background-2"
      >
        <svg
          width="195"
          height="205"
          viewBox="0 0 195 205"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.84 121.982C30.0408 121.969 30.245 122.01 30.4258 122.106L46.4233 130.275C46.8125 130.478 47.0536 130.893 47.0402 131.324C47.0143 131.768 46.7423 132.148 46.3356 132.308L24.5484 140.937C24.1417 141.097 23.6789 141.005 23.3642 140.702C23.0495 140.4 22.9398 139.937 23.0753 139.525L28.8651 122.727C28.9671 122.426 29.2065 122.169 29.5086 122.056C29.614 122.023 29.7194 121.989 29.84 121.982ZM43.1981 131.148L30.5607 124.689L25.9884 137.96L43.1981 131.148Z"
            fill="#75C4FD"
          />
          <path
            d="M168.214 54.3381C168.442 54.3238 168.674 54.3764 168.869 54.485C169.217 54.6781 169.44 55.0266 169.465 55.4145L170.59 68.4358C170.631 68.8763 170.416 69.3061 170.041 69.5444C169.666 69.7827 169.182 69.7862 168.805 69.5681L156.14 62.2246C155.763 62.0065 155.535 61.5911 155.548 61.1472C155.56 60.7033 155.818 60.3112 156.209 60.1122L167.75 54.4343C167.908 54.3841 168.067 54.3473 168.214 54.3381ZM168.027 66.3674L167.248 57.3661L159.267 61.2902L168.027 66.3674Z"
            fill="#FFB0EB"
          />
          <path
            d="M88.6283 16.6885C88.8694 16.6734 89.1154 16.7385 89.3255 16.873L100.21 24.1133C100.561 24.3464 100.762 24.7635 100.708 25.1832C100.653 25.6028 100.381 25.969 99.9864 26.1146L86.3391 31.4276C85.9449 31.5731 85.5106 31.5064 85.1842 31.2314C84.8712 30.9556 84.7239 30.5352 84.8192 30.1264L87.5815 17.5731C87.666 17.2053 87.9162 16.9076 88.2702 16.7646C88.3882 16.7169 88.5078 16.696 88.6283 16.6885ZM97.1342 24.7894L89.4471 19.6718L87.5021 28.5349L97.1342 24.7894Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M117.145 183.156C116.944 183.289 116.698 183.356 116.449 183.344L103.402 182.517C102.982 182.49 102.6 182.229 102.437 181.839C102.274 181.448 102.327 180.995 102.596 180.671L111.758 169.247C112.027 168.923 112.436 168.764 112.856 168.839C113.265 168.921 113.603 169.212 113.725 169.614L117.609 181.866C117.72 182.227 117.652 182.61 117.417 182.911C117.339 183.011 117.246 183.089 117.145 183.156ZM105.728 180.393L114.944 180.981L112.197 172.333L105.728 180.393Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M38.0816 74.0208C38.1217 74.0183 38.1485 74.0166 38.1887 74.0141C42.3831 73.805 45.9744 77.0577 46.1831 81.2474C46.3919 85.4371 43.1484 89.0241 38.9407 89.234C34.7463 89.4431 31.1549 86.1904 30.9462 82.0007C30.7391 77.8377 33.9307 74.2809 38.0816 74.0208ZM38.9104 87.2486C41.9767 87.0565 44.3523 84.4236 44.1997 81.3448C44.0455 78.2393 41.3949 75.8407 38.2859 75.9952C35.1761 76.1364 32.7753 78.7977 32.9296 81.9033C33.0838 85.0088 35.7344 87.4073 38.8434 87.2528C38.8568 87.252 38.8836 87.2503 38.9104 87.2486Z"
            fill="#86E29B"
          />
          <path
            d="M162.178 97.8401C162.218 97.8376 162.245 97.8359 162.285 97.8334C166.48 97.6243 170.071 100.877 170.28 105.067C170.489 109.256 167.245 112.843 163.037 113.053C158.843 113.262 155.252 110.01 155.043 105.82C154.836 101.657 158.027 98.1002 162.178 97.8401ZM163.007 111.068C166.073 110.876 168.449 108.243 168.296 105.164C168.142 102.059 165.492 99.6601 162.383 99.8146C159.273 99.9557 156.872 102.617 157.026 105.723C157.181 108.828 159.831 111.227 162.94 111.072C162.953 111.071 162.98 111.07 163.007 111.068Z"
            fill="#86E29B"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="100.609"
              y1="23.2611"
              x2="84.4152"
              y2="24.2757"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE466" />
              <stop offset="1" stopColor="#FFAFEA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="103.812"
              y1="183.939"
              x2="116.959"
              y2="174.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#75C3FC" />
              <stop offset="0.0928503" stopColor="#81C2F6" />
              <stop offset="1" stopColor="#F0B8BD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="mascot-background-animation__mascot-container"
        data-testid="mascot-background-animation-mascot-container"
      >
        {renderMascot()}
      </div>
    </div>
  );
}

MascotBackgroundAnimation.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};
