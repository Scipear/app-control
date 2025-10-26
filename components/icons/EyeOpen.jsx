import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const EyeOpen = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <Path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
    </G>
  </Svg>
)

export default EyeOpen