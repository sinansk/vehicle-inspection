import * as React from "react"
import { SVGProps } from "react"

const Dot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="mr-2"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 1792 1792"
    {...props}
  >
    <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM896 352q-148 0-273 73T425 623t-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5T1281.5 1561 896 1664t-385.5-103T231 1281.5 128 896t103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z" />
  </svg>
)

export default Dot