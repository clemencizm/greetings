import React from 'react'


export default function HeroSection(props) {
  // const [isToggled, setisToggled] = useState(false)
  return (
    <section className='hero bg-base-200 min-h-screen'>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Greeting #Sophie!</h1>
          <p className="py-6">To mark this special day, you will live a wonderful experience.</p>
          <button className="btn btn-neutral" onClick={props.showGift}>check it out!</button>

        </div>
      </div>
    </section>
  )
}
