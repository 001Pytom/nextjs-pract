export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        viewing doc for festure {params.slug[0]} and concept {params.slug[1]}
      </h1>
      /*   so if u navigate theough localhos300:/docs/anything/anotheranything
    it will give viewing doc for anything and concept for another anything */
    );
  } else if (params.slug?.length === 1) {
    return <h1>viewing features for {params.slug[0]}</h1>;
  }

  return <h1>Docs home page</h1>;
}

// this one where yoou creae docs folder and [...slugs] folder,  allows u to have mulctiple rouutes, ed localhost:3000/hdhhd/dhdhdh/shhshs

// if u navigate to localhost../docs, it wont show except u wrap [...slug] foldr with another square bracket and use opriona chaining for length.
// but to access each slugs, u can just use local host/docs/reviews
