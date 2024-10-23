import Hero from "./components/Hero";
import TopCategory from "./components/TopCategory";
import TypeServices from "./components/TypeServices";


export default function Home() {
  return (
    <>
      <Hero height="h-[55vh]"/>
      <TypeServices />
      <TopCategory />
      {/* <Feature /> */}
    </>
  );
}
