export default function Menu(){
const items = [
{title: 'Flat White', price: 'NZ$5'},
{title: 'Matcha Latte', price: 'NZ$6.5'},
{title: 'Smoked Salmon Bagel', price: 'NZ$15'},
{title: 'Cromwell Sanga Pie', price: 'NZ$10'},
]
return (
<section id="menu" className="container px-4 py-8">
<h3 className="text-xl font-bold">Menu highlights</h3>
<p className="text-sm text-gray-600">A snapshot — cafe offers coffee, smoothies, sandwiches, pastries; vegan & gluten-free options available.</p>
<div className="mt-4 grid grid-cols-2 gap-3">
{items.map(i=> (
<div key={i.title} className="p-3 rounded-lg bg-white shadow-sm">
<div className="flex justify-between items-center">
<div>
<div className="font-semibold">{i.title}</div>
<div className="text-xs text-gray-500">Fresh, locally sourced</div>
</div>
<div className="font-medium">{i.price}</div>
</div>
</div>
))}
</div>
</section>
)
}
