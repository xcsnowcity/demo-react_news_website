import { useLocation } from "react-router-dom";

export function getLocation(Component) {
  return (props) => {
    const params = useLocation();
    return <Component {...props} params={params} />;
  };
}