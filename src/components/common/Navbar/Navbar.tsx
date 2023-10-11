// "use client";

// import theme from "@/style/theme";
// import {
//   NavItemCenter,
//   NavItemArea,
//   NavLabel,
//   NavButton,
//   Wrapper,
//   NavLink,
// } from "./Navbar.style";
// // import useAddToast from "hooks/@common/useAddToast";
// import { URL_PATH } from "@/constants";

// const Navbar = () => {
//   const location = useLocation();
//   const addToast = useAddToast();

//   const goReal = () => {
//     history.pushState(null, "", "https://pium.life");
//   };

//   const askReal = () => {
//     addToast({
//       type: "info",
//       message: "피움과 함께 반려 식물을 관리해봐요!",
//       time: 3000,
//       buttonContent: "피움 서비스 방문하기",
//       onClickButton: goReal,
//     });
//   };

//   const NavItem = (props: { path: string; label: string }) => {
//     const { path, label } = props;
//     const active = path === location.pathname;
//     const iconColor = active
//       ? theme.color.fontPrimaryForBackground
//       : theme.color.subLight;

//     return (
//       <NavItemArea $active={active}>
//         <NavItemCenter>
//           <NavLabel $active={active}>{label}</NavLabel>
//         </NavItemCenter>
//       </NavItemArea>
//     );
//   };

//   return (
//     <Wrapper>
//       <NavLink href={URL_PATH.main}>
//         <NavItem path={URL_PATH.main} label="메인" />
//       </NavLink>
//       <NavButton onClick={askReal}>
//         <NavItem path={URL_PATH.garden} label="모두의 정원" />
//       </NavButton>
//       <NavButton onClick={askReal}>
//         <NavItem path={URL_PATH.reminder} label="리마인더" />
//       </NavButton>
//       <NavButton onClick={askReal}>
//         <NavItem path={URL_PATH.petList} label="내 식물" />
//       </NavButton>
//       <NavButton onClick={askReal}>
//         <NavItem path={URL_PATH.petList} label="내 식물" />
//       </NavButton>
//     </Wrapper>
//   );
// };

// export default Navbar;
