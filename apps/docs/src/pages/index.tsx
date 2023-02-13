import { Button } from "@vsamaru/core";
import { useIsomorphicLayoutEffect } from "@vsamaru/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("vsamaru docs page");
  }, []);
  return (
    <div>
      <h1>vsamaru Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
