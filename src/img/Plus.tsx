import * as React from "react"
import { SVGProps } from "react"

const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="#10b981"
    viewBox="0 0 1792 1792"
    {...props}
  >
    <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28H800q-40 0-68-28t-28-68v-416H288q-40 0-68-28t-28-68V736q0-40 28-68t68-28h416V224q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
  </svg>
)

export default Plus