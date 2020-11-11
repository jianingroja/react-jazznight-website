import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//换页时返回顶部
const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
