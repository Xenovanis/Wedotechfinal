export default function ThreeStepProcess() {
    const steps = [
      {
        number: "1",
        title: "Book a Free Call",
        desc: "We audit your brand & uncover opportunities.",
      },
      {
        number: "2",
        title: "Get a Custom Content Plan",
        desc: "A tailored strategy built to convert.",
      },
      {
        number: "3",
        title: "Watch Your Brand Grow",
        desc: "More views, engagement & sales.",
      },
    ]
  
    return (
      <section className="relative w-full bg-white py-16 px-6 md:px-16 overflow-hidden">
        {/* Wavy SVG line */}
        <div className="absolute top-12 left-0 w-full h-32 pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,50 C200,0 400,100 600,50 C800,0 1000,100 1200,50"
              stroke="#999999"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </div>
  
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-16 md:gap-0 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-sm">
              {/* Circle */}
              <div className="w-24 h-24 rounded-full border border-black flex items-center justify-center text-3xl font-extrabold mb-4 relative z-10 bg-white">
                {step.number}
                {/* Circular text (optional) */}
                {/* You can use a circular text plugin or SVG textPath here */}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  