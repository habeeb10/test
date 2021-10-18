import React from 'react';
import {Path} from 'react-native-svg';
import Svg, {
  Ellipse,
  G,
  Defs,
  Rect,
  ClipPath,
  Line,
  Circle,
} from 'react-native-svg';

export function Coolicon(props) {
  return (
    <Svg width="19" height="17" viewBox="0 0 19 17" fill="none" {...props}>
      <Path
        d="M0.467285 5.45795C0.467065 4.17087 0.984356 2.93774 1.90277 2.03602C2.82119 1.1343 4.0636 0.639723 5.35046 0.663558C6.87519 0.655461 8.33008 1.30208 9.34579 2.43926C10.3615 1.30208 11.8164 0.655461 13.3411 0.663558C14.628 0.639723 15.8704 1.1343 16.7888 2.03602C17.7072 2.93774 18.2245 4.17087 18.2243 5.45795C18.2243 10.2133 12.5607 13.8037 9.34579 16.6449C6.13799 13.7798 0.467285 10.2168 0.467285 5.45795Z"
        fill="#EB5757"
      />
    </Svg>
  );
}

export function Secure(props) {
  return (
    <Svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G opacity="0.4" clip-path="url(#clip0_1:224)">
        <Path
          d="M2.58446 3.4731L3.47284 2.58472L18.0922 17.2041L17.2039 18.0925L2.58446 3.4731ZM10.4733 7.75734L12.9194 10.2034C12.8854 9.56572 12.6168 8.96309 12.1652 8.51152C11.7136 8.05994 11.111 7.79132 10.4733 7.75734ZM10.2035 12.9193L7.7574 10.4732C7.79139 11.1109 8.06001 11.7135 8.51158 12.1651C8.96316 12.6167 9.56578 12.8853 10.2035 12.9193Z"
          fill="#2B365A"
        />
        <Path
          d="M10.3385 14.2154C9.74209 14.2154 9.15369 14.0778 8.61911 13.8133C8.08453 13.5488 7.61818 13.1646 7.25634 12.6904C6.89451 12.2163 6.64694 11.6651 6.53292 11.0796C6.41889 10.4942 6.44147 9.89036 6.5989 9.31509L3.80954 6.52532C2.67029 7.56885 1.58475 8.93062 0.64621 10.3384C1.71317 12.1154 3.17267 13.9424 4.69275 14.9899C6.43656 16.191 8.33261 16.8 10.3288 16.8C11.4197 16.8007 12.5025 16.6122 13.5289 16.2427L11.3639 14.078C11.0298 14.1695 10.6849 14.2157 10.3385 14.2154ZM10.3385 6.46151C10.9349 6.46148 11.5233 6.59906 12.0579 6.86355C12.5925 7.12803 13.0589 7.51229 13.4207 7.98643C13.7825 8.46057 14.0301 9.01179 14.1441 9.59722C14.2581 10.1827 14.2356 10.7865 14.0781 11.3618L16.9317 14.2154C18.1089 13.1553 19.1961 11.7293 20.0308 10.3384C18.9655 8.58453 17.4906 6.76197 15.9447 5.70147C14.1791 4.49074 12.2895 3.87689 10.3288 3.87689C9.24992 3.87844 8.18008 4.07391 7.17034 4.45399L9.31517 6.59882C9.64862 6.50755 9.9928 6.46137 10.3385 6.46151Z"
          fill="#2B365A"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1:224">
          <Rect width="20.6769" height="20.6769" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function Icon(props) {
  return (
    <Svg width="20" height="15" viewBox="0 0 20 15" fill="none" {...props}>
      <Path
        d="M0 15H2C2 12.7909 3.79086 11 6 11C8.20914 11 10 12.7909 10 15H12C12 11.6863 9.31371 9 6 9C2.68629 9 0 11.6863 0 15Z"
        fill="#2E3A59"
      />
      <Path
        d="M2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4C9.99724 6.208 8.208 7.99725 6 8C3.79086 8 2 6.20914 2 4ZM4.00223 3.97134C3.98658 5.06383 4.85057 5.9667 5.94269 5.99912C7.03481 6.03153 7.95083 5.1815 8 4.09V4C8 2.89543 7.10457 2 6 2C4.9074 2.00111 4.01789 2.87885 4.00223 3.97134Z"
        fill="#2E3A59"
      />
      <Path
        d="M16.339 10.9994C16.131 10.8144 15.896 10.6214 15.647 10.4174L15.6 10.3794L15.5944 10.3749C14.4384 9.43166 13 8.25808 13 6.79942C13.0002 6.31537 13.1953 5.85178 13.5413 5.51329C13.8873 5.1748 14.3551 4.98994 14.839 5.00042C15.4112 4.99888 15.9569 5.24153 16.339 5.66742C16.7212 5.24163 17.2668 4.99901 17.839 5.00042C18.3224 4.99102 18.7893 5.17651 19.1345 5.5151C19.4797 5.85369 19.6741 6.31691 19.674 6.80042C19.674 8.26516 18.2245 9.44739 17.059 10.398L17.056 10.4004L16.999 10.4474L16.9808 10.4623C16.7505 10.6508 16.5329 10.829 16.338 11.0014L16.339 10.9994Z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export function SearchIcon(props) {
  return (
    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.833336 8.74999C0.833336 4.37776 4.37777 0.833328 8.75 0.833328C13.1222 0.833328 16.6667 4.37776 16.6667 8.74999C16.6667 10.6359 16.0072 12.3679 14.9063 13.7277L17.9672 16.7887C18.2927 17.1141 18.2927 17.6418 17.9672 17.9672C17.6418 18.2926 17.1141 18.2926 16.7887 17.9672L13.7278 14.9063C12.3679 16.0072 10.636 16.6667 8.75 16.6667C4.37777 16.6667 0.833336 13.1222 0.833336 8.74999ZM8.75 2.49999C5.29824 2.49999 2.5 5.29823 2.5 8.74999C2.5 12.2018 5.29824 15 8.75 15C12.2018 15 15 12.2018 15 8.74999C15 5.29823 12.2018 2.49999 8.75 2.49999ZM5.80373 5.38701C6.55686 4.63393 7.59966 4.16666 8.75 4.16666C9.90034 4.16666 10.9432 4.63393 11.6963 5.38703C12.0217 5.71247 12.0217 6.24011 11.6963 6.56554C11.3708 6.89098 10.8432 6.89098 10.5177 6.56554C10.0644 6.11223 9.44058 5.83333 8.75 5.83333C8.05943 5.83333 7.43556 6.11223 6.9822 6.56556C6.65675 6.89099 6.12911 6.89097 5.80368 6.56552C5.47826 6.24007 5.47828 5.71244 5.80373 5.38701Z"
        fill="grey"
        fill-opacity="0.4"
      />
    </Svg>
  );
}

export function FriendIcon(props) {
  return (
    <Svg width="20" height="18" viewBox="0 0 20 18" fill="none" {...props}>
      <Path
        d="M7 0C4.23858 0 2 2.23858 2 5C2 7.76142 4.23858 10 7 10C9.76142 10 12 7.76142 12 5C12 2.23858 9.76142 0 7 0ZM4 5C4 3.34315 5.34315 2 7 2C8.65685 2 10 3.34315 10 5C10 6.65685 8.65685 8 7 8C5.34315 8 4 6.65685 4 5Z"
        fill="#2E3A59"
      />
      <Path
        d="M14.9084 5.21828C14.6271 5.07484 14.3158 5.00006 14 5.00006V3.00006C14.6316 3.00006 15.2542 3.14956 15.8169 3.43645C15.8789 3.46805 15.9399 3.50121 16 3.5359C16.4854 3.81614 16.9072 4.19569 17.2373 4.65055C17.6083 5.16172 17.8529 5.75347 17.9512 6.37737C18.0496 7.00126 17.9987 7.63958 17.8029 8.24005C17.6071 8.84053 17.2719 9.38611 16.8247 9.83213C16.3775 10.2782 15.8311 10.6119 15.2301 10.8062C14.6953 10.979 14.1308 11.037 13.5735 10.9772C13.5046 10.9698 13.4357 10.9606 13.367 10.9496C12.7438 10.8497 12.1531 10.6038 11.6431 10.2319L11.6421 10.2311L12.821 8.61557C13.0761 8.80172 13.3717 8.92477 13.6835 8.97474C13.9953 9.02471 14.3145 9.00014 14.615 8.90302C14.9155 8.80591 15.1887 8.63903 15.4123 8.41602C15.6359 8.19302 15.8035 7.92024 15.9014 7.62001C15.9993 7.31978 16.0247 7.00063 15.9756 6.68869C15.9264 6.37675 15.8041 6.08089 15.6186 5.82531C15.4331 5.56974 15.1898 5.36172 14.9084 5.21828Z"
        fill="#2E3A59"
      />
      <Path
        d="M17.9981 18C17.9981 17.475 17.8947 16.9551 17.6938 16.47C17.4928 15.9849 17.1983 15.5442 16.8271 15.1729C16.4558 14.8017 16.0151 14.5072 15.53 14.3062C15.0449 14.1053 14.525 14.0019 14 14.0019V12C14.6821 12 15.3584 12.1163 16 12.3431C16.0996 12.3783 16.1983 12.4162 16.2961 12.4567C17.0241 12.7583 17.6855 13.2002 18.2426 13.7574C18.7998 14.3145 19.2417 14.9759 19.5433 15.7039C19.5838 15.8017 19.6217 15.9004 19.6569 16C19.8837 16.6416 20 17.3179 20 18H17.9981Z"
        fill="#2E3A59"
      />
      <Path
        d="M14 18H12C12 15.2386 9.76142 13 7 13C4.23858 13 2 15.2386 2 18H0C0 14.134 3.13401 11 7 11C10.866 11 14 14.134 14 18Z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export function LikeIcon(props) {
  return (
    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" {...props}>
      <Path
        d="M9.99999 18C9.35499 17.428 8.62599 16.833 7.85499 16.2H7.84499C5.12999 13.98 2.05299 11.468 0.693992 8.45803C0.24751 7.49975 0.0108963 6.45715 -1.91116e-05 5.40003C-0.00300091 3.94951 0.578763 2.55901 1.6138 1.54279C2.64884 0.526575 4.04978 -0.0295798 5.49999 2.56451e-05C6.68062 0.00189045 7.83583 0.343107 8.82799 0.983026C9.26396 1.26599 9.65841 1.60828 9.99999 2.00003C10.3435 1.60982 10.738 1.26773 11.173 0.983026C12.1647 0.34298 13.3197 0.0017442 14.5 2.56451e-05C15.9502 -0.0295798 17.3511 0.526575 18.3862 1.54279C19.4212 2.55901 20.003 3.94951 20 5.40003C19.9898 6.45884 19.7532 7.50322 19.306 8.46303C17.947 11.473 14.871 13.984 12.156 16.2L12.146 16.208C11.374 16.837 10.646 17.432 10.001 18.008L9.99999 18ZM5.49999 2.00003C4.5685 1.98837 3.67006 2.34487 2.99999 2.99203C2.35438 3.62619 1.99355 4.49507 1.99991 5.40003C2.01132 6.17053 2.18582 6.92988 2.51199 7.62803C3.1535 8.92673 4.0191 10.1021 5.06899 11.1C6.05999 12.1 7.19999 13.068 8.18599 13.882C8.45899 14.107 8.73699 14.334 9.01499 14.561L9.18999 14.704C9.45699 14.922 9.73299 15.148 9.99999 15.37L10.013 15.358L10.019 15.353H10.025L10.034 15.346H10.039H10.044L10.062 15.331L10.103 15.298L10.11 15.292L10.121 15.284H10.127L10.136 15.276L10.8 14.731L10.974 14.588C11.255 14.359 11.533 14.132 11.806 13.907C12.792 13.093 13.933 12.126 14.924 11.121C15.974 10.1236 16.8397 8.94854 17.481 7.65003C17.8131 6.94583 17.9901 6.17853 18 5.40003C18.0042 4.49786 17.6435 3.63232 17 3.00003C16.3312 2.34995 15.4326 1.99051 14.5 2.00003C13.3619 1.99035 12.2739 2.46739 11.51 3.31103L9.99999 5.05103L8.48999 3.31103C7.72606 2.46739 6.63807 1.99035 5.49999 2.00003Z"
        fill="#2E3A59"
      />
    </Svg>
  );
}
export function ChatIcon(props) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M5.05135 14.8285L5.70486 15.1778C6.71761 15.7193 7.8486 16.0017 8.99699 16L9.00001 16C12.8661 16 16 12.8661 16 9C16 5.13387 12.8661 2 9.00001 2C5.13388 2 2.00001 5.13387 2.00001 9V9.00301C1.99828 10.1514 2.28073 11.2824 2.82217 12.2951L3.17155 12.9486L2.63433 15.3657L5.05135 14.8285ZM1.01578e-05 18L1.05841 13.2381C0.361389 11.9343 -0.00221566 10.4784 1.01578e-05 9C1.01578e-05 4.0293 4.02931 0 9.00001 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9.00001 18C7.52162 18.0022 6.06566 17.6386 4.76191 16.9416L1.01578e-05 18Z"
        fill="#2E3A59"
      />
    </Svg>
  );
}
export function ProfileIcon(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M10 20C8.48807 20.0043 6.99523 19.6622 5.63601 19C5.13856 18.758 4.66194 18.4754 4.21101 18.155L4.07401 18.055C2.83383 17.1396 1.81988 15.9522 1.11001 14.584C0.375744 13.1679 -0.00508427 11.5952 -4.21298e-05 10C-4.21298e-05 4.47715 4.47716 0 10 0C15.5229 0 20.0001 4.47715 20.0001 10C20.005 11.5944 19.6246 13.1664 18.891 14.582C18.1821 15.9494 17.1696 17.1364 15.931 18.052C15.4638 18.394 14.9679 18.6951 14.449 18.952L14.369 18.992C13.0089 19.6577 11.5143 20.0026 10 20ZM10 15C8.50148 14.9971 7.12767 15.834 6.44301 17.167C8.6844 18.2772 11.3156 18.2772 13.557 17.167V17.162C12.8715 15.8305 11.4976 14.9954 10 15ZM10 13C12.1661 13.0028 14.1634 14.1701 15.229 16.056L15.244 16.043L15.258 16.031L15.241 16.046L15.231 16.054C17.76 13.8691 18.6643 10.3423 17.4987 7.21011C16.333 4.07788 13.3431 2.00032 10.001 2.00032C6.65892 2.00032 3.669 4.07788 2.50336 7.21011C1.33772 10.3423 2.24201 13.8691 4.77101 16.054C5.83727 14.169 7.83437 13.0026 10 13ZM10 12C7.79087 12 6.00001 10.2091 6.00001 8C6.00001 5.79086 7.79087 4 10 4C12.2091 4 14 5.79086 14 8C14 9.06087 13.5786 10.0783 12.8284 10.8284C12.0783 11.5786 11.0609 12 10 12ZM10 6C8.89544 6 8.00001 6.89543 8.00001 8C8.00001 9.10457 8.89544 10 10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6Z"
        fill="#2E3A59"
      />
    </Svg>
  );
}
