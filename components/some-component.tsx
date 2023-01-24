import dynamic from "next/dynamic";

const OtherComponent = dynamic(() => import("./other-component"));

const SomeComponent = () => {
  return <OtherComponent />;
};

export default SomeComponent;
