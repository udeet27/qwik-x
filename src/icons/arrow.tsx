import { component$ } from "@builder.io/qwik";
import { Svg } from "~/components/svg";

export const ArrowLeftIcon = component$(() => {
  return (
    <Svg>
      <g>
        <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
      </g>
    </Svg>
  );
});