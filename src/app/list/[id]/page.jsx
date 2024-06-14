"use client";
import Link from 'next/link'


export default function List(props) {

  return (
      <>
        <div className="contentWrap">
          <div>
            <h2>Hello!!</h2>
            <Link href="/">Move to '/'</Link>
            <p>params : {props.params.id}</p>
          </div>
            
        </div>
      </>
  )
}