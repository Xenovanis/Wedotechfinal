
// Example images — replace with your actual paths
import img1 from '../../assets/team/Ayoub.png'
import img2 from '../../assets/team/essa.png'
 import img3 from '../../assets/team/simo.png'
// import img4 from '../../assets/team/user.png'
// import img5 from '../../assets/team/user.png'
// import img6 from '../../assets/team/user.png'

const team = [
  { name: ' EL Montassir Ayoub', role: 'CEO and founder', image: img1 },
  { name: 'Amari Essa', role: 'CEO and founder', image: img2 },
   { name: 'Mohamed EL Khalfi', role: 'Software Developer', image: img3 },
  // { name: 'Person 1', role: 'Ui/Ux Designer', image: img4 },
  // { name: 'Person 1', role: 'Film Maker', image: img5 },
  // { name: 'Person 1', role: 'Marketer', image: img6 },
]

const TeamSection = () => {
  return (
    <section className="relative bg-white  py-24 text-center">
      {/* Title */}
      <h2 className="text-6xl font-caveat text-center mb-12">meet the owners</h2>

    
      {/* Team grid */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-3 max-w-3xl mx-auto px-4">
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="font-semibold text-md md:text-lg">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
