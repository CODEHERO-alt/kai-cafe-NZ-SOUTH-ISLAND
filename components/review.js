export default function Review(){
const reviews = [
{name:'Local visitor', text:'Hidden gem — great coffee and lakeside views.'},
{name:'Tourist', text:'Perfect stop after biking the trail — friendly staff.'}
]
return (
<section className="container px-4 py-8">
<h3 className="text-lg font-bold">Reviews</h3>
<div className="mt-3 space-y-3">
{reviews.map((r,i)=> (
<div key={i} className="p-3 bg-white rounded shadow-sm">
<div className="text-sm font-semibold">{r.name}</div>
<div className="text-sm text-gray-600">{r.text}</div>
</div>
))}
</div>
</section>
)
}
