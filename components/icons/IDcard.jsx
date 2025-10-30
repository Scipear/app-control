import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IDcard = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 15 15"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5zM3 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9 0H9V5h3zm0 3H9V8h3zM5 9a2.93 2.93 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.93 2.93 0 0 0 5 9"
      clipRule="evenodd"
    />
  </Svg>
)
export default IDcard