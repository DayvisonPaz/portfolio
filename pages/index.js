
import Link from 'next/link'
import React from "react";


export default function Home() {
  return (
    <>
<h1> hello to my website</h1>
<button><Link href='/netflix'><a>netflix</a></Link></button>
<button><Link href='/portifolio'><a>portifolio</a></Link></button>
<button><Link href='/loja'><a>loja</a></Link></button>
    </>
  )
}
