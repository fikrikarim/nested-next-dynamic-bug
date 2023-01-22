/** Add your relevant code here for the issue to reproduce */

import dynamic from "next/dynamic";

const SomeComponent = dynamic(() => import("../components/some-component"));

export default function Home() {
  return <SomeComponent />;
}
