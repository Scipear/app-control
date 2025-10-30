import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ChevronRight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#31587A"
      d="M12.6 12 8.7 8.1q-.275-.275-.275-.7t.275-.7.7-.275.7.275l4.6 4.6q.15.15.213.325t.062.375-.062.375-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275-.275-.7.275-.7z"
    />
  </Svg>
)
export default ChevronRight