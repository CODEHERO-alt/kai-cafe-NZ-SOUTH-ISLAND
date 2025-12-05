export default function About(){
return (
<section id="about" className="container px-4 py-8">
<h3 className="text-xl font-bold">About Norka's Kai</h3>
<p className="mt-2 text-gray-700">No cafe is closer to the lake than Norka’s Kai. Hop out to get a delicious lunch, grab a coffee to go, and enjoy everything that Lake Whakatipu has to offer.</p>
<div className="mt-4 grid md:grid-cols-2 gap-4">
<img src="https://norkaskai.co.nz/wp-content/uploads/2023/12/untitled-design-25.png" alt="cafe" className="rounded-lg shadow"/>
<div>
<h4 className="font-semibold">What people say</h4>
<p className="text-sm text-gray-600 mt-2">Friendly staff, lakeside views, vegan & GF options — a relaxed spot for breakfast and lunch.</p>
</div>
</div>
</section>
)
}
