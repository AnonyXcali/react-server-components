import { ClientComponentOne } from "@/components/client-component-one";
import {ServerComponentOne} from "@/components/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>Page Interleaving</h1>
      {/* <ServerComponentOne /> */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  )
}