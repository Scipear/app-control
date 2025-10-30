import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ChevronDown = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="none"
      stroke="#31587A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 10-5 5-5-5"
    />
  </Svg>
)
export default ChevronDown